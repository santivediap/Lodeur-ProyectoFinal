import React from "react";

const Search = () => {
  return <section className="search-container">
    <h2>¡BUSCA TU PRODUCTO YA!</h2>

    <form className="search-form" action="#">

      <label>
        <span>Producto</span>
        <input type="text" name="product" id="product" />
      </label>

      <label>
        <span>Fabricante</span>
        <input type="text" name="provider" id="provider" />
      </label>

      <label>
        <span>Filtrar por</span>
        <select name="sorttype" id="sorttype">
          <option value="title">Titulo</option>
          <option value="price">Precio</option>
          <option value="relevance">Relevancia</option>
        </select>
      </label>

      <label>
        <span>Ordenar de</span>
        <select name="sort" id="sorttype">
          <option value="desc">Mayor a menor</option>
          <option value="asc">Menor a mayor</option>
        </select>
      </label>

      <button type="submit">BUSCAR</button>

    </form>
  </section>;
};

export default Search;
