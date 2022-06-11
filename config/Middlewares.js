const Sequelize = require("sequelize")
const Song = require("./models/Song")
const Users = require("./models/Users")
const errHandler = (err) => {
    console.error(err)
}

module.exports = {
    auth: async (uname, pw) => {
        let usersArray = await Users.findAll({where: {uname: uname, pwd: pw}}).catch(errHandler)
        if (usersArray.length() == 1) {
            return usersArray[0]
        }
    },

    

}