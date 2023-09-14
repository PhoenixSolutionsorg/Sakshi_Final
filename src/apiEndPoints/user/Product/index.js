const Product = {
    getProducts : {
        url : '/all-products',
        method : 'GET'
    },
    viewProduct : {
        url : '/view-product',
        method : 'POST'
    },
    createProduct : {
        url : '/create-product',
        method : 'POST'
    },
    updateProduct : {
        url : '/update-product',
        method : 'POST'
    }
}

export default Product