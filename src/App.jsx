import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPizza from './components/CardPizza'
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    
      <Navbar titulo="Mamma Mia"> </Navbar>
      <Header />

     <div className='divCard'>

     <CardPizza
      imagen = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
      nombre = "Napolitana"
      ingredientes={["Mozzarella", "Tomates", "Jamón", "Orégano"]}
      precio={5950}
      >
      </CardPizza>

      <CardPizza
      imagen = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
      nombre = "Española"
      ingredientes={["Mozzarella", "Gorgonzola", "Parmesano", "provolone"]}
      precio={6950}
      >
      </CardPizza>

      <CardPizza
      imagen = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
      nombre = "Pepperoni"
      ingredientes={["Mozzarella", "Pepperoni", "Orégano"]}
      precio={6950}>
      </CardPizza>

     </div>

      <nav></nav>
      <Footer />
    </>
  )
}

export default App
