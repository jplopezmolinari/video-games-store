const S = require('sequelize')
const sequelize = require('../db')

class Categories extends S.Model {}
Categories.init({
    name: {
        type: S.STRING
    }
}, { sequelize, modelName: 'categories' })

module.exports = Categories