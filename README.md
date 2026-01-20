# MERN Commerce

A full-stack e-commerce solution built with the MERN stack (MongoDB, Express.js, React.js, Next.js) and TypeScript. This application provides a complete e-commerce platform with user authentication, product management, order processing, and an admin panel.

## 🚀 Technology Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **AdminBro** - Admin panel interface

### Frontend
- **React.js** - UI library
- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript

### DevOps
- **Docker** - Containerization
- **Heroku** - Cloud platform (Procfile included)

## ✨ Features

### User Management
- User registration and authentication
- JWT-based authentication
- Role-based access control (superadmin, admin, user)
- Password encryption with bcrypt
- User profile management

### Product Management
- Create, read, update, and delete products
- Product search functionality
- Category-based product filtering
- Product slug generation
- Bulk product generation from external API (FakeStore API)
- Category management

### Order Management
- Create and manage orders
- Order status tracking (pending, accepted, delivered, rejected)
- Order reports and analytics
- Order history with populated product details
- Shipping address management

### Admin Features
- Admin panel powered by AdminBro
- Role-based authorization
- Order status management
- User management
- Product management
- Order reports and analytics

## 📁 Project Structure

```
mern-commerce/
├── src/
│   ├── app.ts                 # Express app configuration
│   ├── server.ts              # Server entry point
│   ├── components/            # React components
│   ├── controllers/           # Business logic controllers
│   │   ├── accountController.ts
│   │   ├── orderController.ts
│   │   └── productController.ts
│   ├── interfaces/            # TypeScript interfaces
│   ├── middlewares/           # Express middlewares
│   │   ├── authMiddleware.ts
│   │   └── logger.ts
│   ├── models/                # Mongoose models
│   │   ├── orderModel.ts
│   │   ├── productModel.ts
│   │   └── userModel.ts
│   ├── pages/                 # Next.js pages
│   └── routes/                # API routes
│       ├── accountRoutes.ts
│       ├── orderRoutes.ts
│       └── productRoutes.ts
├── Dockerfile
├── Procfile
├── package.json
└── tsconfig.json
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14.16.0 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   DB_STRING=mongodb://127.0.0.1:27017/mern-commerce
   SECRET_KEY=your-secret-key-here
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`

## 📜 Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm run build:server` - Build TypeScript server code
- `npm run build:client` - Build Next.js client
- `npm run build` - Build both client and server
- `npm start` - Start production server (requires build)

## 🔌 API Endpoints

### Authentication & User Management

#### Register User
```
POST /api/register
Body: {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string
}
```

#### Login
```
POST /api/login
Body: {
  username: string,
  password: string
}
Response: { token: string }
```

#### Get Current User
```
GET /api/user
Headers: Authorization: Bearer <token>
```

#### Get All Users (Admin only)
```
GET /api/users
Headers: Authorization: Bearer <token>
```

#### Update User (Admin only)
```
PUT /api/users
Headers: Authorization: Bearer <token>
Body: { _id: string, ...userData }
```

#### Delete User (Admin only)
```
DELETE /api/users
Headers: Authorization: Bearer <token>
Body: { _id: string }
```

### Product Management

#### Get All Products
```
GET /api/products
```

#### Get Single Product
```
GET /api/product?slug=product-slug
```

#### Search Products
```
GET /api/product/search?q=search-query
```

#### Get Products by Category
```
GET /api/category/:categorySlug
```

#### Get All Categories
```
GET /api/products/categories
```

#### Create Product (Admin only)
```
POST /api/products
Headers: Authorization: Bearer <token>
Body: {
  title: string,
  description: string,
  price: number,
  category: string,
  image: string
}
```

#### Update Product (Admin only)
```
PUT /api/products
Headers: Authorization: Bearer <token>
Body: { _id: string, ...productData }
```

#### Delete Product (Admin only)
```
DELETE /api/products
Headers: Authorization: Bearer <token>
Body: { _id: string }
```

#### Generate Products from API (Superadmin only)
```
GET /api/products/generate
Headers: Authorization: Bearer <token>
```

#### Add Category
```
POST /api/products/categories
Body: { title: string }
```

### Order Management

#### Get All Orders (Admin only)
```
GET /api/orders
Headers: Authorization: Bearer <token>
```

#### Get Order by ID
```
GET /api/order?id=ORDER_ID
Headers: Authorization: Bearer <token>
```

#### Create Order
```
POST /api/orders
Headers: Authorization: Bearer <token>
Body: {
  shippingAddress: string,
  orderEmail: string,
  orderItems: [
    { productId: string, quantity: number }
  ]
}
```

#### Update Order Status (Admin only)
```
PUT /api/orders
Headers: Authorization: Bearer <token>
Body: {
  _id: string,
  status: "pending" | "accepted" | "delivered" | "rejected"
}
```

#### Delete Order (Admin only)
```
DELETE /api/orders
Headers: Authorization: Bearer <token>
Body: { _id: string }
```

#### Generate Order Report (Superadmin only)
```
GET /api/orders/report
Headers: Authorization: Bearer <token>
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-token>
```

### User Roles
- **user** - Regular customer (default)
- **admin** - Can manage products and orders
- **superadmin** - Full access including user management and reports

## 🐳 Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t mern-commerce .
   ```

2. **Run the container**
   ```bash
   docker run -p 5000:5000 --env-file .env mern-commerce
   ```

## 🚀 Production Deployment

### Heroku

The project includes a `Procfile` for Heroku deployment:

1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git:
   ```bash
   git push heroku main
   ```

### Environment Variables for Production
- `PORT` - Server port (Heroku sets this automatically)
- `DB_STRING` - MongoDB connection string
- `SECRET_KEY` - JWT secret key
- `NODE_ENV` - Set to "production"

## 📝 Database Models

### User Model
- firstName, lastName, username, email, password
- role (default: "user")
- timestamp

### Product Model
- title, description, price, slug, category, image
- createdAt

### Order Model
- customer (User reference)
- shippingAddress, orderEmail
- status (default: "pending")
- orderNo (auto-increment)
- orderItems (virtual reference to OrderItem)
- timestamp

### OrderItem Model
- product (Product reference)
- order (Order reference)
- price, quantity
- timestamp

## 🛡️ Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Role-based authorization
- Input validation
- CORS enabled
- Environment variable configuration

## 📄 License

ISC

## 👤 Author

**Shakil Ahmed**
- GitHub: [@shahmedme](https://github.com/shahmedme)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support, please open an issue in the repository.

---

Made with ❤️ by Shakil Ahmed
