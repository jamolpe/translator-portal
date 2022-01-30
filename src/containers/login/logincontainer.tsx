import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/auth';
import Login from '../../components/login/login';
import { AuthState } from '../../reducers/auth/auth-reducer';
import { UserData } from '../../services/auth';
import './logincontainer.scss';

interface LoginContainerProps {
  auth: AuthState;
  loginUser: (userData: UserData) => Promise<void>;
}

class LoginContainer extends Component<LoginContainerProps, {}> {
  render() {
    const { loginUser } = this.props;
    return (
      <div className="login-container">
        <Login loginUser={loginUser} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }: { auth: AuthState }) => ({
  auth
});

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  loginUser: (userData: UserData) => dispatch(loginAction(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
