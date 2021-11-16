var arrayinsert = require('./insert');
var notificationinsert = require ('./devinsert');
var array = {
    arraydatacallback: (params, callback) => {
        arrayinsert.arraydatainsert(params, callback);
    },
    arraydataupdatecallback: (params, callback) => {
        arrayinsert.arraydataupdateinsert(params, callback)
    },
    arraydatagetcallback: (params, callback) => {
        arrayinsert.arraydataget(params, callback)
    },
    insertDevice: (params, callback) => {
       notificationinsert.arraynotificationdev(params,callback)
    }
}
module.exports = array;