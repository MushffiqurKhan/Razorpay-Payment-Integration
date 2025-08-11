const paymentService = require("../Services/PaymentService");
const verifySignature = require("../utils/verifySignature");

exports.createOrder = async (req, res) => {
    try {
        const { amount } = req.body;
        const order = await paymentService.createOrder(amount);
        res.json({ success: true, order });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, currency } = req.body;

        const isValid = verifySignature(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            process.env.RAZORPAY_KEY_SECRET
        );

        if (!isValid) {
            return res.status(400).json({ success: false, message: "Invalid Signature" });
        }

        await paymentService.savePayment(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            amount,
            currency,
            "paid"
        );

        res.json({ success: true, message: "Payment Verified & Saved" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
