import React from 'react';
import '../assets/styles/components/Search.scss';

const main__title = "¿Qué quieres ver hoy?";
const placeholder = "Buscar...";

const Search = () => (
  <section className="main">
  <h2 className="main__title">{main__title}</h2>
  <input type="search" className="input" placeholder={placeholder}/>
</section>
);

export default Search;