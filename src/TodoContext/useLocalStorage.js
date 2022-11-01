import React from "react";

function useLocalStore(itemName, initialValue){
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let pasedItem;
        
          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            pasedItem = initialValue;
          } else{
            pasedItem = JSON.parse(localStorageItem);
          }    
  
          setItem(pasedItem);
          setLoading(false);
        } catch(error){
            setError(error);
        }
      }, 1000)
    });
  
    const saveItem = (newTodos) => {
      try{
        const stringifyTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemName, stringifyTodos);
        setItem(newTodos);
      } catch(error){
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export {useLocalStore};