var insertdataquary =require ('../../model/app/schema');
var   notifications=require ('../../model/app/notification');
var quarydata = {
arrayinsertquarypass:(params)=>{
    const dataquary = new insertdataquary({
        fname:params.fname,
        lname:params.lname,
        age:params.age,
        gmail:params.gmail,
        phonenumber:params.phonenumber,
        address:params.address,
    })
    return dataquary;
},

arrayinsertupdatequarypass:(params)=>{
return insertdataquary.updateOne({gmail:params.gmail},{$push:{address:params.address}})
},
arraygetquarypass:(params)=>{
    return insertdataquary.find({gmail:new RegExp('^'+params.gmail+'$','i')})
    },
    getNotificationsByclientIDQuery: (params) => {
        return notifications.find({ gmail: new RegExp('^'+params.gmail+'$', 'i') }).exec()
    },
    updateDeviceIdTokenQuery: (params) => {
        if (params.deviceType === 'web') {
            return notifications.updateOne(
                {
                    'gmail': params.gmail,
                    'devices.web.deviceID': params.deviceID
                },
                {
                    '$set':
                    {
                        'devices.web.$': {
                            deviceToken: params.deviceToken,
                            deviceID: params.deviceID,
                            login: true
                        }
                    }
                }).exec()
        } else {
            return notifications.updateOne(
                {
                    'gmail': params.gmail,
                    'devices.mobile.deviceID': params.deviceID
                },
                {
                    '$set':
                    {
                        'devices.mobile.$': {
                            deviceToken: params.deviceToken,
                            deviceID: params.deviceID,
                            login: true
                        }

                    }
                }).exec()
        }

    },
    updateDeviceIdTokenByDeviceIdQuery: (params, ID) => {
        if (params.deviceType === 'web') {
            return notifications.updateOne(
                { _id: ID, gmail: new RegExp(params.gmail, 'i') },
                {
                    $push: {
                        "devices.web": {
                            deviceID: params.deviceID,
                            deviceToken: params.deviceToken,
                            login: true
                        }
                    }
                }).exec()
        } else {
            return notifications.updateOne(
                { _id: ID, emagmaililID: new RegExp(params.gmail, 'i') },
                {
                    $push: {
                        "devices.mobile": {
                            deviceID: params.deviceID,
                            deviceToken: params.deviceToken,
                            login: true
                        }
                    }
                }).exec()
        }
    },
    addingNewDeviceIdTokenQuery: (params) => {
        if (params.deviceType === 'web') {
            var obj = new notifications({
                gmail: params.gmail,
                devices: {
                    web: [{
                        deviceID: params.deviceID,
                        deviceToken: params.deviceToken,
                        login: true
                    }]
                }
            });
            return obj;
        } else {
            var obj = new notifications({
                gmail: params.gmail,
                devices: {
                    mobile: [{
                        deviceID: params.deviceID,
                        deviceToken: params.deviceToken,
                        login: true
                    }]
                }
            });
            return obj;
        }
    },
}
module.exports = quarydata;