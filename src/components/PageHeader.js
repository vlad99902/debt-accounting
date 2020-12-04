import React from 'react'

import '../styles/PageHeader.sass'

import { Total } from '../components/Total'

import debt from '../store/Debt'
import { NavLink } from 'react-router-dom'
import { Header } from './Header'

export const PageHeader = ({
  children,
  userName = 'kekw'
}) => {

  return (
    <div className="wrapper">
      <div className="container">
        <nav className="page-header">
          <div className="page-header__logo">
            <NavLink to="/home">
              <Header fw="600">DEBT ACC</Header>
            </NavLink>
          </div>
          <div className="page-header__navigation">
            <div className="page-header__nav-el page-header__balance">
              <Total total={debt.allTotal} fz="18px" fw="600">Balance: </Total>
            </div>
            <div className="page-header__nav-el page-header__user">
              {userName}
            </div>
            <div className="page-header__nav-el page-header__logout">
              <a href="/home" onClick={() => debt.logout()} >log out</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

//
// {/* <div className="page-header__nav-el page-header__settings">
//               <NavLink to="/settings">settings</NavLink>
//             </div>
//              */}