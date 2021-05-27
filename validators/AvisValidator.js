const { body } = require("express-validator")

const create= [
    body('score')
    .not().isEmpty()
    .withMessage('Score is required')
    .bail()
    .isInt()
    .withMessage('Score has to be an integer')
    .custom(value => value < 1 || value > 5 ? Promise.reject("Score should be between 1 and 5") : Promise.resolve()),
    body('comment')
    .not().isEmpty()
    .withMessage('Comment is required')
]

module.exports={
    create
}