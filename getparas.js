const { ServerApiVersion } = require('mongodb');

exports.getParamsConfig = (nameCloud,attributeSelect) => {
    const CLOUDS = {
        mongodbcloud:{
            uri:process.env.MONGODBCLOUD_PARAMS_URI,
            params:{
                useNewUrlParser: true,
                useUnifiedTopology: true, 
                serverApi: ServerApiVersion.v1
            }
        },
        AWSdocumentDB:{
            uri:process.env.AWSDOCUMENTDB_PARAMS_URI,
            params:{
                sslValidate: true,
                sslCA: process.env.AWSDOCUMENTDB_PARAMS_SSLCA
            }
        }
    };
    return CLOUDS[nameCloud][attributeSelect];
}