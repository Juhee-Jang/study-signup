import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <header>
          <div className="SignUpTextBox">
            <img className="SignUpText" src="images/SignUp.png" />
          </div>
        </header>
        <div className="container">
          <div className="userId">
            <h3>아이디</h3>
            <div className="wrapInputId">
              <input type="text" className="inputUserId"></input>
              <span className="wecodeEmail">@wecode.com</span>
            </div>
          </div>
          <div className="userPw">
            <h3>비밀번호</h3>
            <div className="wrapInputPw">
              <input type="text" className="inputUserPw"></input>
            </div>
            <h3>비밀번호 재확인</h3>
            <div className="wrapChekcPw">
              <input type="text" className="ChekcPw"></input>
            </div>
          </div>
          <div className="name">
            <h3>이름</h3>
            <div className="wrapInputName">
              <input type="text" className="inputUserName"></input>
            </div>
          </div>
          <div className="dateOfBirth">
            <h3>생년월일</h3>
            <div className="wrapDateOfBirth">
              <input type="text" className="year" placeholder="년(4자)"></input>
              <div className="wrapMonth">
                <select name="month" id="month" className="month">
                  <option value="월">월</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <input type="text" className="date" placeholder="일"></input>
            </div>
          </div>
          <input type="submit" className="SignUpBtn" value="가입하기"></input>
        </div>
      </div>
    );
  }
}

export default SignUp;
