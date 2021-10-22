//Step 1: Database connection
const mongoose = require("mongoose");

//mongodb:"203.192.225.163/32";
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb://diit_user:diit_user@cluster0-shard-00-00.xeps8.mongodb.net:27017,cluster0-shard-00-01.xeps8.mongodb.net:27017,cluster0-shard-00-02.xeps8.mongodb.net:27017/vg_diit?ssl=true&replicaSet=atlas-q9fonm-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );
	
	
//Step 2: Create Schema (Java Class)
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	city: String
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("computers", userSchema);

exports.User = userObject;
