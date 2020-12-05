import React from 'react';
import { observer } from 'mobx-react-lite';
import NumberFormat from 'react-number-format';

import '../styles/PageHeader.sass';

import debt from '../store/Debt';
import { NavLink } from 'react-router-dom';
import { Header } from './Header';

export const PageHeader = observer(({ mb = '0px' }) => {
  //const userName = debt.email
  // debt.setPathName(window.location.pathname)
  // console.log('In header pn = ', debt.pathName);
  const stl = [''];
  debt.allTotal < 0 ? stl.push('exc-red') : stl.push('exc-green');

  let userName = debt.email.split('@').shift()

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
              <NavLink to="/home" activeClassName="active">
                Balance:{' '}
                <span className={stl.join('')}>
                  <NumberFormat
                    value={debt.allTotal}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </span>
              </NavLink>
            </div>
            <div className="page-header__nav-el page-header__user">
              <NavLink to="/settings" activeClassName="active">
                {userName}
              </NavLink>
            </div>
            <div className="page-header__nav-el page-header__logout">
              <a href="/home" onClick={() => debt.logout()} className="page-header__logout-inner">
                <svg className="page-header__logout-icon">
                  <g>
                    <path d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z">
                    </path>
                    <path d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z">
                    </path>
                  </g>
                </svg>
                <div className="page-header__logout-text">log out</div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div >
  );
});
