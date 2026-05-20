# 🚆 Trainways Hub

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A Comprehensive Railway Ticket Booking & Management Platform**

[View Project](#-about) • [Features](#-features) • [Installation](#-installation) • [Tech Stack](#-technologies-used)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-technologies-used)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [API Endpoints](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

**Trainways Hub** is a full-stack railway ticket booking and management system designed to streamline train reservations, schedule management, and passenger operations. This platform combines modern web technologies with robust backend infrastructure to provide a seamless booking experience.

### Key Objectives

- 🎫 **Easy Ticket Booking** - Simple, intuitive booking interface
- 🚂 **Schedule Management** - Real-time train schedules and availability
- 👥 **Passenger Management** - Track bookings and passenger information
- 💳 **Secure Payments** - Secure transaction processing
- 📊 **Analytics & Reporting** - Comprehensive booking analytics
- 🔔 **Notifications** - Real-time booking confirmations & updates

---

## ✨ Features

### 🎫 Booking System
- **Search & Filter** - Find trains by route, date, and time
- **Real-time Availability** - Live seat availability updates
- **Multiple Booking Options** - Single ticket or bulk bookings
- **Seat Selection** - Interactive seat map selection
- **Booking History** - View past and upcoming bookings
- **Cancellation Support** - Easy ticket cancellation with refunds

### 👥 User Management
- **User Registration** - Simple sign-up process
- **Profile Management** - Update passenger information
- **Multi-passenger Bookings** - Book for multiple travelers
- **Saved Preferences** - Remember travel preferences
- **Secure Authentication** - JWT-based authentication

### 🚂 Train Management
- **Train Schedules** - Comprehensive schedule database
- **Route Management** - Multiple routes and stations
- **Class Types** - First Class, Second Class, General
- **Coach Information** - Real-time coach availability
- **Price Management** - Dynamic pricing based on demand

### 📱 User Interface
- **Responsive Design** - Mobile-first approach
- **Real-time Updates** - Live data synchronization
- **Intuitive Navigation** - Easy-to-use interface
- **Dark Mode Support** - Comfortable viewing experience
- **Accessibility Features** - WCAG compliance

### 🔒 Security & Admin Features
- **Admin Dashboard** - Manage trains, routes, and bookings
- **Role-based Access** - Admin, User, and Operator roles
- **Secure Payments** - Payment gateway integration
- **Data Encryption** - Secure data transmission
- **Audit Logs** - Track all system activities

---

## 🧠 Technologies Used

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Next.js API Routes](https://img.shields.io/badge/Next.js%20API-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

### Database
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![PL/pgSQL](https://img.shields.io/badge/PL/pgSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)

### Tools & Libraries
- **ORM**: Prisma or TypeORM
- **State Management**: Redux/Zustand
- **Form Handling**: React Hook Form
- **API Client**: Axios or Fetch API
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint, Prettier

---

## 📦 Installation

### Prerequisites
```
Node.js >= 16.x
PostgreSQL >= 12
npm or yarn
Git
```

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/SubhamKhandual007/trainways-hub.git
cd trainways-hub
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

4. **Configure .env.local**
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/trainways_hub

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000

# Authentication
JWT_SECRET=your_jwt_secret_key

# Optional: Payment Gateway
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

5. **Setup Database**
```bash
# Run migrations
npx prisma migrate dev

# Seed database (optional)
npm run seed
```

6. **Run development server**
```bash
npm run dev
# or
yarn dev
```

7. **Access the application**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
trainways-hub/
│
├── public/                           # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/                      # API routes
│   │   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── trains/               # Train management endpoints
│   │   │   ├── bookings/             # Booking endpoints
│   │   │   └── users/                # User management endpoints
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Home page
│   │   └── globals.css               # Global styles
│   │
│   ├── components/                   # Reusable React components
│   │   ├── Navbar.tsx                # Navigation component
│   │   ├── Footer.tsx                # Footer component
│   │   ├── BookingForm.tsx           # Booking search form
│   │   ├── TrainCard.tsx             # Train display component
│   │   ├── SeatSelector.tsx          # Interactive seat selector
│   │   └── Payment/                  # Payment components
│   │
│   ├── pages/                        # Page components
│   │   ├── BookingPage.tsx           # Main booking page
│   │   ├── MyBookings.tsx            # User bookings page
│   │   ├── AdminDashboard.tsx        # Admin dashboard
│   │   └── TrainDetails.tsx          # Train details page
│   │
│   ├── services/                     # API services
│   │   ├── trainService.ts           # Train-related API calls
│   │   ├── bookingService.ts         # Booking operations
│   │   ├── userService.ts            # User operations
│   │   └── authService.ts            # Authentication services
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useAuth.ts                # Authentication hook
│   │   ├── useBooking.ts             # Booking management hook
│   │   └── useTrain.ts               # Train data hook
│   │
│   ├── lib/                          # Utility functions
│   │   ├── db.ts                     # Database connection
│   │   ├── auth.ts                   # Auth utilities
│   │   └── helpers.ts                # Helper functions
│   │
│   ├── middleware/                   # Next.js middleware
│   │   └── auth.ts                   # Authentication middleware
│   │
│   ├── types/                        # TypeScript types
│   │   ├── index.ts                  # Type definitions
│   │   ├── train.ts                  # Train types
│   │   └── booking.ts                # Booking types
│   │
│   └── styles/                       # CSS modules
│       ├── booking.module.css
│       └── seat-selector.module.css
│
├── prisma/                           # Database schema
│   ├── schema.prisma                 # Prisma schema
│   └── migrations/                   # Database migrations
│
├── .env.example                      # Environment variables template
├── .eslintrc.json                   # ESLint configuration
├── .gitignore                       # Git ignore rules
├── next.config.js                   # Next.js configuration
├── tailwind.config.js                # Tailwind CSS config
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Project dependencies
└── README.md                        # This file
```

---

## 🗄️ Database Schema

### Core Tables

```sql
-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trains Table
CREATE TABLE trains (
  id SERIAL PRIMARY KEY,
  train_number VARCHAR(50) UNIQUE NOT NULL,
  train_name VARCHAR(255) NOT NULL,
  total_seats INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Routes Table
CREATE TABLE routes (
  id SERIAL PRIMARY KEY,
  train_id INTEGER REFERENCES trains(id),
  departure_station VARCHAR(255) NOT NULL,
  arrival_station VARCHAR(255) NOT NULL,
  departure_time TIME NOT NULL,
  arrival_time TIME NOT NULL,
  distance_km DECIMAL(8, 2),
  base_fare DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings Table
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  train_id INTEGER REFERENCES trains(id),
  route_id INTEGER REFERENCES routes(id),
  seat_number VARCHAR(10) NOT NULL,
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  travel_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'confirmed',
  total_amount DECIMAL(10, 2),
  payment_status VARCHAR(50) DEFAULT 'pending'
);

-- Coaches Table
CREATE TABLE coaches (
  id SERIAL PRIMARY KEY,
  train_id INTEGER REFERENCES trains(id),
  coach_number VARCHAR(10),
  class_type VARCHAR(50),
  total_seats INTEGER,
  available_seats INTEGER
);
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Trains
- `GET /api/trains` - List all trains
- `GET /api/trains/:id` - Get train details
- `POST /api/trains` - Create train (Admin)
- `PUT /api/trains/:id` - Update train (Admin)
- `DELETE /api/trains/:id` - Delete train (Admin)

### Bookings
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking details
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### Routes
- `GET /api/routes/search` - Search routes
- `GET /api/routes/:id` - Get route details
- `POST /api/routes` - Create route (Admin)

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/:id/bookings` - Get user bookings

---

## 🚀 Getting Started

### Quick Start

1. **Setup & Installation** (as described above)
2. **Create an account** on the home page
3. **Search for trains** - Enter departure/arrival stations and date
4. **Select train** - Choose preferred train and class
5. **Select seats** - Pick your seats from the interactive map
6. **Complete payment** - Enter payment details
7. **Confirm booking** - Receive booking confirmation

### For Admin Users

1. Login with admin credentials
2. Access Admin Dashboard
3. Manage trains, routes, and schedules
4. View booking analytics
5. Handle cancellations and refunds

---

## ⚙️ Configuration

### Database Connection
Update `DATABASE_URL` in `.env.local` with your PostgreSQL connection string.

### Authentication
- JWT tokens used for session management
- Tokens expire after 24 hours
- Refresh tokens available for extended sessions

### Payment Integration
If using Stripe:
```env
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

---

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Set environment variables
- Click Deploy

3. **Database Setup**
- Set PostgreSQL DATABASE_URL in Vercel Environment
- Run migrations: `npx prisma migrate deploy`

### Deploy to Other Platforms

**Heroku:**
```bash
heroku create trainways-hub
git push heroku main
heroku run npx prisma migrate deploy
```

**AWS/DigitalOcean:**
- Set up PostgreSQL instance
- Deploy Node.js/Next.js application
- Configure environment variables

---

## 🔍 Performance Tips

- Use database indexing for frequently queried columns
- Implement caching for train schedules
- Optimize images and assets
- Use pagination for large datasets
- Monitor API response times

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**
```bash
git clone https://github.com/yourusername/trainways-hub.git
```

2. **Create feature branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make changes**
- Write clean, typed code
- Add comments for complex logic
- Test your changes

4. **Commit & Push**
```bash
git commit -m "Add: feature description"
git push origin feature/your-feature-name
```

5. **Open Pull Request**
- Describe changes clearly
- Link related issues
- Request review

---

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Check PostgreSQL is running
# Verify DATABASE_URL is correct
# Test connection: psql $DATABASE_URL
```

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)

---

## 🎓 Author

**Subham Khandual**

B.Tech Computer Science Student | Full Stack Developer | Railway Tech Enthusiast

- 🔗 [GitHub](https://github.com/SubhamKhandual007)
- 💼 [LinkedIn](https://www.linkedin.com/in/subham-khandual)
- 📧 [Email](mailto:subhamkhandual215@gmail.com)

---

## 📄 License

This project is open source and available under the MIT License.

---

## ⭐ Show Your Support

If you find this project helpful:

- ⭐ **Star the repository**
- 🔗 **Share with others**
- 💬 **Leave feedback**
- 🤝 **Contribute improvements**

---

## 🙏 Acknowledgments

- Built with modern full-stack technologies
- Inspired by real-world railway systems
- Special thanks to the open-source community

---

<div align="center">

### 🚆 Ready to revolutionize train bookings?

[Report Bug](https://github.com/SubhamKhandual007/trainways-hub/issues) • [Request Feature](https://github.com/SubhamKhandual007/trainways-hub/issues)

**Made with ❤️ by Subham Khandual**

[⬆ Back to Top](#-trainways-hub)

</div>
