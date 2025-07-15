# 🎓 Campus Wealth Tracker

<div align="center">
  <img src="public/logo.png" alt="Campus Wealth Tracker Logo" width="200"/>
  
  **A smart financial management application designed specifically for Indian campus students**
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

---

## 🌟 Overview

Campus Wealth Tracker is a comprehensive financial management solution tailored specifically for Indian college students. It helps students track their pocket money, mess fees, study expenses, and build healthy financial habits during their college years with AI-powered insights and automated budget alerts.

## ✨ Key Features

### 💰 **Financial Management**

- **Multi-Account Support**: Manage multiple accounts (Savings, Current, Digital Wallets)
- **Indian Currency (₹)**: All amounts displayed in Indian Rupees
- **Transaction Categories**: Student-focused categories like Mess Fees, Study Materials, Hostel Expenses
- **Recurring Transactions**: Set up automated recurring payments for mess fees, hostel rent, etc.
- **Budget Tracking**: Set monthly budgets with 80% threshold alerts

### 🎯 **Student-Focused Categories**

- 🍽️ **Mess & Food**: Mess fees, canteen expenses, food delivery
- 📚 **Study Materials**: Textbooks, stationery, lab equipment, online courses
- 🏠 **Hostel & Accommodation**: Hostel fees, room rent, electricity, maintenance
- 🚌 **Transport**: Bus fare, train tickets, auto/taxi, home visits
- 🎬 **Entertainment**: Movies, gaming, college events, outings with friends
- 💅 **Personal Care**: Haircut, cosmetics, medical, gym
- 🛍️ **Shopping**: Clothing, electronics, accessories, gifts
- ❤️ **Healthcare**: Medical, dental, pharmacy, insurance
- 🎓 **Education**: Tuition fees, courses, certifications
- ✈️ **Travel**: Home visits, trips, vacation expenses

### 🤖 **AI-Powered Features**

- **Smart Insights**: Personalized financial advice using Google Gemini AI
- **Campus-Specific Recommendations**: Tailored suggestions for student life
- **Spending Pattern Analysis**: Understand your financial habits
- **Receipt Scanning**: Automatically extract data from bills and receipts

### 📊 **Analytics & Reporting**

- **Interactive Charts**: Visual spending analysis with Recharts
- **Monthly Reports**: Automated financial summaries via email
- **Category Breakdown**: Detailed expense analysis by category
- **Account Balance Tracking**: Real-time account balance monitoring

### 📧 **Email & Notifications**

- **Budget Alerts**: Email notifications when spending exceeds 80% of budget
- **Monthly Reports**: Comprehensive financial summaries delivered monthly
- **Student-Friendly Messaging**: Campus-specific email templates
- **Resend Integration**: Reliable email delivery system

### 🔄 **Automation**

- **Background Jobs**: Powered by Inngest for reliable processing
- **Recurring Transactions**: Automated transaction creation
- **Budget Monitoring**: Continuous expense tracking
- **Email Scheduling**: Automated report generation and delivery

## 🛠️ Technology Stack

### **Frontend**

- **Framework**: Next.js 14 with App Router
- **Language**: JavaScript/TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Charts**: Recharts for interactive visualizations
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icons
- **Notifications**: Sonner for toast notifications

### **Backend**

- **API**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Hosting**: Supabase for database hosting
- **Background Jobs**: Inngest for reliable job processing
- **Authentication**: Clerk for user management
- **Email Service**: Resend for transactional emails

### **AI & Analytics**

- **AI Engine**: Google Gemini AI for financial insights
- **Receipt Processing**: AI-powered receipt scanning
- **Analytics**: Custom analytics with Recharts visualization

### **Security & Performance**

- **Security**: Arcjet for bot detection and rate limiting
- **Performance**: Next.js 14 optimizations with Turbopack
- **Type Safety**: TypeScript for robust development
- **Database**: Prisma for type-safe database operations

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18.0 or higher
- npm, yarn, or pnpm
- PostgreSQL database (Supabase recommended)

