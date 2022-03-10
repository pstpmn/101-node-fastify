
const schema = require('../../schema/authentication.schema')
const authorization = require('../../middlewares/authorization')
const authRepo = require('../../repository/authRepo')
const authRepoImpl = require('../../databases/mysql/repository/authRepoImpl')

module.exports = function (fastify, opts, done) {
    const authHandle = require('../../handles/authentication.handle')(opts.connMysql, authRepo, authRepoImpl)

    fastify.route({
        method: 'POST',
        url: '/',
        schema: {
            body: schema.bodyJsonSchema
        },
        preHandler: async (request, reply, next) => {
            // call middleware
            authorization(request, reply, next);
            request.body.username = escape(request.body.username);
            request.body.password = escape(request.body.password);
            request.body.email = escape(request.body.email);
        },
        handler: async (request, reply) => {
            // console.log(authHandle.auth);
            authHandle.auth(request, reply, "Mommam")
        }
    })
    done()
}