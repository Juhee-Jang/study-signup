import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <header>
          <select name="languages" id="languages">
            <option value="korean">한국어</option>
            <option value="english">English</option>
            <option value="chinese">中文</option>
          </select>
          <div className="LoginTextBox">
            <img className="LoginText" src="images/Login.png" />
          </div>
        </header>
        <div className="contaienr">
          <input
            type="text"
            className="inputId"
            name="idValue"
            placeholder="아이디"
          />
          <div className="warningInputId hidden">아이디를 입력해주세요.</div>
          <input
            type="text"
            className="inputPw"
            name="pwValue"
            placeholder="비밀번호"
          />
          <div className="warningInputPw hidden">비밀번호를 입력해주세요.</div>
          <input type="submit" className="loginBtn" value="로그인" />
          <div className="findInfo">
            <p>아이디 찾기</p>
            <span>|</span>
            <p>비밀번호 찾기</p>
            <span>|</span>
            <Link to="/SignUp">
              <p>회원가입</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
