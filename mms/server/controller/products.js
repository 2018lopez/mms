const Product = require('../model/products')

module.exports = {

    get:{

        async products (req, res){
            let products = await Product.get.all()

            res.send(products)
        },

        async productById(req, res){

            let product = await Product.get.byId(req.params.id)
            res.send(product)
        }
    },

    post:{

        

        async productCreate(req, res){

            

            try{

                
                await Product.create(req.body.title, req.body.price)
                res.json({'status':'ok', message:'Product created!!'})
            
            }catch(e){
                res.json({'Status':'error', message: 'An Error has occur while creating product'})
                
            }
        }
    },

    put:{

        async updateProduct(req, res){

            let data = {id: req.params.id, title: req.body.title, price: req.body.price}

            try{

                await Product.update(data)
                res.json({'status':'ok', message:'Product updated!!'})

            }catch(e){

                res.json({'Status':'error', message: 'An Error has occur while updating product'})

            }

        }

    },

    delete:{

        async productDelete(req, res){

            try{
                
                await Product.delete(req.params.id)
                res.json({'status':'ok', message:'Product Was Deleted'});


            }catch(e){

                res.json({'Status':'error', message: 'An Error has occur while deleting product'})

            }
        }
    }
}