let pokemonRepository = (function (){
  let pokemonList = [
                    {
                    name:  'Metapod',
                    height: 0.7,
                    type:'stone'
                    },

                    {
                    name:  'Pikachu',
                    height: 0.3,
                    type:['grass','stone']
                    },

                    {
                    name:  'Persian',
                    height: 0.5,
                    type:['grass','stone','poison']
                    }
                  ];

      function getAll(){
        return pokemonList;
      }

      function add(item) {
        pokemonRepository.add(item) }

    return {
        getAll : getAll,
        add: add
    }


    })()

    pokemonRepository.getAll().forEach(function(pokemon){
      document.write("<p>" + pokemon.name + (',  height: ') + pokemon.height + "</p>" )
    });


// the code here adds a conditional that picks out any pokemon the has a hength that is greater than 0.6 and also adds a special message beside it.
  pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height > 0.6)
    document.write('<p>' +  pokemon.name + ( ', height: ' )+ pokemon.height + ( " (Wow, That\'s big !!)") + '</p>');

    else {
      document.write('<p>' +  pokemon.name + ( ', height: ' )+ pokemon.height + '</>')
     }
    })
