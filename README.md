# 🚂 Trainways Hub

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

**A Modern Railway Management & Booking Platform Built with Next.js & TypeScript**

[Live Demo](#-live-demo) • [Features](#-features) • [Installation](#-installation) • [Tech Stack](#-tech-stack)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Live Demo](#-live-demo)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Development](#-development)
- [Database Schema](#-database-schema)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

**Trainways Hub** is a comprehensive railway management and booking platform designed to revolutionize the way passengers interact with rail transportation. Built with modern web technologies, it provides:

- 🚂 **Train Management** - Manage routes, schedules, and capacity
- 🎫 **Booking System** - Seamless ticket reservation and purchase
- 👥 **Passenger Management** - Track passenger information and bookings
- 📊 **Analytics Dashboard** - Real-time insights and statistics
- 🔐 **Security** - Enterprise-grade authentication and authorization
- 📱 **Responsive Design** - Works perfectly on all devices

Perfect for railway operators, travel agencies, and passengers!

---

## ✨ Features

### 🚂 Train Management
- **Route Planning** - Create and manage railway routes
- **Schedule Management** - Set train schedules and frequencies
- **Capacity Tracking** - Monitor seat availability
- **Train Information** - Detailed train specifications
- **Real-time Updates** - Live train status tracking

### 🎫 Booking System
- **Easy Booking** - Simple, intuitive reservation process
- **Seat Selection** - Visual seat layout with selection
- **Multiple Choices** - Filter by date, time, and class
- **Instant Confirmation** - Immediate booking confirmation
- **Payment Gateway** - Secure online payment processing

### 👥 Passenger Dashboard
- **My Bookings** - View all reservations
- **Booking History** - Access past bookings
- **Cancellation** - Easy cancellation with refunds
- **Modifications** - Reschedule or change tickets
- **E-Tickets** - Digital ticket generation and download

### 📊 Admin Dashboard
- **Analytics** - Revenue and booking statistics
- **User Management** - Manage passengers and staff
- **Train Management** - Add/edit train information
- **Booking Reports** - Generate detailed reports
- **System Settings** - Configure platform parameters

### 🔍 Search & Filter
- **Advanced Search** - Search by route, date, time
- **Filters** - Filter by train type, price, duration
- **Sorting** - Sort by time, price, rating
- **Save Searches** - Store favorite routes
- **Notifications** - Price drop alerts

---

## 🌐 Live Demo

**Explore the live application:**

🔗 **[https://trainways-hub.vercel.app](https://trainways-hub.vercel.app)** *(if deployed)*

---

## 📦 Installation

### Prerequisites
```
Node.js >= 16.x
PostgreSQL >= 12.x
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

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Configure environment variables**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/trainways
NEXT_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret
STRIPE_PUBLIC_KEY=your_stripe_key
```

5. **Setup database**
```bash
npm run db:migrate
npm run db:seed  # Optional: populate sample data
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
├── public/                         # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── app/                       # Next.js app directory
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Home page
│   │   ├── api/                   # API routes
│   │   │   ├── auth/
│   │   │   ├── trains/
│   │   │   ├── bookings/
│   │   │   └── payments/
│   │   ├── dashboard/             # Dashboard pages
│   │   ├── booking/               # Booking pages
│   │   └── admin/                 # Admin pages
│   │
│   ├── components/                # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchBar.tsx
│   │   ├── TrainList.tsx
│   │   ├── SeatSelection.tsx
│   │   ├── BookingSummary.tsx
│   │   └── Dashboard.tsx
│   │
│   ├── lib/                       # Utility functions
│   │   ├── db.ts                  # Database client
│   │   ├── auth.ts                # Authentication
│   │   ├── api.ts                 # API helpers
│   │   └── validation.ts          # Input validation
│   │
│   ├── types/                     # TypeScript types
│   │   ├── index.ts
│   │   ├── user.ts
│   │   ├── train.ts
│   │   └── booking.ts
│   │
│   ├── styles/                    # CSS/Tailwind
│   │   ├── globals.css
│   │   └── components.css
│   │
│   └── context/                   # React context
│       ├── AuthContext.tsx
│       └── BookingContext.tsx
│
├── prisma/                        # Database schema
│   ├── schema.prisma
│   └── migrations/
│
├── public/                        # Public assets
├── tests/                         # Test files
├── .env.example                   # Environment template
├── .eslintrc.json                 # ESLint config
├── next.config.js                 # Next.js config
├── tailwind.config.js             # Tailwind config
├── tsconfig.json                  # TypeScript config
├── package.json
└── README.md                      # This file
```

---

## 🧠 Technologies Used

### Frontend (95.5% TypeScript)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Styling (2.1% CSS)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- Modern CSS features
- Responsive design
- Animations & transitions

### Backend & Database (1.8% PL/pgSQL, 0.6% JavaScript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

### Authentication & Security
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=auth0&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth-5F7DF1?style=for-the-badge&logo=nextauth&logoColor=white)

### Payment Processing
![Stripe](https://img.shields.io/badge/Stripe-626262?style=for-the-badge&logo=stripe&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white)

### Development Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 🚀 Development

### Available Scripts

**Development server**
```bash
npm run dev
```

**Production build**
```bash
npm run build
npm run start
```

**Database management**
```bash
npm run db:migrate     # Run migrations
npm run db:push        # Push schema to database
npm run db:seed        # Seed sample data
npm run db:studio      # Open Prisma Studio
```

**Code quality**
```bash
npm run lint           # Run ESLint
npm run format         # Format with Prettier
npm run type-check     # Check TypeScript
```

**Testing**
```bash
npm run test           # Run all tests
npm run test:watch     # Watch mode
npm run test:coverage  # Coverage report
```

---

## 📊 Database Schema

### Key Tables

**Users Table**
```sql
- id (Primary Key)
- email (Unique)
- password (Hashed)
- firstName, lastName
- phone
- createdAt, updatedAt
```

**Trains Table**
```sql
- id (Primary Key)
- trainName, trainNumber (Unique)
- source, destination
- totalSeats, availableSeats
- createdAt, updatedAt
```

**Bookings Table**
```sql
- id (Primary Key)
- userId (Foreign Key)
- trainId (Foreign Key)
- bookingDate, travelDate
- totalFare, status
- createdAt, updatedAt
```

**Seats Table**
```sql
- id (Primary Key)
- trainId (Foreign Key)
- seatNumber
- seatClass, status
- bookingId (Foreign Key, nullable)
```

---

## 🔐 Security Features

### Authentication
- JWT-based authentication
- Secure password hashing (bcrypt)
- Session management
- Multi-factor authentication ready

### Authorization
- Role-based access control (RBAC)
- Admin, staff, and passenger roles
- Granular permissions
- API endpoint protection

### Data Protection
- Encrypted sensitive data
- SQL injection prevention
- XSS protection
- CSRF tokens
- Rate limiting
- Input validation

---

## 📱 API Documentation

### Authentication Endpoints
```
POST /api/auth/register       - Register new user
POST /api/auth/login          - Login user
POST /api/auth/logout         - Logout user
GET  /api/auth/me             - Get current user
```

### Train Endpoints
```
GET  /api/trains              - Get all trains
GET  /api/trains/:id          - Get specific train
GET  /api/trains/search       - Search trains
POST /api/trains              - Create train (admin)
PUT  /api/trains/:id          - Update train (admin)
```

### Booking Endpoints
```
GET  /api/bookings            - Get user bookings
POST /api/bookings            - Create booking
PUT  /api/bookings/:id        - Modify booking
DELETE /api/bookings/:id      - Cancel booking
GET  /api/bookings/:id        - Get booking details
```

### Payment Endpoints
```
POST /api/payments            - Create payment
GET  /api/payments/status     - Check payment status
POST /api/payments/webhook    - Payment webhook
```

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import repository
- Configure environment variables
- Deploy

3. **Database Setup**
- Configure PostgreSQL database
- Run migrations on production

### Docker Deployment

```bash
# Build Docker image
docker build -t trainways-hub .

# Run container
docker run -p 3000:3000 --env-file .env.prod trainways-hub
```

### Self-Hosted Deployment

```bash
# Install dependencies
npm install

# Build application
npm run build

# Run production server
npm run start
```

---

## 🎨 Customization

### Branding
Edit configuration in:
- `public/manifest.json`
- `tailwind.config.js`
- `src/components/Header.tsx`

### Features
Enable/disable features in:
- `src/lib/config.ts`
- Environment variables

### Styling
Customize styles:
- Tailwind configuration
- CSS modules
- Component styles

---

## 🤝 Contributing

Contributions welcome! Follow these steps:

1. **Fork the repository**
```bash
git clone https://github.com/yourusername/trainways-hub.git
```

2. **Create feature branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make changes**
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features

4. **Commit & Push**
```bash
git commit -m "Add: your feature description"
git push origin feature/your-feature-name
```

5. **Open Pull Request**

### Contribution Areas
- 🎨 UI/UX improvements
- 🐛 Bug fixes
- 📊 New features
- 📚 Documentation
- 🧪 Tests
- 🌍 Internationalization

---

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Check PostgreSQL is running
# Verify DATABASE_URL in .env.local
npm run db:push
```

**Build Failures**
```bash
# Clear Next.js cache
rm -rf .next
npm install
npm run build
```

**Port Already in Use**
```bash
# Use different port
PORT=3001 npm run dev
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Guide](https://www.postgresql.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 🎓 Author

**Subham Khandual**

B.Tech Computer Science Student | Full Stack Developer

- 🔗 [GitHub](https://github.com/SubhamKhandual007)
- 💼 [LinkedIn](https://www.linkedin.com/in/subham-khandual)
- 📧 [Email](mailto:subhamkhandual215@gmail.com)

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## ⭐ Show Your Support

If you find this project helpful:

- ⭐ **Star the repository**
- 🔗 **Share with others**
- 💬 **Provide feedback**
- 🤝 **Contribute improvements**

---

## 🙏 Acknowledgments

- Railway industry standards
- Modern web development community
- Open-source libraries and frameworks
- All contributors

---

<div align="center">

### 🚂 Connecting People, Simplifying Travel 🚂

**Trainways Hub: Railway Management Platform**

Built with ❤️ for better rail transportation

[Report Issue](https://github.com/SubhamKhandual007/trainways-hub/issues) • [Request Feature](https://github.com/SubhamKhandual007/trainways-hub/issues) • [Suggest Improvements](https://github.com/SubhamKhandual007/trainways-hub/discussions)

[⬆ Back to Top](#-trainways-hub)

</div>
