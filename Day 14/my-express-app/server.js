const express = require("express");
const app = express();

// sample data
const users = [
    {id: 1, name:"Alice"},
    {id: 2, name:"Bob"},
];

const products = [
    {id:1, name:"laptop", price:999},
    {id:2, name:"Phone", price:699},
];

const games = [
    {id:1, name:"Call of Duty", company:"Activision"},
    {id:2, name:"Valorant", company:"Riot"},
];

const music = [
    {id:1, name:"Suit & Tie", artist:"Justin Timberlake and JAY-Z"},
    {id:2, name:"Makes Me Wonder", artist:"Maroon 5"},
];

const brands = [
    {id:1, name:"SteelSeries", products:"Peripherals"},
    {id:2, name:"NZXT", products:"Prebuild PCs"},
];

const shoes = [
    {id:1, name:"Crocs", type:"Slip-on"},
    {id:2, name:"Nike Blazers", type:"High-top"},
];

// routing

app.get("/", (req, res) => 
res.send("Welcome to my API!"));

app.get("/users", (req, res) => res.json(users));

app.get("/products", (req, res) => res.json(products));

app.get("/games", (req, res) => res.json(games));

app.get("/music", (req, res) => res.json(music));

app.get("/brands", (req, res) => res.json(brands));

app.get("/shoes", (req, res) => res.json(shoes));

// start server
const PORT = 3000;
app.listen(PORT, () => 
console.log(
    `Server running on http://localhost:${PORT}`
));