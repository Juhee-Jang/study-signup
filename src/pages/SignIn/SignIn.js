import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      warningId: false,
      warningPw: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const { idValue, pwValue } = this.state;
    this.setState({
      warningId: idValue ? false : true,
      warningPw: pwValue ? false : true,
    });
  };

  render() {
    const { idValue, pwValue, warningId, warningPw } = this.state;
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
        <div className="container">
          <input
            type="text"
            className="inputId"
            name="idValue"
            value={idValue}
            placeholder="아이디"
            onChange={this.handleChange}
          />
          <div
            className={warningId ? 'warningInputId' : 'warningInputId hidden'}
          >
            아이디를 입력해주세요.
          </div>
          <input
            type="text"
            className="inputPw"
            name="pwValue"
            value={pwValue}
            placeholder="비밀번호"
            onChange={this.handleChange}
          />
          <div
            className={warningPw ? 'warningInputPw' : 'warningInputPw hidden'}
          >
            비밀번호를 입력해주세요.
          </div>
          <input
            type="submit"
            className="loginBtn"
            value="로그인"
            onClick={this.handleSubmit}
          />
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
