module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sample', {
    title: DataTypes.STRING,
    age: DataTypes.INTEGER,
  });
};
