
const express = require("express");
var path = require('path');
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'products')));

var cart = []

var fruits = {
    names: [
        "Персик",
        "Виноград",
        "Яблоко"
    ],
    prices: [
        "50р.",
        "155р.",
        "74р."
    ],
    images: [
        "https://th.bing.com/th/id/OIP.EJv_KDQOEBBj9Rze2o2XngHaF1?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/R.d200697d755b4708e3a1a5ecc02cc4a3?rik=z985KEXgc0UlLw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-0jNeKTbHkTQ%2fUFhgoujBeAI%2fAAAAAAAABhY%2fdGLz4Uvw5YA%2fs1600%2fgrape.jpg&ehk=t8N8RSnb5f58IxXPq1vDt3lt4Kau7kTFa0mjlIsVg9k%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.8yU_q8p4VSpp8NRzcMCIjQHaJO?pid=ImgDet&rs=1"
    ]
};

app.get("/", function(request, response){
     
    // отправляем ответ
    response.send(`
    <link rel="stylesheet" href="style.css">
    <table>
    <tr>
        <th>
            <img src="${fruits.images[0]}" alt="peach" width="150" height="150"> 
            <div class="text-block">Название: <a href="./peach.html"> ${fruits.names[0]} </a> </div>
            <div class="text-block">Цена: ${fruits.prices[0]} </div>     
        </th>
        <th>
            <img src="${fruits.images[1]}" alt="peach" width="150" height="150"> 
            <div class="text-block">Название: <a href="./grape.html">${fruits.names[1]}</a> </div>
            <div class="text-block">Цена: ${fruits.prices[1]} </div>    
        </th>
        <th>
            <img src="${fruits.images[2]}" alt="peach" width="150" height="150"> 
            <div class="text-block">Название: <a href="./apple.html">${fruits.names[2]}</a> </div>
            <div class="text-block">Цена: ${fruits.prices[2]} </div>  
        </th>
    </tr>
    </table>
    `);
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);