// Imports
var models = require('../models');
var asyncLib = require('async');
const express = require('express');

// Constants

// Routes
module.exports = {
  listRestaurant: function(req, res) {
    models.Restaurant.findAll({
      attributes: ['id', 'name', 'image', 'note', 'drive_time'],
      include: {
        model: models.Plat,
        as:'plats',
        attributes: ['id', 'Nom_Plat', 'Prix', 'Description']
      }
    })
    .then(function(restaurants) {
      if (restaurants.length > 0) {
        res.status(200).json(restaurants);
      } else {
        res.status(404).json({ "error": "no restaurant found" });
      }
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).json({ "error": "invalid fields" });
    });
  },
  nameRestaurant: function(req, res) {
    var restaurantName = req.params.name; // Obtenez le nom du restaurant à partir des paramètres de la requête
  
    models.Restaurant.findOne({
      where: {
        name: restaurantName
      },
      include: {
        model: models.Plat,
        as: 'plats',
        attributes: ['id', 'Nom_Plat', 'Prix', 'Description']
      }
    })
      .then(function(restaurant) {
        if (restaurant) {
          res.status(200).json(restaurant);
        } else {
          res.status(404).json({ "error": "Restaurant not found" });
        }
      })
      .catch(function(err) {
        console.log(err);
        res.status(500).json({ "error": "Invalid fields" });
      });
  }  
};
