import React from "react";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSerach';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoContext} from '../TodoContext';

function AppUI () {
    return (
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
  
        <TodoContext.Consumer>
          {({error, 
          loading, 
          searchedTodos, 
          completeTodos, 
          deleteTodos})=> (
            <TodoList>
            {error && <p>Desesoeracion</p>}
            {loading && <p>Estamos Cargando</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer tOdo</p>}


            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
              />
            ))}
            </TodoList>
          )}
        </TodoContext.Consumer>

  
        <CreateTodoButton/>
  
      </React.Fragment>
    );
}

export {AppUI};