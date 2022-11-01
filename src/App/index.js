import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed:true},
//   {text: 'Tomar curso de react', completed:false},
//   {text: 'llorar con la llorona', completed:false},
//   {text: 'Nuevo', completed:false}

// ]
function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>

  );
}

export default App;
