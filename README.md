

```markdown
# Makeup Shop Web Application

A full-featured **Makeup Shop web application** built with **Next.js 13+ (App Router)**, **MongoDB**, and **NextAuth.js** for authentication. The app allows users to browse, add, and manage makeup products with a fully responsive, modern UI and role-based access for authenticated users.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Authentication](#authentication)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Demo

*Add a link or screenshot of your deployed app here (e.g., Vercel or Netlify)*

---

## Features

- User authentication using **NextAuth.js** (Email & Password + Google/GitHub OAuth)
- Role-based access (Admin/Authenticated users)
- Add, view, and manage makeup products
- Products stored in **MongoDB** with native CRUD operations
- Responsive **two-column product add form** with dark/light mode support
- Product data includes brand, price, description, images, colors, tags, and categories
- Client-side fetching of products with live UI rendering
- JWT-based authentication for secure routes
- Fully responsive design with Tailwind CSS
- Supports future expansion with dynamic product pages

---

## Tech Stack

- **Frontend:** Next.js 13+, React, Tailwind CSS, Lucide icons  
- **Backend:** Next.js API routes, native MongoDB driver  
- **Database:** MongoDB Atlas / local MongoDB  
- **Authentication:** NextAuth.js (Credentials + OAuth)  
- **State Management:** React hooks, `useSession` from NextAuth  
- **Deployment:** Vercel / Netlify / any Node.js hosting

---

## Project Structure

```

/app
/api
/auth       # NextAuth authentication routes
/products   # API routes for CRUD operations
/dashboard
/products   # Add & manage products pages
/lib
mongodb.js    # MongoDB client connection
/components
ProductForm.js
ProductsList.js
Navbar.js
SocialLogin.js
/pages
/auth
signin.js
signup.js

````

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/makeup-shop.git
cd makeup-shop
````

2. Install dependencies:

```bash
npm install
```

3. Add environment variables in `.env.local`:

```env
MONGODB_URI=<your-mongodb-uri>
NEXTAUTH_SECRET=<your-nextauth-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GITHUB_ID=<your-github-client-id>
GITHUB_SECRET=<your-github-client-secret>
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

---

## Usage

* Visit `/auth/signin` to log in or `/auth/signup` to register.
* Add new products via the **Dashboard → Add Product** page.
* Browse all products on the homepage or dashboard product list.
* Admin users can manage and update products as needed.

---

## Authentication

* **Email/Password:** Users can sign up and log in.
* **OAuth:** Google & GitHub login supported.
* **Session Handling:** NextAuth.js with JWT-based sessions and `useSession` hook.
* **Protected Routes:** Dashboard routes are protected and accessible only to authenticated users.

---

## API Endpoints

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| GET    | `/api/products`    | Fetch all products       |
| POST   | `/api/products`    | Add a new product        |
| POST   | `/api/auth/signin` | Sign in with credentials |
| POST   | `/api/auth/signup` | Register new user        |

*All CRUD operations use native MongoDB driver.*

---

## Contributing

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request.

---

## License

All Rights Reserved to Sowmitra Guha

```


