import React from 'react';
import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

const stateProps = (state) => {
  //아직은 0
  return {
    number: state.number,
  };
};

export default connect(stateProps, null)(DisplayNumber);
//DisplayNumber에 넘기는 방법.
