// Imports
var express = require('express');
var UserController = require ('./routes/UserController');
var RestaurantController = require ('./routes/RestaurantController');
const control = express.Router();


// Router
exports.router = (function() {
    var apiRouter = express.Router();
    
    //Users routes
    apiRouter.route('/users/register/').post(UserController.register);
    apiRouter.route('/users/login/').post(UserController.login);
    apiRouter.route('/users/me/').get(UserController.getUserProfile);
    apiRouter.route('/users/me/').put(UserController.updateUserProfile);

    //Restaurant routes
    apiRouter.route('/restaurant').get(RestaurantController.listRestaurant);
    apiRouter.route('/restaurant/:name').get(RestaurantController.nameRestaurant)

    


    return apiRouter;

})();