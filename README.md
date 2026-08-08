# Trek Path 🌍✈️

Welcome to **Trek Path** — a premium, dynamic, and full-stack travel planner application designed to help users discover destinations, plan detailed itineraries, and track travel readiness with a luxurious Dark & Gold aesthetic.

## 🚀 Features
- **Dynamic Destination Browsing:** Explore beautifully rendered global destinations with real-time package filtering.
- **Interactive Itinerary Dashboard:** A visually stunning dashboard featuring glassmorphism UI, a live events ticker, and interactive widgets.
- **PDF Exporting:** Users can generate and download clean, professional PDF brochures of their custom itineraries.
- **Travel Intelligence Widgets:** Includes a dynamic Expense Breakdown Chart and a Trip Readiness progress tracker.
- **Secure Authentication:** Full user registration and login system powered by Node.js, PostgreSQL, bcrypt, and JWT.
- **Premium Aesthetics:** Modern UI utilizing CSS keyframe animations, drop-shadows, and `mix-blend-mode` image handling.

## 🛠️ Tech Stack
- **Frontend:** HTML5, Vanilla CSS3 (Custom Glassmorphism), Vanilla JavaScript
- **Backend:** Node.js, Express.js, CORS
- **Database:** PostgreSQL (with `pg` package)
- **Authentication:** JSON Web Tokens (JWT), bcrypt for password hashing
- **Deployment:** Ready to be hosted (contains automated image-replacement scripts for stable placeholders)

## 📁 Project Structure
```
TrekPath/
├── frontend/
│   ├── index.html         # Landing page & destination browsing
│   ├── planner.html       # Trip planning input form
│   ├── dashboard.html     # Itinerary dashboard & widgets
│   ├── login.html / register.html # Auth pages
│   ├── img/               # Local static assets & logos
│   └── *.css / *.js       # Vanilla styling and logic
├── backend/
│   ├── server.js          # Express API server & routes
│   ├── init.sql           # Database schema & table creation
│   └── .env               # Environment variables (DB credentials, JWT secrets)
└── README.md              # Project documentation
```

## ⚙️ How to Run Locally

### 1. Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [PostgreSQL](https://www.postgresql.org/)

### 2. Database Setup
1. Open pgAdmin or your PostgreSQL CLI.
2. Create a new database (e.g., `trekpath_db`).
3. Run the SQL script found in `backend/init.sql` to generate the required tables (`users`, `planners`, `contacts`, `testimonials`).

### 3. Backend Setup
1. Open a terminal and navigate to the `backend/` folder:
   ```bash
   cd backend
   ```
2. Install the required Node.js dependencies:
   ```bash
   npm install express pg bcryptjs jsonwebtoken cors dotenv
   ```
3. Create a `.env` file in the `backend/` folder and add your database credentials:
   ```env
   DB_USER=postgres
   DB_PASSWORD=yourpassword
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=trekpath_db
   JWT_SECRET=your_super_secret_key
   ```
4. Start the server:
   ```bash
   node server.js
   ```
   *(The server will run on `http://localhost:5000`)*

### 4. Frontend Setup
1. You can serve the `frontend/` directory using any local development server (like the VS Code "Live Server" extension).
2. Open `index.html` in your browser.
3. Start planning your trip!

## 🤝 Contributing
Feel free to fork this repository, create a new branch, and submit a pull request if you have any feature enhancements!

## 📜 License
This project is for educational and portfolio purposes. All external images used belong to their respective owners.
