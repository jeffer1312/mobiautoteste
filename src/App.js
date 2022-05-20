import React, { useState } from 'react';
import maskify from './Exercises/Exercise1';
import updateData from './Exercises/Exercise2';
import getRicAndMortyCharacters from './Exercises/Exercise3';
import fizzBuzz from './Exercises/Exercise4';
function App() {
  const [value, setValue] = useState('');
  return (
    <div>
      Mobiauto Teste front-end
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Exercício 1</h1>

          <span>Digite no minimo 6 digitos para mascarar</span>
          <input
            value={maskify(value)}
            onChange={e => setValue(e.target.value)}
            type='text'
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Exercício 3</h1>

          <span>Buscar Dados Da api</span>
          <button onClick={() => getRicAndMortyCharacters()}>
            Buscar Dados
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Exercício 4</h1>

          <span>FizzBuzz</span>
          <button onClick={() => fizzBuzz(50)}>FizzBuzz</button>
        </div>
      </div>
    </div>
  );
}

export default App;
