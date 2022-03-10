module.exports = function (fastify, opts, done) {
    fastify.register(require('./authentication.route'), { prefix: '/auth', connMysql: opts.connMysql })
    done()
}