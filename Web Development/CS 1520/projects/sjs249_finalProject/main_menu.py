from flask import Flask, render_template, request, url_for, abort, redirect
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from order_model import Base, Order

order_number = 0

app = Flask(__name__)

engine = create_engine("sqlite:///orders.db", echo=True)
Base.metadata.create_all(bind=engine)
Session = sessionmaker(bind=engine)
session = Session()

@app.route("/<table_number>/")
def default(table_number):
    return render_template("main_menu.html", table_number=table_number)

@app.route("/order_summary/<table_number>", methods=["POST"])
def order_summary(table_number):
    orders = request.form["order_summary"]
    customer_name = request.form["customer_name"]
    global order_number
    order_number = order_number + 1

    # creating an Order object to be saved into the database
    new_order = Order(customer_name=customer_name, 
                      orders=orders.strip(), 
                      order_number=order_number,
                      table_number=int(table_number))
    
    new_order_in_JSON_format = new_order.toJSON()

    try:
        session.add(new_order)
        session.commit()
        return render_template("order_summary.html", table_number=table_number, order=new_order_in_JSON_format)
    except:
        return 'There was an issue adding your task'

@app.route("/kitchen/")
def kitchen():
    orders = session.query(Order).order_by(Order.date_created).all()
    ordersInJSONFormat = []
    for order in orders:
        ordersInJSONFormat.append(order.toJSON())
    print(ordersInJSONFormat)
    return render_template("kitchen.html", orders=ordersInJSONFormat)

@app.route('/delete_order/<order_id>')
def delete_order(order_id):
    order_to_delete = session.query(Order).get(order_id)
    if order_to_delete is None:
        abort(404)
    try:
        session.delete(order_to_delete)
        session.commit()
        return redirect(url_for("kitchen"))
    except:
        return 'There was a problem deleting that task'

if __name__ == "__main__":
    app.run(debug=False)