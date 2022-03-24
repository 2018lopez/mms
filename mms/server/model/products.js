const db = require('../config/db')


const products = {

    get:{

        async all(){
            let query = 'select * from products'
            return await db(query,0, async data => data.filter(item=>item.id))
        },
        async byId(id){

            let query = 'select * from products where id = ?'
            return await db ( query,[id], async data => data.filter(item=>item.id)[0])
        }

    }, 

    async create(title, price){
        
        
        let query = 'INSERT INTO products(title, price) values(?,?);  '
        return await db(query, [title, price], data=>data)
        

    },

    async update($product){

        let query = 'Update products set title = ?, price = ? where id = ?;'
        await db(query,[$product.title, $product.price, $product.id], data=>data)
    },

    async delete(id){ 
        let query = 'Delete from products where id = ?;'
        await db(query, [id], data=>data)
    }

}


module.exports = products