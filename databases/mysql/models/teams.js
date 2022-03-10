module.exports = ( sequelize , Sequelize ) => {
    const teams = sequelize.define(
      'teams',
      {
          tid: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true, field: 'tid' },
          name: { type: Sequelize.STRING(50), allowNull: false, field: 'name' },
          league: { type: Sequelize.STRING(50), allowNull: false, field: 'league' },
      },
      {
          tableName: 'teams'
      }
    );
    
    return teams;
  }