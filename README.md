 🚀
 *A full-stack payment integration project using Razorpay that enables seamless and secure online payments.
 
*Built with React, HTML, CSS, JavaScript on the frontend, and Node.js, Express, MongoDB on the backend.

*Implements secure payment creation, payment verification, and follows a structured backend architecture

---

## ✨ Features
✅ **Frontend** — React, HTML, CSS, JavaScript  
✅ **Backend** — Node.js, Express, MongoDB  
✅ **Secure Payments** — Razorpay API Integration  
✅ **Payment Verification** — using `crypto` library  
✅ **Clean Architecture** — Config, Controllers, Routes, Models, Services, Utils  
✅ **Environment Variables** — Managed via `.env`

---

## 🛠️ Tech Stack

| **Category**  | **Technologies** |
|---------------|------------------|
| **Frontend**  | React, HTML, CSS, JavaScript |
| **Backend**   | Node.js, Express.js |
| **Database**  | MongoDB |
| **Payment**   | Razorpay API |
| **Security**  | bcrypt, crypto |
| **Others**    | dotenv |

---

## 📁 Project Structure
razorpay-payment-integration/
├── config/ # DB & Razorpay configuration
├── controllers/ # Business logic
├── routes/ # API endpoints
├── models/ # Mongoose schemas
├── services/ # Service layer
├── utils/ # Helper functions
├── .env # Environment variables
├── server.js # Entry point
└── package.json

---

## 🔄 Payment Flow
1️⃣ User clicks **"Pay Now"** button.  
2️⃣ Backend creates **order** via Razorpay API.  
3️⃣ Razorpay popup opens for secure payment.  
4️⃣ **Crypto** verifies payment signature.  
5️⃣ Payment details saved in MongoDB.  

---
