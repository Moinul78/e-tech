# E-Tech
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

This project, `react-vite-template`, provides a solid foundation for building React applications using Vite as the bundler. It includes features such as user authentication, product management, and a clean directory structure for easy scalability.

## Features

1. **User Authentication:**
   - The project includes a login view, home/landing view, and a registration view for a seamless user experience.
   - User authentication is managed using `localStorage` for simplicity since there is no backend.

2. **Product Management:**
   - Product list and detail views are available in both the home and shop sections, providing users with comprehensive information.

3. **Shopping Cart:**
   - Users can view and manage their shopping cart, including the ability to delete products from the cart.

4. **Admin Dashboard:**
   - The admin dashboard is accessible at `/dashboard` without any role restrictions.

5. **Customer Management:**
   - Admins have access to customer lists, customer detail views, and the ability to add new customers.

6. **Product Management for Admins:**
   - Admins can view a list of products, see detailed product information, and add new products.

## Login and Signup

- User authentication is handled using `localStorage`.
- Users can log in and sign up without the need for a backend.
- Data is managed locally for simplicity.

## Using GitHub JSON Data

- The project utilizes GitHub JSON data for displaying information.
- This ensures realistic data for testing and showcasing features.

## Scripts

- **Development:**


## Start the development server using Vite and environment-specific configurations.

# Using yarn
yarn i
yarn dev

# Using npm
npm i
npm run dev


## Technologies Used

- React (v18.2.0)
- Vite (v4.4.5)
- Redux Toolkit (v1.9.6)
- React Router (v6.15.0)
- Axios (v1.5.1)
- JSON Web Token (JWT) (v9.0.2)
- React Hook Form (v7.50.0)
- Tailwind CSS (v3.3.3)
- Jest (for testing)

## Lint
Used ESLint to maintain code quality and adhere to coding standards.
Used Jest for testing.


## Dependencies

Check `package.json` for the complete list of dependencies and devDependencies.

## Author

- **Moinul Islam**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
