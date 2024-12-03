const dictionaries = {
    en: {
      title: 'Random Pokémon',
      description: 'This is a simple page that makes a call to a PokeAPI.',
      home:'Home',
      esperando:'Waiting 3s'
    },
    es: {
      title: 'Pokémon aleatori',
      description: 'Esta es una página sencilla que hace llamado a una PokeAPI.',
      home:'Inicio',
      esperando:'Esperando 3s'
    },
  }
  export const getDictionary = (lang) => dictionaries[lang ]