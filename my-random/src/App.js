
import './App.css';
import {Fragment, useEffect, useState} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Main from './components/layout/main';
import Land from './components/landing/landing';
import { useDispatch, useSelector } from 'react-redux';
import { randomAction } from './store';
import Dash from './components/board/dash';
import Profile from './components/profile/profile';

import { fetchList } from './store/fetch-action';
function App() {
  // fetching from action creator
 const dispatch =  useDispatch()
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);


  return (
    <Fragment>
                 <Main>
                            <Route path='/'>
                                <Redirect to = '/welcome' />
                            </Route>
                           <Route path = '/welcome' exact> 
                              <Land/>
                           </Route>
                          <Route path='/Dash' exact>
                             <Dash/>
                           </Route>
                           <Route path={'/Dash/Profile'} exact>
                                  <Profile/>
                           </Route>
             
              </Main>
    </Fragment>
 
  );
}

export default App;
