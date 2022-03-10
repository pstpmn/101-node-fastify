const fastify = require('fastify')({ logger: false })
const config = require('./config/config')
const mysql = require('./databases/mysql/connect')

// init database
const connMysql = mysql.startToMySql(config);
mysql.sync(connMysql);

// init global
// global.conn = connMysql;

fastify.register(require('fastify-formbody'))                                  
fastify.register(require('./routes/v1/index'), { prefix: '/v1', connMysql: connMysql })
fastify.listen(config.SERVER_INFO.PORT)