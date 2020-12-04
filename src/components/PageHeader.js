import React from 'react'

import '../styles/PageHeader.sass'

import { Total } from '../components/Total'

import debt from '../store/Debt'
import { NavLink } from 'react-router-dom'

export const PageHeader = ({
  children,
  userName = 'kekw'
}) => {

  return (
    <div className="wrapper">
      <div className="container">
        <nav className="page-header">
          <div className="page-header__logo">
            <NavLink to="/home">debt-accounting</NavLink>
          </div>
          <div className="page-header__navigation">
            <div className="page-header__balance">
              <Total total={debt.allTotal}></Total>
            </div>
            <div className="page-header__user">
              {userName}
            </div>
            <div className="page-header__settings">
              <NavLink to="/settings">settings</NavLink>
            </div>
            <div className="page-header__logout">
              log out
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}