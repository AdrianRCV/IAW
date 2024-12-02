const dictionaries = {
    en: {
      title: 'Random Pokemon',
      description: 'This is a simple page that fetches a random Pokémon between 1 and 386 from a PokeAPI.',
      home:'Home',
      esperando:'Waiting 3s'
    },
    es: {
      title: 'Pokemon aleatorio',
      description: 'Esta es una página sencilla que trae de una PokeAPI un pokemon aleatorio entre 1 y 386.',
      home:'Inicio',
      esperando:'Esperando 3s'
    },
  }
  export const getDictionary = (lang) => dictionaries[lang ]