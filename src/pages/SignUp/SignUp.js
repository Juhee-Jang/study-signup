import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      warningEmail: false,
      warningPw: false,
      warningCheckPw: false,
      warningName: false,
      warningYear: false,
      warningMonth: false,
      warningdate: false,
      emailValue: '',
      pwValue: '',
      checkPwValue: '',
      nameValue: '',
      yearValue: '',
      monthValue: '월',
      dateValue: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      this.handleWarning
    );
  };

  handleWarning = () => {
    const {
      emailValue,
      pwValue,
      nameValue,
      checkPwValue,
      yearValue,
      monthValue,
      dateValue,
    } = this.state;

    // let num = pwValue.search(/[0-9]/g);
    // let eng = pwValue.search(/[a-z]/gi);
    // let spe = pwValue.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    // let blank = pwValue.search(/\s/) != -1;
    const isPwValue = pwValue.length >= 10 && pwValue.length < 20;
    // (num < 0 && eng < 0) || (eng < 0 && spe < 0);

    this.setState({
      warningEmail: emailValue ? true : false,
      warningName: nameValue ? true : false,
      warningPw: isPwValue ? true : false,
      warningCheckPw: checkPwValue && checkPwValue === pwValue ? true : false,
      warningYear: yearValue ? true : false,
      warningMonth: monthValue !== '월' ? true : false,
      warningdate: dateValue ? true : false,
    });
  };

  handleSubmit = () => {
    const {
      warningEmail,
      warningName,
      warningPw,
      warningCheckPw,
      warningYear,
      warningMonth,
      warningdate,
    } = this.state;

    if (
      warningEmail &&
      warningName &&
      warningPw &&
      warningCheckPw &&
      warningYear &&
      warningMonth &&
      warningdate
    ) {
      console.log('submit 버튼');
    } else {
      console.log('?????');
      console.log(
        warningEmail,
        warningName,
        warningPw,
        warningCheckPw,
        warningYear,
        warningMonth,
        warningdate
      );
    }
  };

  render() {
    const {
      warningEmail,
      warningPw,
      warningCheckPw,
      warningName,
      warningYear,
      warningMonth,
      warningdate,
      emailValue,
      pwValue,
      nameValue,
      checkPwValue,
      yearValue,
      monthValue,
      dateValue,
    } = this.state;

    let pwErrorMsg;
    // let num = pwValue.search(/[0-9]/g);
    // let eng = pwValue.search(/[a-z]/gi);
    // let spe = pwValue.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    // let blank = pwValue.search(/\s/) != -1;
    // if (blank) {
    //   pwErrorMsg = '비밀번호는 공백없이 입력해주세요.';
    // }
    if (pwValue.length < 10 || pwValue.length > 20) {
      pwErrorMsg = '10자리 ~ 20자리 이내로 입력해주세요.';
    }
    // if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
    //   pwErrorMsg = '영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.';
    // }

    let pwCheckErrorMsg;
    if (!checkPwValue) {
      pwCheckErrorMsg = '필수 정보입니다.';
    } else if (pwValue !== checkPwValue) {
      pwCheckErrorMsg = '비밀번호가 맞지 않습니다.';
    }

    let dateErrorMsg;
    if (yearValue.length !== 4) {
      dateErrorMsg = '태어난 년도 4자리를 정확하게 입력하세요.';
    } else if (monthValue === '월') {
      dateErrorMsg = '태어난 월을 선택하세요.';
    } else if (dateValue.length !== 2) {
      dateErrorMsg = '태어난 일(날짜) 2자리를 정확하게 입력하세요.';
    }

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
              <input
                type="text"
                className="inputUserId"
                name="emailValue"
                value={emailValue}
                onChange={this.handleChange}
              />
              <span className="wecodeEmail">@wecode.com</span>
            </div>
            <div
              className={
                warningEmail ? 'warningMessage hidden' : 'warningMessage'
              }
            >
              필수 정보입니다.
            </div>
          </div>
          <div className="userPw">
            <h3>비밀번호</h3>
            <div className="wrapInputPw">
              <input
                type="password"
                className="inputUserPw"
                name="pwValue"
                value={pwValue}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={warningPw ? 'warningMessage hidden' : 'warningMessage'}
            >
              {pwErrorMsg}
            </div>
            <h3>비밀번호 재확인</h3>
            <div className="wrapCheckPw">
              <input
                type="password"
                className="checkPw"
                name="checkPwValue"
                value={checkPwValue}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={
                warningCheckPw ? 'warningMessage hidden' : 'warningMessage'
              }
            >
              {pwCheckErrorMsg}
            </div>
          </div>
          <div className="name">
            <h3>이름</h3>
            <div className="wrapInputName">
              <input
                type="text"
                className="inputUserName"
                name="nameValue"
                value={nameValue}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={
                warningName ? 'warningMessage hidden' : 'warningMessage'
              }
            >
              필수 정보입니다.
            </div>
          </div>
          <div className="dateOfBirth">
            <h3>생년월일</h3>
            <div className="wrapDateOfBirth">
              <input
                type="text"
                className="year"
                placeholder="년(4자)"
                name="yearValue"
                value={yearValue}
                onChange={this.handleChange}
              />
              <div className="wrapMonth">
                <select
                  id="month"
                  className="month"
                  name="monthValue"
                  value={monthValue}
                  onChange={this.handleChange}
                >
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
              <input
                type="text"
                className="date"
                placeholder="일"
                name="dateValue"
                value={dateValue}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={
                warningYear && warningMonth && warningdate
                  ? 'warningMessage hidden'
                  : 'warningMessage'
              }
            >
              {dateErrorMsg}
            </div>
          </div>
          <input
            type="submit"
            className="SignUpBtn"
            value="가입하기"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default SignUp;
