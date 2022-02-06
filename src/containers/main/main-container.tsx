import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import TopBar from '../../components/topbar/topbar';
import { UserData } from '../../services/auth';
import { useAppDispatch } from '../../store/hooks';
import { loginUser } from '../../store/reducers/auth/auth-actions';
import { authSelector } from '../../store/reducers/auth/auth-reducer';
import Logincontainer from '../login/logincontainer';
import ListAllProjects from '../projects/listall-container';
import './maincontainer.scss';

const MainContainer = () => {
  const { logged, user } = useSelector(authSelector);
  const dispatch = useAppDispatch();

  return (
    <>
      <TopBar logged={logged} />

      <div className="body-content body-container">
        <Routes>
          <Route path="/" element={<div> main component</div>} />
          {!logged && (
            <Route
              path="/login"
              element={
                <Logincontainer
                  loginUser={(userData: UserData) => {
                    dispatch(loginUser(userData));
                  }}
                />
              }
            />
          )}
          {logged && (
            <>
              <Route path="/welcome" element={<div>welcome {user}</div>} />
              <Route path="/projects" element={<ListAllProjects />} />
            </>
          )}
          <Route path="*" element={<div>nothing to see here</div>} />
        </Routes>
      </div>
    </>
  );
};

export default MainContainer;
