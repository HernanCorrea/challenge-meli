import React from 'react'
import './Header.scss';
import logo from '../../../assets/images/logo_ml.png';
import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode
};

export default function Header({children}: HeaderProps) {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Meli Logo" />
        </div>
        {children}
      </div>
    </header>
  );
}
