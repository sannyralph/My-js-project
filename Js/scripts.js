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
        pokemonRepository.add(item)
      }
// the code below will create  button list for the pokemonList we have
      function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listOfPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listOfPokemon.appendChild(button);
        pokemonList.appendChild(listOfPokemon);

// the code below create an eventlistener to the button created
        buttonEventListener(button, pokemon);
      }

// the below function fires the button to react when it is "clicked"
      function buttonEventListener(button, pokemon) {
        button.addEventListener('click', function(){
            showDetails(pokemon);
        })

      }
// the code below calls the eventlistener function on the console.log when the is clicked 
    function showDetails(pokemon){
      console.log(pokemon);
    }

    return {
        getAll : getAll,
        add: add,
        addListItem: addListItem
    }


  })();

    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);

    });
