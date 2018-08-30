var pgp = require('pg-promise')({});
var connectionString = '/petitions.sql';
var db = pgp(connectionString);

const getAllPetitions = (req, res, next) => {
    db.any('SELECT * FROM petitions')
        .then((data) => {
            res.status(200)
                .json({
                    message: "success!",
                    data: data
                })
        })
        .catch((err) => {
            return next(err);
        })
}

module.exports = {
    getAllPetitions
};