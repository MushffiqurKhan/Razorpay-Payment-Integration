const Razorpay = require("razorpay");
const Payment = require("../Model/payment");

const instance = new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
});

exports.createOrder = async (amount) => {
    const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`
    };
    return await instance.orders.create(options);
};

exports.savePayment = async (orderId, paymentId, signature, amount, currency, status) => {
    const payment = new Payment({
        orderId,
        paymentId,
        signature,
        amount,
        currency,
        status
    });
    return await payment.save();
};
