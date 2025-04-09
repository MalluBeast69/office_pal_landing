# Modern Developer Portfolio

A clean, modern portfolio website built with HTML, CSS, and JavaScript to showcase Flutter development skills and projects.

## Features

- Modern, responsive design with subtle animations
- Clean UI with a focus on content
- Custom cursor effect for enhanced interactivity
- Smooth scrolling and section highlighting
- Animated elements on scroll
- Mobile-friendly layout
- Contact form

## Technologies Used

- HTML5
- CSS3 (Custom properties, Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts (Inter & Poppins)

## Project Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── styles/
│   └── style.css           # Main stylesheet
├── public/
│   ├── assets/
│   │   └── images/         # Images for the portfolio
│   └── scripts/
│       └── main.js         # JavaScript functionality
└── README.md               # Project documentation
```

## Setup and Usage

1. Clone the repository
2. Customize the content in `index.html` to add your own information
3. Add your profile picture to the `public/assets/images` directory
4. Add project screenshots to the `public/assets/images` directory
5. Update links and social media URLs
6. Deploy to your preferred hosting service

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #6C63FF;
    --secondary-color: #F9A826;
    --dark-color: #1A1A2E;
    --light-color: #FFFFFF;
    /* ... other variables */
}
```

### Profile Picture

Replace the placeholder in the hero section with your actual profile picture:

```html
<div class="profile-image-placeholder">
    <!-- Replace with your actual image -->
    <img src="public/assets/images/your-profile-picture.jpg" alt="Your Name">
    <div class="profile-overlay"></div>
</div>
```

### Project Images

Add your project screenshots in the project cards:

```html
<div class="project-image-placeholder">
    <img src="public/assets/images/project1.jpg" alt="Project Name">
</div>
```

## Current Design Trends Incorporated

- Subtle animations and transitions
- Custom cursor effects
- Gradient text effects
- Clean, minimalist design
- Ample white space
- Card-based project showcase
- Hover effects for interactive elements
- Modern typography with variable font weights

## License

This project is open-source and available for personal or commercial use.

## Contact

For any questions or suggestions, please reach out via the contact form on the portfolio or through the social media links provided. 