const Sequelize = require('sequelize')
const db = new Sequelize('ecommerce', null, null, {
    local: 'localhost',
    dialect: 'postgres',
    logging: false
})

module.exports = db