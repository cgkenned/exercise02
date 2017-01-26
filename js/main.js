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

// fruit dom elements

var apple = document.querySelector('.Fruit--apple');
var orange = document.querySelector('.Fruit--orange');
var banana = document.querySelector('.Fruit--banana');

// dessert dom elements

var icecream = document.querySelector('.Dessert--icecream');
var cake = document.querySelector('.Dessert--cake');
var pie = document.querySelector('.Dessert--pie');

// holders

var fruitHolder = document.querySelector('.Holder--fruit')
var dessertHolder = document.querySelector('.Holder--dessert')
var resultHolder = document.querySelector('.Holder--result')

var reset = document.querySelector('.Reset');

// event listeners

reset.addEventListener('click', function Reset () {
  setFruit = null;
  setDessert = null;
});

apple.addEventListener('click', function clickApple() {
  setFruit('apple');
  document.getElementById("fruit").innerHTML="<img src='img/Apple.jpg' />";
});

orange.addEventListener('click', function clickOrange() {
  setFruit('orange');
  document.getElementById("fruit").innerHTML="<img src='img/Orange.jpg' />";
});

banana.addEventListener('click', function clickBanana() {
  setFruit('banana');
  document.getElementById("fruit").innerHTML="<img src='img/Banana.jpg' />";
});

icecream.addEventListener('click', function clickIceCream() {
  setDessert('icecream');
  document.getElementById("dessert").innerHTML="<img src='img/IceCream.jpg' />";
});

cake.addEventListener('click', function clickCake() {
  setDessert('cake');
  document.getElementById("dessert").innerHTML="<img src='img/Cake.jpg' />";
});

pie.addEventListener('click', function clickPie() {
  setDessert('pie');
  document.getElementById("dessert").innerHTML="<img src='img/Pie.jpg' />";
});



function setFruit(f) {
  console.log(f + ' clicked');
  currentFruit = f;

if (currentFruit !== null) {
  fruitHolder.innerHTML = `<img src="${images.fruits[currentFruit]}" />`;
} else {
  fruitHolder.innerHTML = '';
}

loadMix();

}

function setDessert(d) {
  console.log(d + ' clicked');
  currentDessert = d;

  if (currentDessert !== null) {
    dessertHolder.innerHTML = `<img src="${images.desserts[currentDessert]}" />`;
  } else {
    dessertHolder.innerHTML = '';
  }

loadMix();

}

function loadMix() {
  if (currentFruit !== null && currentDessert !== null) {
    resultHolder.innerHTML = `<img src="${images.mixes[currentFruit][currentDessert]}" />`;
  } else {
    resultHolder.innerHTML = '';
  }
}
