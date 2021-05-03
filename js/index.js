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
    "h1": "DOM <br> is <br> Awesome",
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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
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
// console.log('title here', title);

// Updating nav bar
const navNames = document.querySelectorAll('a');
navNames[0].textContent = siteContent["nav"]["nav-item-1"];
navNames[1].textContent = siteContent["nav"]["nav-item-2"];
navNames[2].textContent = siteContent["nav"]["nav-item-3"];
navNames[3].textContent = siteContent["nav"]["nav-item-4"];
navNames[4].textContent = siteContent["nav"]["nav-item-5"];
navNames[5].textContent = siteContent["nav"]["nav-item-6"];

navNames.forEach(a => a.style.color = 'green');

const faq = document.createElement('a');
faq.href = '#';
document.querySelector("nav").appendChild(faq);
faq.textContent = "FAQ";

faq.style.color = 'green';

const home = document.createElement('a');
home.href = "#;"
document.querySelector("nav").prepend(home);
home.textContent = "Home";

home.style.color = 'green';

// Updating logo img
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Updating first section
const heading = document.querySelector('h1');
heading.innerHTML = siteContent["cta"]["h1"];
console.log('title here', heading);

const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

const codeImage = document.getElementById('cta-img');
codeImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Updating main content section
// features
const featuresTitle = document.querySelector('h4');
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

const featuresText = document.querySelector('p');
featuresText.textContent = siteContent["main-content"]["features-content"];

// about
const aboutTitle = document.querySelectorAll('h4');
aboutTitle[1].textContent = siteContent["main-content"]["about-h4"];

const aboutText = document.querySelectorAll('p');
aboutText[1].textContent = siteContent["main-content"]["about-content"];

// code snipper image
const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Updating bottom content
// services
const servicesTitle = document.querySelectorAll('h4');
servicesTitle[2].textContent = siteContent["main-content"]["services-h4"];

const servicesText = document.querySelectorAll('p');
servicesText[2].textContent = siteContent["main-content"]["services-content"];

// product
const productTitle = document.querySelectorAll('h4');
productTitle[3].textContent = siteContent["main-content"]["product-h4"];

const productText = document.querySelectorAll('p');
productText[3].textContent = siteContent["main-content"]["product-content"];

// vision
const visionTitle = document.querySelectorAll('h4');
servicesTitle[4].textContent = siteContent["main-content"]["vision-h4"];

const visionText = document.querySelectorAll('p');
visionText[4].textContent = siteContent["main-content"]["vision-content"];


// Updating contact section
const contactTitle = document.querySelectorAll('h4');
contactTitle[5].textContent = siteContent["contact"]["contact-h4"];

const address = document.querySelectorAll('p');
address[5].innerHTML = siteContent["contact"]["address"];

address[6].textContent = siteContent["contact"]["phone"];

address[7].textContent = siteContent["contact"]["email"];


// Updating footer
const copyright = document.querySelectorAll('p');
copyright[8].textContent = siteContent["footer"]["copyright"];
