import {useState, useEffect} from 'react'
import axios  from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateProduct = () =>{

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const editProduct = async (e) =>{

        e.preventDefault()
        await axios.put(`http://localhost:3004/product/${id}`,{
            title : title,
            price: price
        })
    
        navigate('/')
    
    }

   useEffect(() => {
        getProductById()

    }, [])

    const getProductById = async () =>{

        const res = await axios.get(`http://localhost:3004/products/${id}`)
        
        setTitle(res.data.title)
        setPrice(res.data.price)
    }

    return (
        <div>
            <form onSubmit={ editProduct }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )

}

export default UpdateProduct
