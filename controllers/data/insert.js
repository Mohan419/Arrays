var arrayvalidation = require('./validation');
var insertquary = require('./quary');

var arrayexport = {
    arraydatainsert: (params, callback) => {
        const { error } = arrayvalidation.arrayvalidationpass(params);
        if (error) {
            return callback({
                status: 200,
                data: {
                    response: 0,
                    message: error.message
                }
            })
        }
        var insertQuary = insertquary.arrayinsertquarypass(params);
        insertQuary.save((inserted) => {
            if (!inserted) {
                return callback({
                    status: 200,
                    data: {
                        response: 3,
                        message: 'data inserted successfully'
                    }
                })
            } else {
                return callback({
                    status: 200,
                    data: {
                        response: 0,
                        message: 'data inserted failure'
                    }
                })
            }
        })
    },
    arraydataupdateinsert: (params, callback) => {
        const { error } = arrayvalidation.arrayupdatevalidationpass(params);
        if (error) {
            return callback({
                status: 400,
                data: {
                    response: 0,
                    message: error.message
                }
            })
        }
        var address = {
            HSNO: params.HSNO,
            Street: params.Street,
            City: params.City,
            ZIPCODE: params.ZIPCODE,
            State: params.State
        }
        params.address=address;
        var insertQuary = insertquary.arrayinsertupdatequarypass(params);
        insertQuary.then((inserted) => {
            console.log(inserted);
            if (inserted.modifiedCount>0) {
                return callback({
                    status: 200,
                    data: {
                        response: 3,
                        message: 'data inserted successfully'
                    }
                })
            } else {
                return callback({
                    status: 200,
                    data: {
                        response: 0,
                        message: 'data inserted failure'
                    }
                })
            }
        })
    },
    arraydataget: (params, callback) => {
        const { error } = arrayvalidation.arraygetvalidationpass(params);
        if (error) {
            return callback({
                status: 200,
                data: {
                    response: 0,
                    message: error.message
                }
            })
        }
        var getQuary = insertquary.arraygetquarypass(params);
        getQuary.then((getdata) => {
            if (getdata) {
                return callback({
                    status: 200,
                    data: {
                        response: 3,
                        message: 'data getdata successfully',
                        stuInfo:getdata
                    }
                })
            } else {
                return callback({
                    status: 200,
                    data: {
                        response: 0,
                        message: 'data getdata failure'
                    }
                })
            }
        })
    }
}
module.exports = arrayexport;