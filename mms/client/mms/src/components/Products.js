import { useState, useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'


const Product = () =>{

    const [products, setProduct] = useState([])

    useEffect(() =>{
        getProducts()
    }, [])

    const getProducts = async () => {
        const res = await axios.get('http://localhost:3004/products')
        
        setProduct(res.data)
    }

    const deleteProduct = async (id) => {

        await axios.delete(`http://localhost:3004/products/${id}`)
        getProducts()
    }

    return(
        <div>
            <Link to="/add" className="btn btn-success">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>
                                <Link to={`/edit/${product.id}`}  className="btn btn-primary">Edit</Link>
                                <button onClick={ () => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )

}

export default Product