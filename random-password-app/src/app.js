import React from 'react';
import Generator from './components/generator/generator';
import './styles/style.css'


export default function App() {
    return(
      <div className='body'>
        <h1 className='is-size-2 mt-2'>Password Generator</h1>
        <div className='main'>
        <Generator />
        </div>
      </div>
    );
  }