const dictionaries = {
    en: {
      title: 'Random Pokémon',
      description: 'This is a simple page that makes a call to a PokeAPI.',
      home:'Home',
    },
    es: {
      title: 'Pokémon aleatorio',
      description: 'Esta es una página sencilla que hace llamado a una PokeAPI.',
      home:'Inicio',
    },
    fr: {
      title: 'Pokémon aléatoire',
      description: "Il s'agit d'une page simple qui appelle une PokeAPI.",
      home: 'Maison',
    }
  }
  export const getDictionary = (lang) => dictionaries[lang ]