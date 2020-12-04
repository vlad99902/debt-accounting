import React from 'react'

import '../styles/PageHeader.sass'

import { Total } from '../components/Total'

import debt from '../store/Debt'

export const PageHeader = ({
  children,
  userName = 'kekw'
}) => {

  return (
    <div className="wrapper">
      <div className="container">
        <div className="page-header">
          <div className="page-header__logo">
            debt-accounting
          </div>
          <div className="page-header__navigation">
            <div className="page-header__balance">
              <Total total={debt.allTotal}></Total>
            </div>
            <div className="page-header__user">
              {userName}
            </div>
            <div className="page-header__settings">
              settings
            </div>
            <div className="page-header__logout">
              log out
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}