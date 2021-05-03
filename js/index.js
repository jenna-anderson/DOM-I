const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const title = document.querySelector('title');
title.textContent = 'Great Idea!';
console.log('title here', title);

// Updating nav bar
const navNames = document.getElementsByTagName('a');
navNames[0].textContent = 'Services';
navNames[1].textContent = 'Product';
navNames[2].textContent = 'Vision';
navNames[3].textContent = 'Features';
navNames[4].textContent = 'About';
navNames[5].textContent = 'Contact';

// Updating logo img
const logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png');

// Updating first section
const heading = document.querySelector('h1');
heading.textContent = "DOM is awesome";

const button = document.querySelector('button');
button.textContent = "Get Started";

const codeImage = document.getElementById('cta-img');
codeImage.setAttribute('src', 'img/header-img.png');

// Updating main content section
// features
const featuresTitle = document.querySelector('h4');
featuresTitle.textContent = "Features";

const featuresText = document.querySelector('p');
featuresText.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// about
const aboutTitle = document.querySelectorAll('h4');
aboutTitle[1].textContent = "About";

const aboutText = document.querySelectorAll('p');
aboutText[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// code snipper image
const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', 'img/mid-page-accent.jpg');

// Updating bottom content
// services
const servicesTitle = document.querySelectorAll('h4');
servicesTitle[2].textContent = "Services";

const servicesText = document.querySelectorAll('p');
servicesText[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// product
const productTitle = document.querySelectorAll('h4');
productTitle[3].textContent = "Product";

const productText = document.querySelectorAll('p');
productText[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// vision
const visionTitle = document.querySelectorAll('h4');
servicesTitle[4].textContent = "Vision";

const visionText = document.querySelectorAll('p');
visionText[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


// Updating contact section
const contactTitle = document.querySelectorAll('h4');
contactTitle[5].textContent = "Contact";

const address = document.querySelectorAll('p');
address[5].textContent = "123 Way 456 \n Street Somewhere, USA";

address[6].textContent = "1 (888) 888-8888";

address[7].textContent = "sales@greatidea.io";


// Updating footer
const copyright = document.querySelectorAll('p');
copyright[8].textContent = "Copyright Great Idea! 2018";
