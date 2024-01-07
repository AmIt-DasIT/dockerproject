exports.validate = (res, variable, variable_name) => {
    if(variable === undefined || variable === ""){
        return res.status(400).json({
            status: 'failed',
            message: `Enter proper ${variable_name}`
        })
    } else {
        return variable;
    }
}

