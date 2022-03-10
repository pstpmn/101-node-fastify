module.exports = (conn) => {
    const add = () => {
        info = conn.player.create({
            name: data.name,
            age: data.age,
            position: data.position,
            tid: data.tid,
        });
    }

    const findAll = async () => {
        return await conn.player.findAll()
    }

    return {
        add,
        findAll
    }
}