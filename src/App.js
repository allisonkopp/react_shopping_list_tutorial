import React, { Component } from 'react';
import { data } from './data';
import { Wishlist, Cart, Form } from './components';
class App extends Component {
  state = { list: data };

  updateItemStatus = id => _ => {
    const { list } = this.state;
    const newList = list.map(item => (item.id === id ? { ...item, inCart: !item.inCart } : item));
    this.setState({ list: newList });
  };

  addNewItem = formData => {
    const { list } = this.state;
    const newItem = { ...formData, id: Math.ceil(Math.random() * 100000), inCart: false };
    const newList = [...list, newItem];
    this.setState({ list: newList });
  };

  removeItem = id => _ => {
    const { list } = this.state;
    const filteredList = list.filter(item => item.id !== id);
    this.setState({ list: filteredList });
  };

  render() {
    const { list } = this.state;
    const shoppingCart = list.filter(item => item.inCart);
    const wishList = list.filter(item => !item.inCart);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>My Shopping List</h1>
            <Form addNewItem={this.addNewItem} list={list} />
          </div>
        </div>
        <div className="row">
          <Wishlist wishList={wishList} updateItemStatus={this.updateItemStatus} removeItem={this.removeItem} />
          <Cart shoppingCart={shoppingCart} updateItemStatus={this.updateItemStatus} removeItem={this.removeItem} />
        </div>
      </div>
    );
  }
}

export default App;
