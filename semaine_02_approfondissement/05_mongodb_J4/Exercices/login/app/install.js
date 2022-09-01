import mongoose from "mongoose";
import bcryot from "bcrypt";

async function connect() {
    const init = await mongoose.connect(
      "mongodb://root:example@mongo:27017",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  
    const UserSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String,
      status : Boolean,
      countConnect : Number
    });
  
    const UserModel = mongoose.model("users", UserSchema);

    // MAJ des données

    const users = await  UserModel.find();

    if(users){
      for(const user of users) {
        await user.remove();
      }
    }

  
    const Alice = new UserModel({
      name: "alice",
      email: "alice.alice@gmail.com",
      password: "$2b$10$U9vzshXE7s4GFqz4JPmSzuvIiblImQXVLTLtl6l0Q9PzuZnZsHo3m",
      status: false,
      countConnect : 0
    });
  
    Alice.save();
  
    const Alan = new UserModel({
      name: "alan",
      email: "alan.alan@gmail.com",
      password: "$2b$10$U9vzshXE7s4GFqz4JPmSzuvIiblImQXVLTLtl6l0Q9PzuZnZsHo3m",
      status: false,
      countConnect : 0
    });
  
    Alan.save();
  }
  

  connect()
  .then(console.log)
  .catch(console.error);

// const salt = 10;
// const hash = bcrypt.hashSync("1234567890", salt);
// console.log(hash)