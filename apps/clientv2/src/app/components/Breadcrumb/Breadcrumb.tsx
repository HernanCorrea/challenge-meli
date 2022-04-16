import React from 'react';
import { NavLink } from 'react-router-dom';
import { CategoryI } from '../../interfaces';
import './Breadcrumb.scss';

interface Props {
  categories: CategoryI[];
};

export default function Breadcrumb({ categories }: Props) {
  return (
    <ul aria-label={'Listado de categorias'}>
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
