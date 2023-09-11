require('dotenv').config()
const mongoose = require('mongoose');

const UserModel = require('./user.model')

const jsonUsers = require('./users.json')

const uri = process.env.CLUSTER_URI;

const start = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true,
      useFindAndModify:false,}
    );
    await UserModel.deleteMany()
    await UserModel.create(jsonUsers)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()