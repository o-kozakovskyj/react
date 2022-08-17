import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  state = {
    isVisible: true,
  };

  cleaner = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    return (
      <>
        <button className="btn" onClick={this.cleaner}>
          Clear time
        </button>
        {this.state.isVisible && (
          <div className="timebox">
            <Clock location={'Kyiv'} offset={2} />
            <Clock location={'New York'} offset={-5} />
            <Clock location={'London'} offset={0} />
          </div>
        )}
      </>
    );
  }
}

export default App;
