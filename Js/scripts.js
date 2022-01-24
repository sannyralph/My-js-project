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
                ]
  //the code below shows the names of each pokemon and adds the height beside it.
  for (let i = 0; i < pokemonList.length; i++)
  document.write( pokemonList[i].name + (', height:') + pokemonList[i].height + '<br>');

// the code here adds a conditional that picks out any pokemon the has a hength that is greater than 0.6 and also adds a special message beside it.
  for (let i = 0; i < pokemonList.length; i++)
      if (pokemonList[i].height > 0.6) {
    document.write('<br>' +  pokemonList[i].name + ( ', height: ' )+ pokemonList[i].height + ( " (Wow, That\'s big !!)") + '<br>');
 }
// here I want the code to just return the rest of the pokemon that doesn't meet the initial requirment i.e greater 0.6 with adding any messaage 
 else {
   document.write('<br>' +  pokemonList[i].name + ( ', height: ' )+ pokemonList[i].height + '<br>')
  }
