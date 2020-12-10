import React from 'react';
import { observer } from 'mobx-react-lite';
import NumberFormat from 'react-number-format';

import '../styles/PageHeader.sass';

import debt from '../store/Debt';
import { NavLink } from 'react-router-dom';
import { Header } from './Header';

export const PageHeader = observer(({ mb = '0px' }) => {
  const stl = [''];
  debt.allTotal < 0 ? stl.push('exc-red') : stl.push('exc-green');

  let userName = debt.email.split('@').shift();

  return (
    <div className="wrapper" style={{ marginBottom: mb }}>
      <div className="container cont-this">
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
              <NavLink
                to="/settings"
                activeClassName="active"
                className="page-header__user-inner"
              >
                <div className="page-header__user-name">{userName}</div>
                <svg className="page-header__user-icon">
                  <g>
                    <path d="M10 8a2 2 0 100 4 2 2 0 000-4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M9 2h2a2.01 2.01 0 001.235 1.855l.53.22a2.01 2.01 0 002.185-.439l1.414 1.414a2.01 2.01 0 00-.439 2.185l.22.53A2.01 2.01 0 0018 9v2a2.01 2.01 0 00-1.855 1.235l-.22.53a2.01 2.01 0 00.44 2.185l-1.415 1.414a2.01 2.01 0 00-2.184-.439l-.531.22A2.01 2.01 0 0011 18H9a2.01 2.01 0 00-1.235-1.854l-.53-.22a2.009 2.009 0 00-2.185.438L3.636 14.95a2.009 2.009 0 00.438-2.184l-.22-.531A2.01 2.01 0 002 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 00-.438-2.185L5.05 3.636a2.01 2.01 0 002.185.438l.53-.22A2.01 2.01 0 009 2zm-4 8l1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </NavLink>
            </div>
            <div className="page-header__nav-el page-header__logout">
              <a
                href="/home"
                onClick={() => debt.logout()}
                className="page-header__logout-inner"
              >
                <div className="page-header__logout-text">log out</div>
                <svg className="page-header__logout-icon">
                  <g>
                    <path
                      d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"
                      className="path1"
                    ></path>
                    <path
                      d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z"
                      className="path-arrow"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
});
