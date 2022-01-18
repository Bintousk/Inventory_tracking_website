import React from 'react';
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Item = ({
  id,
  itemname,
  author,
  price,
  quantity,
  date,
  handleRemoveItem
}) => {
  const history = useHistory();

  return (
      <>
      <th>{itemname}</th>
      <th>{author}</th>
      <th>{quantity}</th>
      <th>{price}</th>
      <th>{new Date(date).toDateString()}</th>
    
       <th> <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveItem(id)}>
          Delete
        </Button>
        </th>
        </>
  );
};

export default Item;
