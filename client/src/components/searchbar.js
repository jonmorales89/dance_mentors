import React, { Component } from 'react';
import SearchList from './search_list';
import { Link, Route } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value === '' || this.state.value.length !== 5) {
      alert('Please input a valid zip code!');
    }
  }
  render() {
    let zip = `/results/${this.state.value}`;
    return (
      <form className={`${this.props.className}`} onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter your zipcode"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className={`${this.props.InputClassName}`}
        />
        <Link to={zip}>
          <input type="submit" value="Submit" />
        </Link>
      </form>
    );
  }
}
export default Search;
