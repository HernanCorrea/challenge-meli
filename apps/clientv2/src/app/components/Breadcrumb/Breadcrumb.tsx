import React from 'react';
import { NavLink } from 'react-router-dom';
import { CategoriesI } from '../../interfaces';
import './Breadcrumb.scss';

type props = {
  categories: CategoriesI;
};

export default function Breadcrumb({ categories }: props) {
  return (
    <ul aria-label={'Listado de categorias'} role={'navigation'}>
      {categories &&
        categories.map((category: string, index: number) => (
          <li key={index}>
            <NavLink to={`/items?search=${category}`}>{category}</NavLink>
            {categories.length !== index + 1 && (
              <div aria-hidden="true" className="divider">
                {'>'}
              </div>
            )}
          </li>
        ))}
    </ul>
  );
}
