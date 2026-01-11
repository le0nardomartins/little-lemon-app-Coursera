# Little Lemon - Reservation System

Complete table reservation system for Little Lemon restaurant, developed as the final project for the Coursera Front-End Development program.

## 📋 Objective

This project implements a complete web application for Little Lemon restaurant, including:
- **Reservation System**: Complete table reservation form
- **Navigation**: Routes to different pages (Home, About, Menu, Reservations, Order Online, Login)
- **UX/UI**: Intuitive and modern interface following Little Lemon's design
- **Accessibility**: Fully accessible for users with disabilities
- **Validations**: Robust validation of all form fields
- **Responsiveness**: Works perfectly on desktop, tablet, and mobile
- **Tests**: Unit tests with React Testing Library

## 🚀 How to Run the Project

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/le0nardomartins/little-lemon-app-Coursera
cd final-project_coursera
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser at `http://localhost:3000`

The project will automatically open in your browser and reload automatically when you make changes to files.

## 🧪 How to Run Tests

### Run all tests:
```bash
npm test
```

Tests will run in watch mode. Press `a` to run all tests, or `q` to quit.

### Run tests with coverage:
```bash
npm test -- --coverage
```

## 📦 Dependencies

### Main Dependencies
- **react** (^18.2.0): Main React library
- **react-dom** (^18.2.0): React DOM rendering
- **react-router-dom** (^6.20.0): Routing for React applications
- **react-scripts** (5.0.1): Scripts and configuration for Create React App
- **web-vitals** (^3.5.0): Web performance metrics
- **react-icons** (^4.12.0): Icon library for React
- **react-use** (^17.4.2): Collection of useful React hooks
- **hamburger-react** (^2.5.0): Animated hamburger menu component
- **framer-motion** (^10.16.16): Animation library for React

### Development Dependencies
- **@testing-library/react** (^14.1.2): Utilities for testing React components
- **@testing-library/jest-dom** (^6.1.5): Additional matchers for tests
- **@testing-library/user-event** (^14.5.1): User event simulation

## 🛠️ Technologies Used

- **React 18**: JavaScript library for building user interfaces
- **React Router**: Routing and navigation between pages
- **Create React App**: Tool for creating and configuring React projects
- **React Testing Library**: Library for testing React components
- **CSS3**: Styling with pure CSS
- **Semantic HTML5**: Use of semantic elements

## ✨ Features

### Available Pages
- ✅ **Home**: Homepage with highlights, testimonials, and information
- ✅ **About**: Information about the restaurant
- ✅ **Menu**: Restaurant menu
- ✅ **Reservations**: Complete table reservation form
- ✅ **Confirmation**: Reservation confirmation page
- ✅ **Order Online**: Online ordering system
- ✅ **Login**: Login page
- ✅ **404**: Error page for routes not found

### Reservation System
- ✅ Date selection (with validation for past dates)
- ✅ Time selection (dynamic based on selected date)
- ✅ Number of people (1 to 10)
- ✅ Occasion type (Birthday, Anniversary, etc.)
- ✅ Complete validation of all fields
- ✅ Reservation confirmation

### Implemented Validations
- ✅ Date cannot be in the past
- ✅ All fields are required
- ✅ Number of people between 1 and 10
- ✅ Available times based on selected date
- ✅ Descriptive and visible error messages

### Accessibility
- ✅ `aria-label` and `aria-describedby` attributes
- ✅ Labels associated with fields
- ✅ Functional keyboard navigation
- ✅ Coherent reading by screen readers
- ✅ Semantic HTML5 elements

### Responsiveness
- ✅ **Mobile**: Layout optimized for small screens
- ✅ **Tablet**: Layout adapted for tablets
- ✅ **Desktop**: Complete layout for desktop

## 🎨 Design

The design follows Little Lemon's colors and visual identity:
- **Primary Green**: #495E57
- **Primary Yellow**: #F4CE14
- **Secondary Orange**: #EE9972
- **Secondary Beige**: #FBDABB
- **Light Gray**: #EDEFEE
- **Dark Gray**: #333333

## 🧪 Tests

Tests cover:
- ✅ Component rendering
- ✅ Navigation between pages
- ✅ Reservation form validations
- ✅ Main functionalities

## 🚀 Available Scripts

- `npm start`: Starts the development server
- `npm run build`: Creates production build
- `npm test`: Runs tests in watch mode
- `npm run eject`: Removes react-scripts dependency (irreversible)

## 📝 HTML Semantics

The project uses semantic elements:
- `<main>`: Main content
- `<header>`: Header
- `<nav>`: Navigation
- `<section>`: Content sections
- `<article>`: Articles
- `<footer>`: Footer
- `<form>`: Forms

## 📄 License

This project is licensed under a custom license that **PROHIBITS**:

- ❌ **Commercial use** of any kind
- ❌ **Submission in academic projects**, including:
  - Coursera Capstone Projects
  - Any other Coursera course projects
  - Academic assignments, theses, or evaluations
- ❌ **Plagiarism or use as own work**
- ❌ **Use to pass academic evaluations**

This project was developed by **Leonardo Martins Cunha** as his personal Capstone project.
**It is strictly prohibited** for other people to use this code to:
- Submit as their own work
- Pass academic evaluations
- Violate academic integrity policies

**Allowed only for:**
- ✅ Personal study and learning
- ✅ Educational reference (without submission)
- ✅ Creation of derivative works for personal learning

For more details, see the [LICENSE](LICENSE) file.

**Violations of this license may result in:**
- Academic penalties
- Permanent ban from educational platforms
- Legal consequences for copyright infringement

## 👤 Author

**Leonardo Martins Cunha**

- 🌐 Portfolio: [leonardomartins.dev](https://leonardomartins.dev)

---

**Note**: This project was developed following React development best practices, with focus on accessibility, responsiveness, and code quality.
