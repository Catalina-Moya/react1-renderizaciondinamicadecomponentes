import React from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import pizzaCart from '../components/pizzas';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="card-container">
                {pizzaCart.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        name={pizza.name}
                        price={pizza.price}
                        img={pizza.img}
                        ingredients={pizza.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
