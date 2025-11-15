import React from 'react';
import Header from '../components/Header';

function Home () {
    const userToken = null;
    const carritoTotal = 25000;

    return (
        <div>
            <Navbar Token={userToken} Total={carritoTotal} />

            <Header />

        </div>
    );
}

export default Home;