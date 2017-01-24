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
apple.addEventListener('click', function clickApple() {
  console.log('Apple clicked.');
  document.getElementById("fruit").innerHTML="<img src='img/Apple.jpg' />";
});
var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function clickOrange() {
  console.log('Orange clicked.');
  document.getElementById("fruit").innerHTML="<img src='img/Orange.jpg' />";
});
var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function clickBanana() {
  console.log('Banana clicked.');
  document.getElementById("fruit").innerHTML="<img src='img/Banana.jpg' />";
});
var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function clickIceCream() {
  console.log('Ice Cream clicked.');
  document.getElementById("dessert").innerHTML="<img src='img/IceCream.jpg' />";
});
var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function clickCake() {
  console.log('Cake clicked.');
  document.getElementById("dessert").innerHTML="<img src='img/Cake.jpg' />";
});
var pie = document.querySelector('.Dessert--pie');
pie.addEventListener('click', function clickPie() {
  console.log('Pie clicked.');
  document.getElementById("dessert").innerHTML="<img src='img/Pie.jpg' />";
});

// $(document).ready(function () {
//
//   function Result() {
    // var apple = document.getElementById("apple").innerHTML;
//     var banana = $("#banana");
//     var orange = $("#orange");
    // var icecream = document.getElementById("icecream").innerHTML;
//     var cake = $("#cake");
//     var pie = $("#pie");

//     if (apple.clickApple == true && icecream.clickIceCream == true) {
//         document.getElementById("result").innerHTML="<img src='img/AppleIceCream.jpg' />";
//     } else if (banana.clickBanana == true && icecream.clickIceCream == true) {
//         document.getElementById("result").innerHTML="<img src='img/BananaIceCream.jpeg' />";
//     } else if (orange.clickOrange == true && icecream.clickIceCream == true) {
//       document.getElementById("result").innerHTML="<img src='img/OrangeIceCream.jpg' />";
//     } else if (orange.clickOrange == true && cake.clickCake == true) {
//       document.getElementById("result").innerHTML="<img src='img/OrangeCake.jpg' />";
//     } else if (orange.clickOrange == true && pie.clickPie == true) {
//       document.getElementById("result").innerHTML="<img src='img/OrangePie.jpg' />";
//     } else if (apple.clickApple == true && pie.clickPie == true) {
//       document.getElementById("result").innerHTML="<img src='img/ApplePie.jpg' />";
//     } else if (apple.clickApple == true && cake.clickCake == true) {
//       document.getElementById("result").innerHTML="<img src='img/OrangeCake.jpg' />";
//     } else if (banana.clickBanana == true && cake.clickCake == true) {
//         document.getElementById("result").innerHTML="<img src='img/BananaCake.jpg' />";
//     } else if (banana.clickBanana == true && pie.clickPie == true) {
//         document.getElementById("result").innerHTML="<img src='img/BananaPie.jpg' />";
//     } else {
//
//     }
//   };
//     $("#apple, #banana, #orange, #icecream, #cake, #pie").change(Result);
// });

// reset button
function refreshPage(){
    window.location.reload();
}
