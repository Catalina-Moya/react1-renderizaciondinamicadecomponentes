import React from 'react';

function CardPizza({ name, price, ingredients, img }) {
    return (
        <div className="card" style={{ width: '23rem' }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong className='ingredientes'>Ingredientes:</strong>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
                <div className="btn-price">
                    <span className="h5">Precio: ${price}</span>
                    <div className="mt-2">
                        <a href="#" className="btn btn-secondary me-2">👀 Ver Más</a>
                        <a href="#" className="btn btn-primary">🛒 Añadir</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPizza;
