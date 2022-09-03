import React from 'react';
import Clock from './Clock';

const App = () => (
  <>
    <Clock location={'Kyiv'} offset={2} />
    <Clock location={'New York'} offset={-5} />
    <Clock location={'London'} offset={0} />
  </>
);
export default App;
