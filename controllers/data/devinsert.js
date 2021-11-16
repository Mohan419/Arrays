var notifivalidation = require('./validation');
var insertnotifiquary = require('./quary');

var notification = {
    arraynotificationdev: (params, callback) => {
        const { error } = notifivalidation.notivalidationpass(params);
        if (error) {
            return callback({
                status: 200,
                data: {
                    response: 0,
                    message: error.message
                }
            })
        }
        let getNotificationQuery = insertnotifiquary.getNotificationsByclientIDQuery(params);
        getNotificationQuery.then((notifications) => {
            if (notifications.length > 0) {
                let updateDeviceQuery = insertnotifiquary.updateDeviceIdTokenQuery(params);
                updateDeviceQuery.then((updated) => {
                    if (updated.nModified > 0) {
                        return callback({
                            status: 200,
                            data: {
                                response: 3,
                                message: "Device Token Updated",
                            }
                        })
                    } else {
                        let updateDeviceByIDQuery = insertnotifiquary.updateDeviceIdTokenByDeviceIdQuery(params, notifications[0]._id);
                        updateDeviceByIDQuery.then((notifyPushed) => {
                            if (notifyPushed.nModified > 0) {
                                return callback({
                                    status: 200,
                                    data: {
                                        response: 3,
                                        message: "Device Id Updated",
                                    }
                                })
                            } else {
                                return callback({
                                    status: 200,
                                    data: {
                                        response: 0,
                                        message: "Device Id Not updated",
                                    }
                                })
                            }
                        })
                    }
                })
            } else {
                let insertDeviceQuery = insertnotifiquary.addingNewDeviceIdTokenQuery(params);
                insertDeviceQuery.save((success) => {
                    if (!success) {
                        return callback({
                            status: 200,
                            data: {
                                response: 3,
                                message: "Device Id Inserted",
                            }
                        })
                    } else {
                        return callback({
                            status: 200,
                            data: {
                                response: 0,
                                message: "Device Id Not Insertd",
                            }
                        })
                    }
                })
            }
        })

    }
}
module.exports = notification;

