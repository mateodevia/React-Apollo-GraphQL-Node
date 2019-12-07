import React, { useState, useEffect } from "react";

function Autores() {
  let [autores, setAutores] = useState([]);

  useEffect(() => {
    fetch("autores")
      .then(res => res.json())
      .then(data => {
        let getLibros = async () => {
          for (let i in data) {
            let consulta = async () => {
              let libros = await fetch("libros/")
                .then(res => res.json())
                .then(doc => {
                  return doc;
                });

              let librosDelAutor = libros.filter(
                libro => libro.autorId === data[i]._id
              );
              data[i].libros = librosDelAutor;
            };
            await consulta();
          }
          setAutores(data);
        };
        getLibros();
      });
  }, []);
  return (
    <div>
      <h1>Autores</h1>
      <div className="row justify-content-center">
        {autores.map(autor => (
          <div className="card m-2" style={{ width: "18rem" }}>
            <img src={autor.foto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{autor.nombre}</h5>
              <h6>Libros:</h6>
              {autor.libros.map(libro => (
                <p>{libro.nombre}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Autores;
