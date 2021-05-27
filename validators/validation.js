const { validationResult } = require('express-validator');


const validation =  async (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    
    return res.status(422).json({
      errors: errors.array(),
    })
}
module.exports = validation;