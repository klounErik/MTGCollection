import React, { Component } from 'react'
import logo from '../../Images/mtglogo.png'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="Logo"> 
            <img height={75} alt="mtglogo" src={logo}/>
        </div>
      <div className="Nav-Links">
        <div>
            <article>
                <span>
                    <a href="/cards">Cards</a>
                </span>
            </article>
        </div>
        <div>
        <article>
            <span>
                <a href="/collection">My Collection</a>
            </span>
          </article>
        </div>
      </div>
      </div>
    )
  }
}
