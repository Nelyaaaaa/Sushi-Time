import sushi12 from "../assets/sushi-12.png";
import sushi11 from "../assets/sushi-11.png";
import sushi10 from "../assets/sushi-10.png";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation

AOS.init({
  duration: 1000,
  offset: 100,
});

// Const Cards, Sushis and Drinks

const cards = [
  {
    imgSrc: sushi12,
    alt: "sushi-12",
    title: "Chezu Sushi",
    rating: "4.9",
    price: "21.00€"
  },
  {
    imgSrc: sushi11,
    alt: "sushi-11",
    title: "Sushi Saumon",
    rating: "5.0",
    price: "19.00€",
    active: true
  },
  {
    imgSrc: sushi10,
    alt: "sushi-10",
    title: "Ramen Legendo",
    rating: "4.7",
    price: "13.00€"
  }
];

document.addEventListener('DOMContentLoaded', function () {

  const cardElements = document.querySelectorAll('.popular-foods__card');

  cardElements.forEach((cardElement, index) => {
    const card = cards[index];

    const cardImage = cardElement.querySelector('.popular-foods__card-image');
    cardImage.src = card.imgSrc;
    cardImage.alt = card.alt;

    const cardTitle = cardElement.querySelector('.popular-foods__card-title');
    cardTitle.textContent = card.title;

    const cardRating = cardElement.querySelector('.popular-foods__card-rating p');
    cardRating.textContent = card.rating;

    const cardPrice = cardElement.querySelector('.popular-foods__card-price');
    cardPrice.textContent = card.price;
  });

});

const trendingSushis = [
  'Make Sushi',
  'Nigiri Sushi',
  'Oshizushi',
  'Temaki Sushi',
  'Uramaki Sushi',
  'Inari Sushi'
]

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Thé Sakura",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
]

document.addEventListener('DOMContentLoaded', function () {

  const lists = document.querySelectorAll('.trending__list');

  lists.forEach(list => {
    const category = list.dataset.category;
    const items = list.querySelectorAll('li p');

    let trendingItems;

    if (category === 'sushis') {
      trendingItems = trendingSushis;
    } else if (category === 'drinks') {
      trendingItems = trendingDrinks;
    }

    trendingItems.map((item, index) => {
      items[index].textContent = item;
    });
  });
});


// Menu Burger

const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');
const menuList = document.querySelector('.header__menu');

burgerIcon.addEventListener('click', function () {
  menuList.classList.add('mobile');
  menuList.style.display = 'flex';
  burgerIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', function () {
  closeIcon.style.display = 'none';
  burgerIcon.style.display = 'block';
  menuList.style.animation = 'slide-right 0.5s';
  setTimeout(() => {
    menuList.style.animation = ''; // Animation reset
    menuList.style.display = 'none';
  }, 500);
});

// Back to top button

var btn = document.getElementById('scrollbtn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 800) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
    btn.classList.add('exit');
  }
});

btn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


