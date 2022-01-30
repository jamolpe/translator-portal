import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import TopBar from '../../components/topbar/topbar';
import { AuthState } from '../../reducers/auth/auth-reducer';
import Logincontainer from '../login/logincontainer';
import './maincontainer.scss';

interface MainContainerProps {
  auth: AuthState;
}
class MainContainer extends Component<MainContainerProps, {}> {
  render() {
    return (
      <div>
        <TopBar logged={this.props.auth?.logged} />
        <div className="body-content body-container">
          <Routes>
            <Route path="/" element={<div> main component</div>} />
            {!this.props.auth.logged && (
              <Route path="/login" element={<Logincontainer />} />
            )}
            {this.props.auth.logged && (
              <Route
                path="/welcome"
                element={<div>welcome {this.props.auth.user}</div>}
              />
            )}
            <Route path="*" element={<div>nothing to see here</div>} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }: { auth: AuthState }) => ({
  auth
});

export default connect(mapStateToProps)(MainContainer);
