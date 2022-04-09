import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const createProduct = async (e) =>{
        e.preventDefault()

        await axios.post('http://localhost:3004/api/products/add',{
            title: title,
            price: price
        })
       navigate('/')
    }

    return (
        <div>
        <form onSubmit={ createProduct }>
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
                <button className="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
    )


}


export default AddProduct