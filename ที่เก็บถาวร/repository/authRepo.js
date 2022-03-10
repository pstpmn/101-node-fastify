module.exports = function playersRepository(repository) {
    const findAll = async () => await repository.findAll();
    return {
        findAll,
    };
}