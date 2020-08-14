//여기 파일은 store를 정의 하는파일이고  진짜 store은 최상단인 index에 있다.

// 1번 액션 이름 생성
const INCREMENT = 'INCREAMENT';

//내 state안 날릴 때 비워두지않고 초기화
//여기 모든 상태값을 들고 있으면 된다.
const initState = {
  number: 0,
};

//action만드는 규칙!! - 확장성을 생각해서 오브젝트로 action만들어요. action={type:"INCREAMENT"}

//2번 리듀서 (state, action)
const reducer = (state = initState, action) => {
  if (action.type === INCREMENT) {
    console.log('INCREAMENT 실행됨');
    return { number: state.number + 1 };
    //함수 리듀서가 state의 number값을 바꿔줄거임. 호출한 나에게 돌려주는게 아님.
  } else {
    return state;
  }
};

//return state 가 setState같은 거임.

export default reducer;
