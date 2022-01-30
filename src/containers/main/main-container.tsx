import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBar from '../../components/topbar/topbar';
import Logincontainer from '../login/logincontainer';
import './maincontainer.scss';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="body-content body-container">
          <Routes>
            <Route path="/" element={<div> main component</div>} />
            <Route path="/login" element={<Logincontainer />} />
            <Route path="*" element={<div>nothing to see here</div>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default MainContainer;
