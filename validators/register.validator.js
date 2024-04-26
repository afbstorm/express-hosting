const yup = require('yup');
const { object } = require('yup');

const registerValidator = object({
    password: yup.string().min(1).max(50).required(),
    email: yup.string().min(5).max(100).required(),

    // Pour une date (de naissance par exemple)
    // date: yup.date()
})

module.exports = registerValidator;
