// faça uma chamada rick and morty api e resgate informações do seguintes personagens (Rick Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith)
// e ajustar os dados para que fiquem igual a saida de exemplo.
// API aberta não precisa de token
// Documentação
// https://rickandmortyapi.com/documentation/#rest

const { default: axios } = require('axios');

// Ex de Saida: [
//   {
//     nome: 'Rick Sanchez',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Morty Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Summer Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Beth Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Jerry Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//     especie: 'Humano'
//   }
// ]

async function getRicAndMortyCharacters() {
  //you code here...

  const res = await axios.get('https://rickandmortyapi.com/api/character/');

  const characters = res.data.results;

  const charactersWithCustomData = characters
    .map(character => {
      const { name, gender, image, species } = character;

      if (
        name === 'Rick Sanchez' ||
        name === 'Morty Smith' ||
        name === 'Summer Smith' ||
        name === 'Beth Smith' ||
        name === 'Jerry Smith'
      ) {
        return {
          nome: name,
          genero: gender === 'Male' ? 'Homem' : 'Mulher',
          avatar: image,
          especie: species === 'Human' ? 'Humano' : 'Alienigena',
        };
      }
    })
    .filter(function (i) {
      return i;
    });

  return charactersWithCustomData;
}

module.exports = getRicAndMortyCharacters;
