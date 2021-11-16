const User = require('./User')
const VideoGames = require('./VideoGames')
const Reviews = require('./Reviews')
const Orders = require('./Orders')
const Categories = require('./Categories')
const Cart = require('./Cart')
const CartVideoGames = require("./Cart-VideoGames")

// ASOC USER-CART
// Cart tiene fk de user
User.hasMany(Cart)
Cart.belongsTo(User)

// ASOC VIDEOG-CART
// Tabla Intermedia
VideoGames.belongsToMany(Cart, { through: 'cart-videogames' })
Cart.belongsToMany(VideoGames, { through: 'cart-videogames' })

// ASOC USER-REVIEWS
// Reviews tiene fk de user
User.hasMany(Reviews)
Reviews.belongsTo(User)

// ASOC VGAME - REVIEWS
// Reviews tiene fk de VideoGames
VideoGames.hasMany(Reviews)
Reviews.belongsTo(VideoGames)

// ASOC VGAME - CATEGORIES
// Tabla intermedia
VideoGames.belongsToMany(Categories, { through: 'categories-videogame' })
Categories.belongsToMany(VideoGames, { through: 'categories-videogame' })

// ASOC CART - ORDERS
// Order con id de Cart
Cart.hasOne(Orders)
Orders.belongsTo(Cart)

User.hasOne(Orders)
Orders.belongsTo(User)

module.exports = { User, VideoGames, Reviews, Orders, Categories, Cart, CartVideoGames}