from flask import Flask, render_template, url_for, request
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from order_model import Base, Order

app = Flask(__name__)

engine = create_engine("sqlite:///orders.db", echo=True)
Base.metadata.create_all(bind=engine)
Session = sessionmaker(bind=engine)
session = Session()

order_number = 0

@app.route("/")
def main_menu():
    return render_template("main_menu.html" , order_summary_reference=url_for("order_summary"))

@app.route("/order_summary", methods=["POST"])
def order_summary():
    order_items_in_String_format = request.form["order_summary"].strip()
    order_items_in_array_format = order_items_in_String_format.split("\n")
    customer = request.form["customer"]
    global order_number
    order_number = order_number + 1

    # creating an Order object to be saved into the database
    new_order = Order(customer_name=customer, 
                      orders=order_items_in_String_format, 
                      order_number=order_number)
    
    current_order = { 
        "customer" : customer, 
        "order_items" : order_items_in_array_format, 
        "order_number" : order_number}

    try:
        session.add(new_order)
        session.commit()
        return render_template("order_summary.html", order = current_order)
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

if __name__ == "__main__":
    app.run(debug=True)