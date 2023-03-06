

class ProductManager{
    constructor(){
        this.products = productsArray
    }
    addProduct(newProduct){

        const producto = this.products.find(prod => prod.code === newProduct.code)
        if(producto){
            return 'Existe el producto con este codigo'
        }


        if (this.products.length === 0) {
            this.products.push( {id: 1, ...newProduct } )
            
        } else { 
            this.products.push( {id: this.products[this.product.length-1].id + 1  , ...newProduct } )
            
        }
    }

    getProducts(){
        return this.products
    }
    
    getProductById(id){
        const product = this.products.find(prod => prod.id === id)
        if (!product) {
            return 'No existe'
        }

        return product
    }
}



const productos = new ProductManager()


productos.addProducto({
    title: 'Gorra',
    description: 'Esto es una gorra',
    price: 2300,
    code: '1',
    stock: 100
})
console.log('todos',productos.getProducts())
console.log('id: ',productos.getProductById())
