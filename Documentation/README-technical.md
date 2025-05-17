# TigerList - Technical Documentation

This file contains technical documentation for the TigerList project. For a more general overview of the project, see README.txt in the root directory, and other files in the Documentation folder.

## Features

- **Secure Authentication**: Colorado College CAS authentication with Duo push verification
- **Product Listings**: Create, view, edit, and delete product listings
- **Listing Navigation**: Browse and sort listings by price, category, location, and more
- **Moderation System**: Flagging system for inappropriate content with admin controls. Role-based access control and email notifications for moderators.
- **User Management**: Profile management and listing history
- **Responsive Design**: Responsive design, toast notifications, Mobile-friendly interface

## Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS, Styled Components
- **Backend**: Next.js API Routes, PostgreSQL database
- **Authentication**: Colorado College CAS with Duo Push
- **Email**: SMTP for notifications
- **Server Management**: Bash scripts for deployment and maintenance


## Project Structure

```
tigerlist/
├── Components/           # Reusable UI components
│   ├── BuyProductBox.js  # Product display component for buyers
│   ├── SellProductBox.js # Product display component for sellers
│   ├── PInfo.js          # Product information display
│   ├── Filter.js         # Product filtering functionality
│   └── NavBar.js         # Main navigation component
│
|––app/
│    ├── api/                   # API route handlers
│    │    ├── deleteListing/     # DELETE /api/deleteListing
│    │    ├── deleteModUser/     # DELETE /api/deleteModUser
│    │    ├── editListing/       # PUT /api/editListing
│    │    ├── getAllListings/    # GET /api/getAllListings
│    │    ├── getListing/        # GET /api/getListing
│    │    ├── getUser/           # GET /api/getUser
│    │    ├── getUserListings/   # GET /api/getUserListings
│    │    └── makeModUser/       # POST /api/makeModUser
│    │
│    ├── flaggedposts/           # Page for viewing flagged posts - moderators only
│    ├── makelisting/            # Page for creating a listing
│    ├── mylistings/             # Page for viewing a user's listings
│    ├── productview/            # Page for viewing an individual product
│    │
│    ├── moderation/             # SMTP Email notification system for moderators
│    └── server/                 # CAS authentication
│
├── manual-scripts/      # Database and server utilities
│   ├── database-scripts/ # SQL and database management
│   └── server-scripts/   # Server management and CAS authentication
│
├── tailwind.config.js   # Tailwind CSS configuration
```



## Scripts

### Server Management
- `setup.sh` - Main setup script for the server
- `cas-on.sh` - Enable CAS authentication
- `cas-off.sh` - Disable CAS authentication
- `firewall_config.sh` - Configure server firewall settings
- `pm_setup.sh` - Setup PM2 process manager

### Database Management
- `showAllPosts.js` - Displays all posts in the database
- `showRecentPosts.js` - Shows recently created posts
- `showRecentPostTable.js` - Displays recent posts in a formatted table
- `sendTestMessage.js` - Test email notifications
- `showTestMessages.js` - View test email messages
- `showRecentTestMessages.js` - View recent test messages
- `showNewPosts.sh` - Check for new posts


### Usage Examples
```bash
# Setup the server
./manual-scripts/server-scripts/setup.sh

# View all posts in the database
node manual-scripts/database-scripts/showAllPosts.js

# Enable CAS authentication
./manual-scripts/server-scripts/cas-on.sh

# View recent posts
node manual-scripts/database-scripts/showRecentPosts.js
```
