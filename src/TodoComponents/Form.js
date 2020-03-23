import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
      <div className="form">
          <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
          <div className="create-button" onClick={onCreate}>
              추가
          </div>
      </div>
    );
}
/* 

이 컴포넌트는 총 4가지의 props 를 받아옵니다.

value: 인풋의 내용
onCreate: 버튼이 클릭 될 때 실행 될 함수
onChange: 인풋 내용이 변경 될 때 실행되는 함수
onKeyPress: 인풋에서 키를 입력 할 때 실행되는 함수. 이 함수는 나중에 Enter 가 눌렸을 때 onCreate 를 한 것과 동일한 작업을 하기 위해서 사용합니다.

*/
export default Form;