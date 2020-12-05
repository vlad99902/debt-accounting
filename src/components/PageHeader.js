import React from 'react';
import { observer } from 'mobx-react-lite'
import NumberFormat from 'react-number-format';

import '../styles/PageHeader.sass';

import debt from '../store/Debt';
import { NavLink } from 'react-router-dom';
import { Header } from './Header';


export const PageHeader = observer(({ mb = '0px', }) => {

  //const userName = debt.email
  // debt.setPathName(window.location.pathname)
  // console.log('In header pn = ', debt.pathName);
  const stl = ['']
  debt.allTotal < 0
    ? stl.push('exc-red')
    : stl.push('exc-green')

  return (
    <div className="wrapper" style={{ marginBottom: mb }}>
      <div className="container">
        <nav className="page-header">
          <div className="page-header__logo">
            <NavLink to="/home">
              <Header fw="600">DEBT A₽₽</Header>
            </NavLink>
          </div>
          <div className="page-header__navigation">
            <div className="page-header__nav-el page-header__balance">
              <NavLink to="/home" activeClassName='active'>

                Balance: <span className={stl.join('')}><NumberFormat value={debt.allTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>

              </NavLink>
            </div>
            <div className="page-header__nav-el page-header__user">
              <NavLink to="/settings" activeClassName='active'>kirill@yandex.com</NavLink>
            </div>
            <div className="page-header__nav-el page-header__logout">
              <a href="/home" onClick={() => debt.logout()}>
                log out
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
})




