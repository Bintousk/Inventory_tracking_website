import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ItemForm = (props) => {
  const [item, setItem] = useState(() => {
    return {
      itemname: props.item ? props.item.itemname : '',
      description: props.item ? props.item.description : '',
      quantity: props.item ? props.item.quantity : '',
      price: props.item ? props.item.price : '',
      date: props.item ? props.item.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { itemname, description, price, quantity } = item;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [itemname, description, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const item = {
        id: uuidv4(),
        itemname,
        description,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(item);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setItem((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setItem((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setItem((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="itemname"
            value={itemname}
            placeholder="Enter name of the item"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Item description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter the description"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Item Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of item"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ItemForm;
