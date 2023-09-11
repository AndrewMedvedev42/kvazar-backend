const mongoose = require("mongoose");

module.exports = async function connection() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.CLUSTER_URI, connectionParams);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to database");
    }
};