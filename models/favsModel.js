const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
    pokemonName:{
        type: String,
        required: true,
        unique: true
    },
    note:String
})

const Fav = mongoose.model("Fav", favSchema);

module.exports = Fav;