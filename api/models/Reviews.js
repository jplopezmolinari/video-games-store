const S = require('sequelize')
const sequelize = require('../db')

class Reviews extends S.Model{}
Reviews.init({
    videogameName: {
        type: S.STRING
    },
    text: {
        type: S.STRING
    },
    rate: {
        type: S.INTEGER
    }
}, { sequelize, modelName: 'reviews' })

module.exports = Reviews