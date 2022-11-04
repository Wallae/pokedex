const index = (req, res)=> {
    res.render('index', {title:'Mon Pokedex'}) //Render filename from views, var Title
} 

module.exports = {index};