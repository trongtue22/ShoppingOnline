
require('../utils/MongooseUtil');
const Models = require('./models');

const CategoryDAO = {
  // Lấy hết
  async selectAll() {
    const query = {};
    const categories = await Models.Category.find(query).exec();
    return categories;
  },

  // Category insert
  async insert(category) {
    const mongoose = require('mongoose');
    category._id = new mongoose.Types.ObjectId();
    const result = await Models.Category.create(category);
    return result;
  },

  // Category update
  async update(category) {
    const newvalues = { name: category.name };
    const result = await Models.Category.findByIdAndUpdate(category._id, newvalues, { new: true });
    return result;
  },

  // Category delete 
  async delete(categoryId) {
    const result = await Models.Category.findByIdAndRemove(categoryId);
    return result;
  },
  
  // Select theo ID
  async selectByID(_id) {
    const category = await Models.Category.findById(_id).exec();
    return category;
  }
};

module.exports = CategoryDAO;
