const { sequelize } = require('../../database');
const { DataTypes } = require('sequelize')

const PostModel = sequelize.define('posts', {
    titulo: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    imageLink: DataTypes.STRING,

})

module.exports = { PostModel }