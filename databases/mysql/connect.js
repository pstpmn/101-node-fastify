const { Sequelize } = require('sequelize');

let startToMySql = (config) => {
    const sequelize = new Sequelize(
        config.MySql.TABLE,
        config.MySql.USER, // user ที่ใช้สรการเข้าไปยัง db
        config.MySql.PASS, // password 
        {
            host: config.MySql.HOST, // host ของ db ที่เราสร้างเอาไว้
            dialect: 'mysql', // 'mysql' | 'mariadb' | 'postgres' | 'mssql'   พวกนี้ใช่ก็ใช้ได้นะจ๊ะ
            define: {
                timestamps: false //ส่วนตรงนี้ก็เป็นการตั้งค่าเพิ่มเติม
            }
        });

    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.player = require("./models/players")(sequelize, Sequelize);
    db.team = require("./models/teams")(sequelize, Sequelize);
    db.team.hasMany(
        db.player,
        {
            foreignKey: { name: 'tid', field: 'tid' }, //name ตรงสำคัญพยายามตั่งให้เป็นชื่อเดียวกับ FK ใน table ที่นำไปใช้นะครับ
        }
    );
    db.player.belongsTo(db.team, { foreignKey: 'tid' });
    return db;
}

const sync = (connected) => {
    connected.sequelize.sync()
        .then(() => { console.log('sync database success ..') })
        .catch(err => console.log(err))
}

module.exports = {
    startToMySql,
    sync
}