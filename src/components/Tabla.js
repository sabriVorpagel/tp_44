import React from "react";



const Tabla = ({titulo,duración, rating, género, premios}) => {

    return (
        <div className="card-body">
            <div className="row">
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Duración</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Género</th>
                            <th scope="col">Premios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>{titulo}</td>
                            <td>{duración}</td>
                            <td>{rating}</td>
                            <td>{género}</td>
                            <td>{premios}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export { Tabla };