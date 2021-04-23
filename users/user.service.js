const db = require('_helpers/db')
const User = db.User;


module.exports = {
    signIn,
    signup
}


async function signIn({ email, password }) {
    const user = await user.findOne({ email });

    if (user && password) {
        return {
            ...user.toJSON()
        }
    }
}

async function signup(userParam) {
    //validate 
    if (await User.findOne({ email: userParam.email })) {
        throw `Email ${userParam.email} is already taken`
    }
    const user = new User(userParam)
    await user.save();
}