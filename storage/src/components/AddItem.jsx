import React, { useContext } from 'react';
import ItemForm from './ItemForm';
import ItemsContext from '../context/ItemsContext';

const AddItem = ({ history }) => {
  const { Items, setItems } = useContext(ItemsContext);

  const handleOnSubmit = (Item) => {
    setItems([Item, ...Items]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ItemForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddItem;
