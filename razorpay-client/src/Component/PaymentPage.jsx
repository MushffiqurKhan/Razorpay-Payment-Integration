import React from "react";
import axios from "axios";

const PaymentPage = () => {
  const handlePayment = async () => {
    try {
      // Step 1: Create axios instance with backend URL
      const API = axios.create({
        baseURL: import.meta.env.VITE_BACKEND_URL,
      });

      // Step 2: Create order from backend
      const { data } = await API.post("http://localhost:4000/api/payments/create-order", { amount: 500 });
      const { id: order_id, currency, amount } = data.order;

      // Step 3: Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount.toString(),
        currency,
        name: "Test Payment",
        description: "Razorpay Integration",
        order_id,
        handler: async function (response) {
          try {
            const verifyRes = await API.post("http://localhost:4000/api/payments/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: amount / 100,
              currency,
            });

            alert(verifyRes.data.message);
          } catch (err) {
            console.error("Verification error:", err);
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Step 4: Open Razorpay popup
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
   
    <div style={{ textAlign: "center" }}>
  <h1 style={{ fontSize: "28px",marginLeft:"400px" }}>
    Razorpay Payment Interface
  </h1>

  <div
    style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    borderRadius: "8px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    marginLeft: "400px",
    transition: "transform 0.3s, box-shadow 0.3s",
    }}
     onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 10px 28px";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow =
      "rgba(149, 157, 165, 0.2) 0px 8px 24px";
  }}
  >
   
    <div
      style={{
        width: "220px",
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    
    >
      <img
        src="/Razorpay.jpg"
        alt="Create Payment"
        style={{ width: "80px", height: "80px", marginBottom: "15px" }}
      />
      <h3 style={{ marginBottom: "15px" }}>Create Payment</h3>
      <button
        onClick= {handlePayment}
        style={{
          padding: "10px 20px",
          background: "Green",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        Pay ₹500
      </button>
    </div>
  </div>
</div>

    
  );
};

export default PaymentPage;
