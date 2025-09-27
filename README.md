```markdown
# 💄 Makeup Shop – E-Commerce Website

This is a full-stack **E-Commerce Makeup Shop Website** built with **Next.js, JavaScript, TailwindCSS, and ShadCN UI**.  
The project has **two main parts**:

1. **Site** – Public pages (Home, Shop, About, Contact Us).
2. **Dashboard** – Admin-only pages (Dashboard Home, Add Product, Update Product).

Authentication is implemented with **NextAuth + JWT**, supporting **Email/Password** and **GitHub login**.  
Admins can manage products (add/update) via the dashboard, while normal users can browse the shop and view products.

---

## ✨ Features

### 🛍️ Site

- Responsive **Home page** showcasing featured products.
- **Shop page** to browse all available makeup items.
- **About page** describing the brand.
- **Contact Us page** for customer support.

### 🖥️ Dashboard (Admin only)

- **Dashboard Home page** overview.
- **Add Product page** with image upload (via **imgbb**).
- **Update Product page** for modifying product details.

### 🔐 Authentication

- Implemented using **NextAuth** + **JWT**.
- Login with **Email/Password** or **GitHub**.
- **Admin Access Only**:
```

Email: ganesh@gmail.com
Password: ganesh123

````

### 🛠️ Tech Stack
- **Next.js** – Framework for React applications.
- **JavaScript** – Core language.
- **TailwindCSS** – Utility-first styling.
- **ShadCN UI** – Modern UI components.
- **NextAuth** – Authentication (JWT enabled).
- **imgbb** – Product image hosting.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/makeup-shop.git
cd makeup-shop
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env.local` file in the root and add the following:

```env
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
IMGBB_API_KEY=your_imgbb_api_key
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📸 Screens & Routes

- `/` → Home Page
- `/shop` → Shop Page
- `/about` → About Page
- `/contact` → Contact Us Page
- `/login` → Login Page
- `/signup` → Signup Page
- `/dashboard` → Admin Dashboard (Protected)

  - `/dashboard/add-product` → Add Product
  - `/dashboard/update-product/:id` → Update Product

---

## 🔑 Admin Credentials

For testing, you can use:

```
Email: ganesh@gmail.com
Password: ganesh123
```

---

## 📦 Deployment

You can deploy this project easily on **Vercel**:

```bash
npm run build
npm start
```

---

## 🤝 Contributing

Feel free to fork this repo, open issues, and submit pull requests. Contributions are always welcome.

---

```

```
