require('dotenv').config();
const params = require('./getparas');
var MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = params.getParamsConfig(process.env.MONGODB_CLOUD_DEFAULT,'uri');
const MONGODB_PARAMS = params.getParamsConfig(process.env.MONGODB_CLOUD_DEFAULT,'params');


async function clientMongodb() {
    return await MongoClient.connect(MONGODB_URI,MONGODB_PARAMS);
}

exports.handler = async (event) => {
    const client = await clientMongodb();
    const dbdoc = client.db('test');
    const profiles = dbdoc.collection('profiles');
    const cursor = await profiles.find(); 
    let profilesArray = [];
    await cursor.forEach(data=>{
        profilesArray.push(data);
    });
    client.close();
    return profilesArray;
};
