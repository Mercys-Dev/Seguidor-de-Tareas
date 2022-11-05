import React from "react";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSerach';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodoForm} from '../TodoForm';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Moda';


function AppUI () {

    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodos, 
      deleteTodos,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

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

        {!!openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}


        <CreateTodoButton
          setOpenModal = {setOpenModal}
        />
  
      </React.Fragment>
    );
}

export {AppUI};