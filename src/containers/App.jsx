import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories.jsx';
import Carrousel from '../components/Carrousel/Carrousel.jsx';
import Carrousel_Item from '../components/Carrousel/Carrousel_Item.jsx';
import Footer from '../components/Footer.jsx'
import '../assets/styles/App.scss';

const App = () => (
    <div className="app">
        <Header/>
        <Search/>
        <Categories title="Mi lista">
            <Carrousel>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
            </Carrousel>
        </Categories>
        <Categories title="Tendecias">
            <Carrousel>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
            </Carrousel>
        </Categories>
        <Categories title="Originales de Platzi">
            <Carrousel>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
                <Carrousel_Item></Carrousel_Item>
            </Carrousel>
        </Categories>
        <Footer></Footer>
    </div>
);

export default  App;