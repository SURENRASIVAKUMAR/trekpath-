-- Run this script in pgAdmin or via psql to create the necessary tables.

CREATE TABLE IF NOT EXISTS testimonials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(100),
    destination VARCHAR(100),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS planners (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(20),
    travelers VARCHAR(20),
    travel_type VARCHAR(50),
    language VARCHAR(20),
    destination VARCHAR(100),
    interests TEXT[],
    start_date DATE,
    end_date DATE,
    budget VARCHAR(50),
    accommodation VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some dummy data for initial testing only if table is empty
INSERT INTO testimonials (name, rating, review)
SELECT 'Alice Smith', 5, 'The Trek Path experience was absolutely magical! Highly recommended.'
WHERE NOT EXISTS (SELECT 1 FROM testimonials);

INSERT INTO testimonials (name, rating, review)
SELECT 'Bob Johnson', 4, 'Great views and a well-organized trip. The guides were very helpful.'
WHERE NOT EXISTS (SELECT 1 FROM testimonials);
