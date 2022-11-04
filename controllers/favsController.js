const Favs = require('../models/favsModel');

const index = (req, res)=> {
    Favs.find({}, (err, favs) => {
        res.render('favs', {
            title:'Mes favoris',
            favs: favs
    }) //Render filename from views, var Title
    } )   
} 

const favs = (req, res) => {
    
}

const addFavorite = (req,res) => {
    const {pokemonName} = req.params;
    Favs.create({pokemonName})
    .then(user => res.json(user))
    .catch(err => res.json(err))
}


// const users = (req, res) => {
//     User.find()
//         .then((users) => res.json(users))
//         .catch(err => res.json(err))
// }

// const deleteUserById = (req,res) => {
//     User.findByIdAndDelete(req.body.id)
//     .then(res => res.json("ok"))
//     .catch(err => res.json("pas ok"))
    
// }

// const findUserById = (req,res) => {
//     User.findById(req.body.id, (err, user) => {
//         if (err) {
//             res.json({err, "message": "err"})
//         }
//         res.status(200).json(user)
//     })
    
    
// }

module.exports = {
    index,
    favs,
    addFavorite
}