# FloraFusion - Online Nursery

## Introduction

FloraFusion is an online nursery platform where users can explore a wide variety of plants, add them to their cart, and make purchases through a seamless, animated interface.

## Project Description

FloraFusion aims to provide an easy-to-use, visually appealing platform for plant enthusiasts to browse and purchase plants online. The platform offers a smooth, animated shopping experience with real-time cart management and secure payment integration. It caters to users across various devices by offering a responsive design and optimized UI.

## Features

- **Animated Design**: Uses GSAP and Framer Motion for smooth animations across the platform.
- **Product Management**: Users can easily add, update, and delete products.
- **Add to Cart**: Seamless cart management functionality.
- **Stripe Payment Integration**: Secure payment processing through Stripe.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **State Management**: Powered by Redux for efficient application state handling.

## Technology Stack

### Frontend

- **React.js**: For building interactive user interfaces.
- **Redux**: For state management.
- **GSAP**: For creating animations.
- **Framer Motion**: For adding animations within React components.
- **sadcn**: UI component library.

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Backend framework for handling server-side operations.
- **MongoDB**: NoSQL database for storing products, users, and orders.
- **Mongoose**: ODM library for MongoDB.

## Installation Guideline

### Prerequisites

Ensure you have the following installed before setting up the project:

- Node.js
- MongoDB (either locally or through a cloud service like MongoDB Atlas)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/webashraf/flora-fusion.git
   cd FloraFusion
   ```

### Configuration

1. Create a .env file in the root directory of the project.
2. Add necessary configuration variables in the .env file. Example
   ```bash
   VITE_PAYMENT_PK=pk_test_51NsKaMH4yQXhpwqmc1wVEn5CCr7gkfuDfdi8FVkmbibBgPRREMgu4deLXbVy4LU9GLcR9AFIbFa0S5jYtRXupN6000ajaSjVp4
   SERVER_URL=https://flora-fusion-backend.vercel.app/
   ```

### Live Link:

https://flora-fusion-nursery.vercel.app/
