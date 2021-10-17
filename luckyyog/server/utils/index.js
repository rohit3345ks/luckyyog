let utilityFunctions = {};

utilityFunctions.sendResponse=(statusCode, data)=> {
    return {
        statusCode,
        data
    }
}

module.exports = utilityFunctions;