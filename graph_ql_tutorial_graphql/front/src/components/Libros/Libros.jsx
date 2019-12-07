import React, { useState, useEffect } from "react";

function Libros() {
  let [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch("libros")
      .then(res => res.json())
      .then(data => {
        let getAutores = async () => {
          for (let i in data) {
            let consulta = async () => {
              let autor = await fetch("autor/" + data[i].autorId)
                .then(res => res.json())
                .then(doc => {
                  return doc;
                });
              data[i].autor = autor.nombre;
            };
            await consulta();
          }
          setLibros(data);
        };
        getAutores();
      });
  }, []);

  return (
    <div>
      <h1>Libros</h1>
      <div className="row justify-content-center">
        {libros.map(libro => (
          <div className="card m-2" style={{ width: "18rem" }}>
            <img src={libro.foto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{libro.nombre}</h5>
              <p>{libro.autor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Libros;
