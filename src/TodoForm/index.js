import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setnewTodoValue] = React.useState();
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChangeo = (event) => {
        setnewTodoValue(event.target.value)
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmito = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };

    return(
        <form onSubmit={onSubmito}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChangeo}
                placeholder="Cortar la Cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">

                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>

                <button type="submit" className="TodoForm-button TodoForm-button--add">
                    Añádir
                </button>

            </div>
        </form>
    );
}

export { TodoForm };