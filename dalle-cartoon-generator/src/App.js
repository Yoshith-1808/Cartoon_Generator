import React from 'react';
import Header from './components/Header';
import CartoonGenerator from './components/CartoonGenerator';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <CartoonGenerator />
        </div>
    );
}

export default App;