# 🏥 Hospital Management System Backend

A RESTful backend API for a Hospital Management System built using **Node.js**, **Express.js**, and **MongoDB**. This system allows doctors to register and log in, patients to be managed, and appointments to be booked and tracked.

---

## 🚀 Features

- 👨‍⚕️ Doctor Registration and Login
- 🔐 Password Hashing using bcrypt
- 🎟️ JWT Authentication
- 🧑 Patient Management
- 📅 Appointment Booking
- 📋 Appointment Status Tracking
- 🔄 Update Appointment Status
- 🗑️ Delete Appointments
- 🔗 MongoDB Relationships using Mongoose

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

---

## 📂 Project Structure

```
PROJECT/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── doctorController.js
│   ├── patientController.js
│   └── appointmentController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── Doctor.js
│   ├── Patient.js
│   └── Appointment.js
│
├── routes/
│   ├── doctorRoutes.js
│   ├── patientRoutes.js
│   └── appointmentRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

### Navigate to Project Folder

```bash
cd PROJECT
```

### Install Dependencies

```bash
npm install
```

### Create `.env` File

```env
PORT=5000

DB_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=7d
```

### Start Server

```bash
npm run dev
```

or

```bash
node server.js
```

---

## 🗄 Database Models

### Doctor

- fullname
- email
- phone
- password
- specialization
- experience
- qualification

### Patient

- fullname
- email
- age
- gender
- phone
- bloodGroup
- address

### Appointment

- patient (ObjectId)
- doctor (ObjectId)
- appointmentDate
- reason
- status

Status values:

- Pending
- Confirmed
- Completed
- Cancelled

---

## 📌 API Endpoints

### Doctor APIs

#### Register Doctor

```http
POST /api/doctors/register
```

#### Login Doctor

```http
POST /api/doctors/login
```

#### Get Doctor Profile

```http
GET /api/doctors/profile
```

---

### Patient APIs

#### Create Patient

```http
POST /api/patients
```

#### Get All Patients

```http
GET /api/patients
```

#### Get Patient By ID

```http
GET /api/patients/:id
```

#### Update Patient

```http
PUT /api/patients/:id
```

#### Delete Patient

```http
DELETE /api/patients/:id
```

---

### Appointment APIs

#### Book Appointment

```http
POST /api/appointments/book
```

#### Get All Appointments

```http
GET /api/appointments
```

#### Get Appointment By ID

```http
GET /api/appointments/:id
```

#### Update Appointment Status

```http
PATCH /api/appointments/:id/status
```

#### Delete Appointment

```http
DELETE /api/appointments/:id
```

---

## 🔐 Authentication

JWT-based authentication is implemented for doctors.

Protected routes require:

```
Authorization: Bearer <token>
```

---

## 📷 Sample Appointment Request

```json
{
  "patientId": "6850f7d5c3a1b123456789ab",
  "doctorId": "6850f8a4c3a1b123456789cd",
  "appointmentDate": "2026-06-20",
  "reason": "Fever and headache"
}
```

---

## 🌟 Future Enhancements

- Admin Panel
- Role-Based Access Control
- Email Notifications
- Doctor Availability Scheduling
- Prescription Management
- Medical History Tracking
- Payment Integration
- Frontend using React

---

## 👨‍💻 Author

**Abotula Karthik**

B.Tech CSE Student

---

## 📄 License

This project is open-source and available under the MIT License.
