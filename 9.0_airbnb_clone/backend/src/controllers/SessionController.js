const User = require('../models/User');

// index = retorna uma lista de sessão, show = retorna única sessão, store = cria uma sessão, update = atualiza uma sessão, destroy = deleta uma sessão

module.exports = {
    async store(req, res) {
        const {email} = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};