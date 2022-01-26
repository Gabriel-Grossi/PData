const express = require('express')
const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/dashboard', (req, res) => res.render("dashboard"))
route.get('/about', (req, res) => res.render("about"))
route.get('/league/brasileirao', (req, res) => res.render("league/brasileirao"))
route.get('/league/bra/corinthians', (req, res) => res.render("league/bra/corinthians"))
route.get('/league/bra/palmeiras', (req, res) => res.render("league/bra/palmeiras"))
route.get('/league/bra/saopaulo', (req, res) => res.render("league/bra/saopaulo"))
route.get('/league', (req, res) => res.render("league"))
route.get('/club', (req, res) => res.render("club"))
//route.post('/brasileirao/:club', (req, res) => res.render(exemplo, {req}))

module.exports = route;