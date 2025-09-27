Got it ✅ I’ve cleaned up your README, fixed formatting issues, improved clarity, and made it more professional while keeping everything you wanted.

Here’s the rewritten `README.md`:

```markdown
# 💄 Makeup Shop – E-Commerce Website

This is a full-stack E-Commerce Makeup Shop Website built with Next.js, JavaScript, TailwindCSS, and ShadCN UI.

The project has two main parts:

1. Site – Public pages (Home, Shop, About, Contact Us).
2. Dashboard – Admin-only pages (Dashboard Home, Add Product, Update Product).

Authentication is implemented with NextAuth + JWT, supporting Email/Password and GitHub login.  
Admins can manage products (add/update) via the dashboard, while regular users can browse the shop and view products.

---

## ✨ Features

### 🛍️ Site

- Responsive Home page showcasing featured products.
- Shop page to browse all available makeup items.
- About page describing the brand.
- Contact Us page for customer support.

### 🖥️ Dashboard (Admin only)

- Dashboard Home page overview.
- Add Product page with image upload (via imgbb).
- Update Product page for modifying product details.

### 🔐 Authentication

- Implemented using NextAuth + JWT.
- Login with Email/Password or GitHub.
- Admin account for full dashboard access:
```

Email: [ganesh@gmail.com](mailto:ganesh@gmail.com)
Password: ganesh123

````

### 🛠️ Tech Stack
- Next.js – Framework for React applications.
- JavaScript – Core language.
- TailwindCSS – Utility-first styling.
- ShadCN UI – Modern UI components.
- NextAuth – Authentication (JWT enabled).
- imgbb – Product image hosting.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sowmitraguho/nextjs_ecommerce_site
cd nextjs_ecommerce_site
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

### Project Structure

```
📦src
 ┣ 📂app
 ┃ ┣ 📂(site)
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┣ 📂signin
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┃ ┃ ┣ 📂signup
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┃ ┃ ┗ 📂[...nextauth]
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┃ ┗ 📂products
 ┃ ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂signin
 ┃ ┃ ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginForm.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜SocialLogin.jsx
 ┃ ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┣ 📂AddToCartButton
 ┃ ┃ ┃ ┃ ┗ 📜AddToCartButton.jsx
 ┃ ┃ ┃ ┣ 📂Buttons
 ┃ ┃ ┃ ┃ ┣ 📜CardButton.jsx
 ┃ ┃ ┃ ┃ ┣ 📜HeroButton.jsx
 ┃ ┃ ┃ ┃ ┗ 📜HeroButtonOutline.jsx
 ┃ ┃ ┃ ┣ 📂Cart
 ┃ ┃ ┃ ┃ ┗ 📜Cart.jsx
 ┃ ┃ ┃ ┣ 📂FeaturedProducts
 ┃ ┃ ┃ ┃ ┗ 📜FeaturedProducts.jsx
 ┃ ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┃ ┃ ┣ 📂HeroSection
 ┃ ┃ ┃ ┃ ┗ 📜HeroSection.jsx
 ┃ ┃ ┃ ┣ 📂InviteForRegistration
 ┃ ┃ ┃ ┃ ┗ 📜InviteForRegistration.jsx
 ┃ ┃ ┃ ┣ 📂NavbarNew
 ┃ ┃ ┃ ┃ ┗ 📜NavbarNew.jsx
 ┃ ┃ ┃ ┣ 📂ProductCard
 ┃ ┃ ┃ ┃ ┣ 📜DashboardCard.jsx
 ┃ ┃ ┃ ┃ ┣ 📜ProductCard.jsx
 ┃ ┃ ┃ ┃ ┗ 📜ProductCardSkeleton.jsx
 ┃ ┃ ┃ ┣ 📂ThemeToggler
 ┃ ┃ ┃ ┃ ┗ 📜ThemeToggler.jsx
 ┃ ┃ ┃ ┣ 📂TopProducts
 ┃ ┃ ┃ ┃ ┗ 📜TopProducts.jsx
 ┃ ┃ ┃ ┗ 📂UserMenu
 ┃ ┃ ┃ ┃ ┗ 📜UserMenu.jsx
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┣ 📂products
 ┃ ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┃ ┗ 📜ProductCard.jsx
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductDetailsCard.jsx
 ┃ ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┣ 📂register
 ┃ ┃ ┣ 📜layout.js
 ┃ ┃ ┗ 📜page.js
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📂addProduct
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┣ 📂updateProduct
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┣ 📂UserCart
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┣ 📜layout.js
 ┃ ┃ ┗ 📜page.js
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜globals.css
 ┣ 📂components
 ┃ ┣ 📂ThemeProvider
 ┃ ┃ ┗ 📜ThemeProvider.jsx
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📜avatar.jsx
 ┃ ┃ ┣ 📜badge.jsx
 ┃ ┃ ┣ 📜button.jsx
 ┃ ┃ ┣ 📜card.jsx
 ┃ ┃ ┣ 📜dropdown-menu.jsx
 ┃ ┃ ┣ 📜input.jsx
 ┃ ┃ ┣ 📜label.jsx
 ┃ ┃ ┣ 📜menubar.jsx
 ┃ ┃ ┣ 📜pagination.jsx
 ┃ ┃ ┣ 📜separator.jsx
 ┃ ┃ ┣ 📜sheet.jsx
 ┃ ┃ ┣ 📜sidebar.jsx
 ┃ ┃ ┣ 📜skeleton.jsx
 ┃ ┃ ┣ 📜sonner.jsx
 ┃ ┃ ┣ 📜table.jsx
 ┃ ┃ ┗ 📜tooltip.jsx
 ┣ 📂Context
 ┃ ┣ 📜CartContext.js
 ┃ ┣ 📜ProductContext.js
 ┃ ┗ 📜SessionProvider.js
 ┣ 📂hooks
 ┃ ┗ 📜use-mobile.js
 ┗ 📂lib
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜mongodb.js
 ┃ ┗ 📜utils.js
```

---

## 🔑 Admin Credentials

For testing, you can use:

```
Email: ganesh@gmail.com
Password: ganesh123
```

---

## 📦 Deployment

You can deploy this project easily on Vercel:

```bash
npm run build
npm start
```

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo, open issues, and submit pull requests.

---

## 📜 License

This project is free.

```


```
