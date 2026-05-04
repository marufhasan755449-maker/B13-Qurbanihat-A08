#QurbaniHat – Livestock Booking Platform

##Project Purpose
QurbaniHat is a modern livestock marketplace where users can explore animals for Qurbani (cows and goats), view detailed information, and place bookings after authentication.

##Key Features
-  Browse 8+ premium Qurbani animals (cows & goats)
-  Filter by animal type & sort by price
-  Detailed animal pages with booking form
-  Authentication system (login/register)
- My Profile page with user info
-  Update profile (name & photo URL)
- Fully responsive (mobile, tablet, desktop)
-  Islamic/golden design theme
-  Toast success/error notifications
- Qurbani Tips & Top Breeds sections
- Dark warm-tone aesthetic

##NPM Packages Used

| Package | Purpose |
|---|---|
| `react` | UI library |
| `react-dom` | DOM rendering |
| `react-router-dom` | Client-side routing |
| `animate.css` | CSS animations (challenge requirement) |
| `vite` | Build tool & dev server |
| `tailwindcss` | Utility CSS (configured) |

##Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/qurbanihat.git
cd qurbanihat

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```


##Routes

| Route | Access |
|---|---|
| `/` | Public |
| `/animals` | Public |
| `/login` | Public |
| `/register` | Public |
| `/animals/:id` | Public (booking requires login) |
| `/my-profile` | Private |
| `/update-profile` | Private |

## Environment Variables
Create a `.env` file in the root:
```env
VITE_APP_NAME=QurbaniHat
VITE_API_URL=https://api.yourbackend.com
```

##Deployment (Vercel)
- Push to GitHub
- Import repo in Vercel
- `vercel.json` handles SPA routing (no 404 on reload)