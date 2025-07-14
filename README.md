# Campus Wealth Tracker

A smart financial management application designed specifically for Indian campus students. Track your pocket money, mess fees, study expenses, and build healthy financial habits during your college years.

## 🎯 Features

- **Student-Focused Categories**: Mess fees, study materials, hostel expenses, transport, and entertainment
- **Indian Currency Support**: All amounts displayed in ₹ (INR)
- **Budget Management**: Set monthly budgets for different expense categories
- **AI-Powered Insights**: Get personalized financial advice for student life
- **Receipt Scanning**: Automatically extract data from bills and receipts
- **Campus Expense Analytics**: Understand your spending patterns with detailed charts
- **Monthly Reports**: Automated financial summaries delivered to your email

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
npx inngest-cli@latest dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎓 Perfect for Campus Students

This application understands the unique financial challenges of campus life:

- Managing limited pocket money
- Tracking mess and hostel fees
- Budgeting for textbooks and study materials
- Saving for home visits and special occasions
- Building emergency funds for unexpected expenses

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **Clerk** - Authentication and user management
- **Prisma** - Database ORM
- **Supabase** - PostgreSQL database
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Google Gemini AI** - Financial insights generation
- **Inngest** - Background job processing

## 📱 Mobile Responsive

Fully responsive design optimized for mobile devices - perfect for students on the go!

## 📧 Email Configuration & Testing

### Setting up Email Functionality

1. **Get a Resend API Key**:
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard

2. **Configure Environment Variables**:
   Create a `.env.local` file in your project root:

   ```bash
   RESEND_API_KEY=your_resend_api_key_here
   ```

3. **Test Email Functionality**:
   - Visit `/email-test` in your browser
   - Click "Test Budget Alerts" button
   - Check your terminal logs for detailed output
   - Check your email inbox (and spam folder)

### Budget Alert System

The app automatically sends email alerts when:

- Students exceed 80% of their monthly budget
- Only one alert per month to avoid spam
- Uses student-friendly messaging and ₹ currency

### Manual Testing Endpoints

- **Email Test Page**: `http://localhost:3000/email-test`
- **API Endpoint**: `POST /api/test-budget-alerts`

### Troubleshooting Email Issues

1. **Check Environment Variables**: Ensure `RESEND_API_KEY` is set
2. **Verify Domain**: Using `onboarding@resend.dev` (Resend's test domain)
3. **Check Logs**: Look for "📧 Sending email" messages in terminal
4. **Spam Folder**: Budget alerts might land in spam initially
5. **Inngest Dashboard**: Monitor background jobs at `http://localhost:8288`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
