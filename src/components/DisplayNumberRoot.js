import React from 'react';
import DisplayNumberContainer from '../containers/DisplayNumberContainer';

const DisplayNumberRoot = () => {
  //함수형이라서 this.안해도됨
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumberContainer />
    </div>
  );
};

export default DisplayNumberRoot;
