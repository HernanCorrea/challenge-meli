import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchField.scss';

export default function SearchField() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    const {value} = target.search;
    navigate(`/items?search=${value}`);
  }

  return (
    <form
      className="search_navbar"
      onSubmit={handleSubmit}
      aria-label="Buscador de items de la tienda"
    >
      <input
        className="search__input"
        type="text"
        name="search"
        aria-label="Escribe aquí el item que buscas"
        role="searchbox"
        placeholder="Nunca dejes de buscar"
        required
      />
      <button
        type="submit"
        className="search__button"
        aria-label="Buscar items de la tienda"
      >
        <svg
          aria-hidden="true"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
        </svg>
      </button>
    </form>
  );
}
