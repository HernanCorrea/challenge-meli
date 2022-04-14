import React from 'react'
import './Header.scss';
import logo from '../../../assets/images/logo_ml.png';
import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode
};

export default function Header({children}: Props) {

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="">
            <img src={logo} alt="Meli Logo" />
          </Link>
        </div>
        {children}
      </div>
    </header>
  );
}
