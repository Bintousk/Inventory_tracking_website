import React, { useContext } from 'react';
import ItemForm from './ItemForm';
import ItemsContext from '../context/ItemsContext';

const AddItem = ({ history }) => {
  const { items, setItems } = useContext(ItemsContext);

  const handleOnSubmit = (item) => {
    setItems([item, ...items]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ItemForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddItem;
