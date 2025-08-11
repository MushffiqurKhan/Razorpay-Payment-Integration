const crypto = require("crypto");

function verifySignature(orderId, paymentId, signature, secret) {
    const sign = orderId + "|" + paymentId;
    const expectedSign = crypto
        .createHmac("sha256", secret)
        .update(sign)
        .digest("hex");
    return expectedSign === signature;
}

module.exports = verifySignature;