### **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/YashVarpe05/AI-CampusWealthTracker.git
cd AI-CampusWealthTracker
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```bash
# Database
DATABASE_URL="your_postgresql_connection_string"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# AI (Google Gemini)
GOOGLE_GEMINI_API_KEY="your_google_gemini_api_key"

# Email Service (Resend)
RESEND_API_KEY="your_resend_api_key"

# Security (Arcjet)
ARCJET_KEY="your_arcjet_key"

# Inngest (Background Jobs)
INNGEST_EVENT_KEY="your_inngest_event_key"
INNGEST_SIGNING_KEY="your_inngest_signing_key"
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Seed the database** (Optional)

```bash
npm run seed
```

6. **Start the development server**

```bash
npm run dev
```

7. **Start Inngest dev server** (For background jobs)

```bash
npx inngest-cli@latest dev
```

Visit `http://localhost:3000` to see the application.

## 📱 Usage Guide

### **Getting Started**

1. **Sign Up/Login**: Create an account using Clerk authentication
2. **Create Accounts**: Set up your bank accounts, digital wallets
3. **Set Budget**: Define monthly budget limits
4. **Add Transactions**: Record income and expenses
5. **Track Spending**: Monitor your financial habits

### **Key Workflows**

#### **Adding a Transaction**

1. Navigate to "Create Transaction"
2. Select transaction type (Income/Expense)
3. Enter amount in ₹ (Indian Rupees)
4. Choose appropriate category
5. Set recurring schedule if needed
6. Use receipt scanner for automatic data extraction

#### **Managing Budgets**

1. Go to Dashboard
2. View current budget progress
3. Receive email alerts at 80% threshold
4. Adjust budget limits as needed

#### **Analyzing Spending**

1. View interactive charts on Dashboard
2. Check monthly reports in email
3. Analyze category-wise spending
4. Get AI-powered insights

## 🔧 Configuration

### **Email Configuration**

1. **Get Resend API Key**: Sign up at [resend.com](https://resend.com)
2. **Add to Environment**: Update `RESEND_API_KEY` in `.env.local`
3. **Test Email**: Visit `/email-test` to verify setup

### **AI Configuration**

1. **Google Gemini Setup**: Get API key from [Google AI Studio](https://makersuite.google.com/)
2. **Add to Environment**: Update `GOOGLE_GEMINI_API_KEY` in `.env.local`
3. **Customize Prompts**: Edit AI prompts in `lib/inngest/functions.js`

### **Background Jobs**

1. **Inngest Setup**: Configure Inngest for background job processing
2. **Job Monitoring**: Visit Inngest dashboard at `http://localhost:8288`
3. **Schedule Configuration**: Modify cron schedules in `lib/inngest/functions.js`

## 🧪 Testing

### **Email Testing**

- Visit `/email-test` for browser-based testing
- Use `/api/test-budget-alerts` for manual triggers
- Check terminal logs for detailed output

### **Development Testing**

```bash
# Run tests
npm test

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📦 Deployment

### **Vercel Deployment** (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### **Other Platforms**

- **Netlify**: Use `npm run build` and deploy `dist` folder
- **Railway**: Connect GitHub repository
- **Supabase**: Use built-in Next.js hosting

## 🔒 Security Features

- **Authentication**: Secure user authentication with Clerk
- **Authorization**: Route-based access control
- **Rate Limiting**: Arcjet integration for API protection
- **Input Validation**: Zod schemas for data validation
- **SQL Injection Prevention**: Prisma ORM with prepared statements

## 📊 Architecture

### **Project Structure**

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   ├── api/               # API routes
│   └── lib/               # Shared utilities
├── components/            # Reusable UI components
├── data/                  # Static data and configurations
├── emails/                # Email templates
├── hooks/                 # Custom React hooks
├── lib/                   # Core libraries and utilities
├── prisma/                # Database schema and migrations
└── public/                # Static assets
```

### **Database Schema**

- **Users**: User profiles and authentication
- **Accounts**: Bank accounts and digital wallets
- **Transactions**: Income and expense records
- **Categories**: Transaction categorization
- **Budgets**: Monthly budget limits and alerts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** for beautiful UI components
- **Clerk** for authentication solutions
- **Prisma** for database management
- **Inngest** for background job processing
- **Google Gemini** for AI capabilities
- **Resend** for email delivery

## 📞 Support

For support, email [support@campuswealthtracker.com](mailto:support@campuswealthtracker.com) or join our [Discord community](https://discord.gg/campuswealthtracker).

---

<div align="center">
  <p>Made with ❤️ for Indian college students</p>
  <p>© 2025 Campus Wealth Tracker. All rights reserved.</p>
</div>
