import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './components/Products'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          
            
        <Routes>
      <Route path="/" element={<Product/>} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
           
          
        
        </div>
      </div>
    </div>
    </Router>
    </div>
  );
}

export default App;
