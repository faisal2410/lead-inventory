const Category = require('../models/category')


exports.getCategoriesService = async () => {
    const categories = await Category.find({});
    return categories;
}

exports.createCategoryService = async (data) => {
    const category = await Category.create(data);
    return category;
}
