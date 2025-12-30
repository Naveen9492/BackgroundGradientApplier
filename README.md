Gradient Generator

Version: 1.0.0

A React-based web application that allows users to generate CSS linear gradients dynamically by selecting colors and gradient directions. Users can pick two colors and choose the direction of the gradient, and the app applies the gradient as the background in real-time when the Generate button is clicked.

This project demonstrates React class components, state management, styled-components, and handling user interactions.

Table of Contents

Demo

Features

Technologies Used

Setup Instructions

Usage

File Structure

Notes

License

Demo
<div style="text-align: center;"> <img src="https://assets.ccbp.in/frontend/content/react-js/gradient-generator-output-v0.gif" alt="gradient-generator-demo" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0,0,0,0.12)"> </div>

Responsive design examples:

Extra Small & Small

Medium, Large & Extra Large

Features

Select gradient direction (Top, Bottom, Left, Right).

Pick two colors for the gradient using HTML color picker.

Display the selected color values dynamically.

Apply the gradient as the background of the app when clicking Generate.

Responsive design for all screen sizes.

Technologies Used

React.js (Class Components)

Styled-components for CSS-in-JS styling

HTML5 & CSS3

JavaScript ES6+

Setup Instructions

Clone the repository:

git clone https://github.com/YourUsername/gradient-generator.git


Navigate into the project directory:

cd gradient-generator


Install dependencies:

npm install


Start the development server:

npm start


The app will run on http://localhost:3000.

Usage

Choose a gradient direction by clicking one of the direction buttons.

Pick two colors using the color pickers.

The selected colors are displayed above each picker.

Click Generate to apply the linear gradient to the app background.

Active gradient direction buttons have opacity 1, while inactive buttons have opacity 0.5.

File Structure
src/
├─ components/
│  ├─ GradientGenerator/
│  │  ├─ index.js
│  │  └─ styledComponents.js
│  ├─ GradientDirectionItem/
│  │  ├─ index.js
│  │  └─ styledComponents.js
├─ App.js
└─ index.js

Notes

Initial gradient direction defaults to the first option in the list (Top).

Default color values are #8ae323 and #014f7b.

The app uses data-testid="gradientGenerator" for testing purposes.

The app is fully responsive using CSS Grid and Flexbox.

License

This project is open source and available under the MIT License
.

You can copy this README.md directly to your GitHub repository.

If you want, I can also add a “Live Demo” section for GitHub Pages so people can open it in the browser directly.
