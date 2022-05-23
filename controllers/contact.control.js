const user = require('../models/Users');


//set of what evry route will do
    //for get route
exports.getUser = async (req, res) => {
    try {
        const contacts = await user.find({})
        res.status(200).send({ msg: 'all users', contacts })
    } catch (error) {
        res.status(500).send(error)
    }
}
    //for post route
exports.postUser = async (req, res) => {
    try {
        const newUser = new user(req.body)

        await newUser.save()
        res.status(200).send({ msg: 'user aded with seccess', newUser })
    } catch (error) {
        res.status(500).send('could not add the user')
    }
}
    //for update route
exports.upUser = async (req, res) => {
    try {
        const { id } = req.params
        const updatedUser = await user.findOneAndUpdate(id, { $set: { ...req.body } })

        res.status(200).send('user updated')
    } catch (error) {
        res.status(500).send(error)
    }
}
    //for delete route
exports.delUser = async (req, res) => {
    try {
        await user.findOneAndDelete({ _id: req.params.id })
        res.send('user deleted with seccess')
    } catch (error) {
        res.status(500).send(error)
    }
}