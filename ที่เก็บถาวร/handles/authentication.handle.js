const authRepository = require('../repository/authRepo')

module.exports = function authentication(
    connMysql,
    authRepository,
    authRepositoryImpl
) {
    authRepository = authRepository(authRepositoryImpl(connMysql))

    const auth = async (request, reply, str) => {
        console.log(str);
        const findAll = await authRepository.findAll();
        reply.send(findAll);
    };
    return {
        auth
    };
}