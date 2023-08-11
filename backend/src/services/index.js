const UserModel = require("../models/user");
const { generateUsername } = require("../utils/generators");
const { isEmpty } = require("../utils/validators");

function initServices(app) {
    app.get("/", (req, res) => { res.send("this is a test and this means all works!") });

    app.post("login", async (req, res) => {
        const body = req.body;
        const { sub } = body;

        let user = await UserModel.findOne({ sub });

        //get user info
        //events
        //already attended
    });

    app.post("/user", async (req, res) => {
        try {
            const body = req.body;
            const { sub } = body;
            
            const count = await UserModel.countDocuments({});
            const user = await UserModel.find({username: generateUsername(count), sub});

            if (isEmpty(user)) {
                const data = await UserModel.create({ username: generateUsername(count), sub });
                return res.status(200).send({ success: !!data, message: `user ${data.username} with already created.` });
            }

            return res.status(400).send({ success: false, message: `user or sub already exists.` })
        } catch(e){
            console.error(e.message)
            return res.status(500).send({ success: false, message:e.message })
        }
    });

    app.put("/user", async (req, res) => {
        const body = req.body;
        const { address, sub } = body;
        const user = await UserModel.findOne({username: generateUsername(count), sub});

        if (!user) return

        await UserModel.updateOne({ sub }, { address });

        return res.status(200).send({ success:true, message: "user already updated." })
    });

    app.post("/event", async (req, res) => {

    });


    app.put("/event", async (req, res) => {

    });

    app.put("/event/attend", async (req, res) => {

    });
}

module.exports = { initServices }