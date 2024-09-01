# Abandoned Checkout Recovery

This is a basic abandoned checkout recovery project. 

**Features:**
1) It sends 3 reminders to customers after they have abandoned the checkout.
2) If the customer places an order between these reminders, it does not send any more reminders.
3) It also shows a list of all the orders.

## Steps to run
1) Clone this repository in your local machine.
2) Open a terminal and cd into the project directory.
3) Run *npm install*  to install all the dependencies.
4) Change the email and password in the .env file to your email and password. If you have 2FA enabled in your account, then you might have to generate an app password and use that.
5) Run "node app.js" and the server will start running.

## Routes
We have 3 routes in this project as below:
1) **/orders** -> You can send a get request to this route and it will fetch the list of all orders that have been placed and renders them to the screen.
2) **/webhook/checkout-abandoned** -> It receives a post request with the request body and saves an abandoned checkout. It also schedules the reminder emails at pre-defined time intervals.
3) **/webhook/order-placed** -> This also receives a post request along with the request body and places an order.

You can test the above routes using tools like Postman and others.
