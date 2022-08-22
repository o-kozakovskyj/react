import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    display: false,
  };

  changeContent = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    const elem = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );
    return (
      <div className="app">
        <Expand title={'Some title'} display={this.state.display} openContent={this.changeContent}>
          {elem}
        </Expand>
      </div>
    );
  }
}

export default App;
