const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    Food_name: {
        type: String,
        required: true,
    },
    Ranking: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
    },
    Ingredients: {
        type: String,
        required: true
    },
    image_url:{
        type:String,
        required:true
    }
})

const Food = mongoose.model('food_items', FoodSchema)
module.exports = Food;