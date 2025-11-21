# UI Prototypes

This directory contains UI prototypes and mockups for various features and screens.

## Contents

### PaymentsPagePrototype.tsx

A React TypeScript component prototype for a dedicated payments management page.

**Features:**
- Running list of all payments with filtering and search
- Payment status tracking (Posted/Pending)
- Payment type filtering (Card/ACH/Cash)
- Detailed payment view showing:
  - Payment amount and status
  - Client and patient information
  - Associated invoices
  - Settlement and pending details
- Summary cards showing total captured and pending amounts

**Use case:**
View-only reference screen for Customer Service Representatives (CSRs) and sales staff to quickly look up payment information, check settlement status, and understand which invoices were paid.

**Technical notes:**
- Self-contained component with inline UI stubs (Card, Badge, Button)
- Uses React hooks (useState, useMemo) for state management
- Sample data included for demonstration
- Ready to integrate with real design system components (shadcn, etc.)

## Usage

These prototypes are meant for:
- Design review and feedback
- User testing sessions
- Development reference
- Stakeholder demos

They are not production-ready and should be adapted to your actual tech stack and design system.
