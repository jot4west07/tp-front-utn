import React, { useState, useEffect } from 'react';
import './ApiData.css';

const ApiData = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Para controlar si hay más personajes
  const apiUrl = 'https://starwars-databank-server.vercel.app/api/v1/characters';
  const limit = 10;

  // Función para cargar personajes desde la API
  const fetchCharacters = (page) => {
    setLoading(true); // Inicia el estado de carga
    fetch(`${apiUrl}?page=${page}&limit=${limit}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        if (data.data && Array.isArray(data.data)) {
          setCharacters(prevCharacters => [...prevCharacters, ...data.data]);

          // Verificar si hay más personajes para cargar
          if (data.info.page >= data.info.total_pages) {
            setHasMore(false); // Si ya no hay más páginas, deshabilitamos el botón
          }
        }
        setLoading(false); // Finaliza el estado de carga
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
        setLoading(false); // En caso de error, finalizar el estado de carga
      });
  };

  // Cargar personajes cuando se monte el componente o cambie la página
  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  // Incrementar la página actual cuando el usuario haga clic en "Cargar más"
  const handleLoadMore = () => {
    if (hasMore) {
      setCurrentPage(prevPage => prevPage + 1); // Incrementa la página actual
    }
  };

  return (
    <div className="api-data-container">
      <h1>Lista de Personajes de Star Wars</h1>
      <table id="characters-table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td>
                <img
                  src={character.image || 'https://via.placeholder.com/80'}
                  alt={character.name}
                />
              </td>
              <td>{character.name}</td>
              <td>{character.description || 'Sin descripción'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {loading ? (
        <p className="loading-text">Cargando...</p>
      ) : (
        hasMore && (
          <button id="load-more" onClick={handleLoadMore}>
            Cargar más
          </button>
        )
      )}
    </div>
  );
};

export default ApiData;
