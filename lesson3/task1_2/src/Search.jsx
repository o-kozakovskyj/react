/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
// using func
// const SearchField = props => {
//   return (
//     <div className="search">
//       <h1 className="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
//       <div className="search__field">
//         <input type="text" className="search__input" />
//         <button className="search__button">Search</button>
//       </div>
//     </div>
//   );
// };

// using class
class SearchField extends Component {
  render() {
    return (
      <div className="search">
        <h1 className="search__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
        <div className="search__field">
          <input type="text" className="search__input" />
          <button className="search__button">Search</button>
        </div>
      </div>
    );
  }
}
export default SearchField;
