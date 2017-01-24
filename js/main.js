console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpeg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

var apple = document.querySelector('.Fruit--apple');
apple.addEventListener('click', function() {
  console.log('Apple clicked.');
  document.getElementById("fruit").innerHTML="<img src='img/Apple.jpg' />";
});
var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
  console.log('Orange clicked.');
  document.getElementById("fruit").innerHTML="<img src='img/Orange.jpg' />";
});
var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
  console.log('Banana clicked.');
  document.getElementById("fruit").innerHTML="<img src='img/Banana.jpg' />";
});
var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function() {
  console.log('Ice Cream clicked.');
  document.getElementById("dessert").innerHTML="<img src='img/IceCream.jpg' />";
});
var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
  console.log('Cake clicked.');
  document.getElementById("dessert").innerHTML="<img src='img/Cake.jpg' />";
});
var pie = document.querySelector('.Dessert--pie');
pie.addEventListener('click', function() {
  console.log('Pie clicked.');
  document.getElementById("dessert").innerHTML="<img src='img/Pie.jpg' />";
});
