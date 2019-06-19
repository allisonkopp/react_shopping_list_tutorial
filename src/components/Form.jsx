import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: String(),
    description: String(),
    isDuplicate: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addNewItem } = this.props;
    const { name, description } = this.state;
    addNewItem && addNewItem({ name, description });
    this.setState({ name: String(), description: String() });
  };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  checkForDuplicates = newItem => e => {
    const { list } = this.props;
    const isDuplicate = list.some(item => item.name.toLowerCase() === newItem.toLowerCase());
    isDuplicate && alert('Item already exists. Please enter a different item');
    this.setState({ isDuplicate });
  };

  render() {
    const { name, description, isDuplicate } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name: </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleInputChange('name')}
                  onBlur={this.checkForDuplicates(name)}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>Description: </label>
                <textarea
                  className="form-control"
                  type="text"
                  onChange={this.handleInputChange('description')}
                  value={description}
                />
              </div>
              <input className="btn btn-primary" type="submit" value="Add Item" disabled={isDuplicate} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
