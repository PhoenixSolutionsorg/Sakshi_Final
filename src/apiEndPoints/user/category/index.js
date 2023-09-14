const Category = {
    getAllCategories : {
        url : '/get-category',
        method : 'GET'
    },
    createCategory : {
        url : '/create-category',
        method : 'POST'
    },
    bulkCreateCategories : {
        url : "bulk-create-category",
        method : "POST"
    },
    updateCategory : {
        url : "update-category",
        method : "POST"
    },
    deleteCategory : {
        url : "delete-category",
        method : "POST"
    }
}

export default Category;