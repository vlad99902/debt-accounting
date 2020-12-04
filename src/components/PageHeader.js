import React from 'react'

import '../styles/PageHeader.sass'

export const PageHeader = ({
  children,
  userName = 'kekw'
}) => {

  return (
    <div className="page-header">
      <div className="container">
        <div className="inner">
          <div className="page-header__logo">
            debt-accounting
          </div>
          <div className="page-header__user">
            {userName}
          </div>
          <div className="page-header__settings">
            settings
          </div>
          <div className="">
          </div>
        </div>
      </div>
    </div>
  )
}