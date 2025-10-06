from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

@app.route("/")
def default():
    return render_template("main_page.html")

@app.route("/christmas_story/")
def christmas_story():
    return render_template("christmas_story.html")

@app.route("/buy_tickets/<play_name>", methods=["post"])
def buy_tickets(play_name):
    return render_template("buy_tickets.html", play_name = play_name)

@app.route("/order_summary/<play_name>", methods=["post"])
def order_summary(play_name):
    date = request.form.get("date_and_time")
    seat_zone = request.form.get("zone")
    seat_sector = request.form.get("sector")
    customer_name = request.form.get("customer_name")
    ticket_price = "$100.00"

    order = { 
        "date" : date, 
        "seat_zone" : seat_zone, 
        "seat_sector" : seat_sector,
        "customer_name" : customer_name,
        "ticket_price" : ticket_price
    }

    return render_template("order_summary.html", play_name = play_name, order = order)

if __name__ == "__main__":
    app.run(debug=False)