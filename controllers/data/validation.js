const { array } = require('@hapi/joi');
var joi = require ('@hapi/joi');
var validation = {
arrayvalidationpass:(params)=>{
    const validdata = joi.object({
        fname:joi.string().required(),
        lname:joi.string().required(),
        age:joi.number().required(),
        gmail:joi.string().required(),
        phonenumber:joi.number().required(),
        address:joi.array().required(),
    })
    return validdata.validate(params);
},
arrayupdatevalidationpass:(params)=>{
    const validupdatedata = joi.object({
        gmail:joi.string().required(),
        HSNO: joi.string().required(),
        Street: joi.string().required(),
        City: joi.string().required(),
        ZIPCODE: joi.string().required(),
        State: joi.string().required()
    })
    return validupdatedata.validate(params);
},
arraygetvalidationpass:(params)=>{
    const getvalid = joi.object({
        gmail:joi.string().required()
    })
    return getvalid.validate(params);
},
notivalidationpass:(params)=>{
    const notifivalid = joi.object({
        gmail:joi.string().required(),
        deviceID:joi.string().required(),
        deviceToken:joi.string().required(),
        deviceType:joi.string().required()
    })
    return notifivalid.validate(params);

}
}

module.exports = validation;