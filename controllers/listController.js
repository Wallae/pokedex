const list = (req, res)=> {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res=> res.json())
    .then(data => {
        res.render('list', {
            title: 'Liste des pokemons',
            pokemons: data.results
        })
    })
} 

const getName = (req,res) => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+ req.params.name)
    .then(res=> res.json())
    .then(data => {
        res.render('pokemon', {
            pokemon: data
        })
    })

    console.log(req.params.name);
}

module.exports = {
    list,
    getName
};