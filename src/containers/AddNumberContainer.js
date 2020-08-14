import React from 'react';
import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

//지금은 null인데
const actionProps = (dispatch) => {
  return {
    onAdd: () => {
      dispatch({ type: 'INCREAMENT' });
    },
  };
};

//1번 파라메터가 state
//2번 파라미터가 action넘기는 곳 임 -> onAdd함수 던져준거임 //dispatch 순간 dispatch가 리듀서가 된다.
export default connect(null, actionProps)(AddNumber); //connect하는 거는 구독하는거다.
//AddNumber를 리턴해줌
//AddNumber한테 2개의 props를 넘길 수 있다.
