$.get("http://localhost:3000/", function (res) {
  var db = res;
  make_item(db);
});

$.get("http://localhost:3000/categories", function (res) {
  var db = res;
  make_item(db);
});

$.get("http://localhost:3000/Action", function (res) {
  var db = res;
  make_item(db);
});

$.get("http://localhost:3000/Fighting", function (res) {
  var db = res;
  make_item(db);
});

$.get("http://localhost:3000/RPG", function (res) {
  var db = res;
  make_item(db);
});

$.get("http://localhost:3000/Arcade", function (res) {
  var db = res;
  make_item(db);
});

$.get("http://localhost:3000/MOBA", function (res) {
  var db = res;
  make_item(db);
});

$.get("http://localhost:3000/FPS", function (res) {
  var db = res;
  make_item(db);
});



// $.get("http://localhost:3000/", function (res) {
//   res.forEach(function (game) {
//     new Games(game.name, game.img, game.resume, game.note)

//   });
//   console.log(res);
// });

var container = document.getElementById('container');

var header = document.createElement('header');
var title = document.createElement('h1');
title.setAttribute('id', 'title');
title.textContent = "GameStore";

var paragraphe = document.createElement('p');
paragraphe.setAttribute('class', 'paragraphe');
paragraphe.innerHTML = "Do business on games, extensions, pre-orders and more. <br> Even more discounts for GameStore Plus subscribers.";


var logo = document.createElement('img');
logo.setAttribute('id', 'logo');
logo.setAttribute('src', 'images/gamestore_logo.png');


var basket = document.createElement('img');
basket.setAttribute('id', 'basket');
basket.setAttribute('src', 'images/shopping_basket.png');
;

var namelist = ["Home", "Games", "GameStore Plus", "Store", "Help"];
var ul = document.createElement('ul');

container.appendChild(ul);
ul.appendChild(logo);
ul.appendChild(basket);
for (let i = 0; i < 5; i++) {
  var list = document.createElement('li');
  var a = document.createElement('a');
  a.setAttribute('href', '#')
  list.setAttribute('class', 'list');
  a.textContent = namelist[i];
  ul.appendChild(list);
  list.appendChild(a);


  if (i == 1) {
    list.setAttribute('id', 'scroll_menu');
  }

}

console.log(namelist);


basket.addEventListener('click', function () {
  btnBasket();
});

container.appendChild(header);


ul.appendChild(list);
header.appendChild(title);
header.appendChild(paragraphe);



var basket = document.createElement('img');
basket.setAttribute('id', 'basket');
basket.setAttribute('src', 'images/shopping_basket.png');
;


var gotm = document.createElement('div');
gotm.setAttribute('id', 'gotm');

container.appendChild(gotm);


// var gamesOfTheMoment = new Array();
// var typeOfGames = new Array();


// class Games {
//   constructor(game_name, game_img, game_resume, game_note, category_name) {
//     this.name = game_name;
//     this.img = game_img;
//     this.resume = game_resume;
//     this.note = game_note;
//     this.category = category_name;
//     gamesOfTheMoment.push(this)
//     console.log('Created: ' + this)
//   }
// }

// console.log(gamesOfTheMoment);


// class Categories {
//   constructor(cat_name) {
//     this.catname = cat_name;
//   }
// }


function make_item(db) {
  db.forEach(function (game) {
    console.log(game);
    var games = document.createElement('div');
    games.setAttribute('class', "games_of_the_moment");
    var fiche = document.createElement('div');
    fiche.setAttribute('class', "fiche");
    var titlesGames = document.createElement('h1');
    titlesGames.setAttribute('class', 'titlesGOTM');
    titlesGames.textContent = game.game_name;
    var imagesGames = document.createElement('img');
    imagesGames.setAttribute('src', game.game_img);
    var synopsisGames = document.createElement('p');
    synopsisGames.setAttribute('class', 'synopsis');
    synopsisGames.textContent = game.game_resume;


    container.appendChild(games);
    games.appendChild(titlesGames);
    games.appendChild(fiche);
    fiche.appendChild(imagesGames);
    fiche.appendChild(synopsisGames);

    gotm.appendChild(games);

  });
}



