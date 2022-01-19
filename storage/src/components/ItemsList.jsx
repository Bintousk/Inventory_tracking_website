import React, { useContext } from 'react';
import _ from 'lodash';
import Item from './Item';
import ItemsContext from '../context/ItemsContext';
import CsvDownload from 'react-json-to-csv';

const ItemsList = () => {
  const { items, setItems } = useContext(ItemsContext);
  
  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <React.Fragment>
      <div className="item-list">
      <CsvDownload data={items} />
      <table>
        <thead>
        <tr>
    <th>Items</th>
    <th>Description</th>
    <th>Quantity</th>
    <th>Price ($)</th>
    <th>Date of the last uptade</th>
    <th>Action</th>
     </tr>
        </thead>
        <tbody>
        
        {!_.isEmpty(items) ? ( 
          items.map((item) => (
            <tr><Item key={item.id} {...item} handleRemoveItem={handleRemoveItem} /></tr>
          ))
        ) : (
          <p className="message">No items available. Please add some items.</p>
        )}
        </tbody>
      </table>
      </div>
    </React.Fragment>
  );
};

export default ItemsList;
