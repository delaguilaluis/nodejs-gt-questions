'use strict';
var dataProvider = require('../data/questions.js');
/**
 * Operations on /questions
 */
module.exports = {
    /**
     * summary: Retrieve all questions
     * description: The Questions endpoint returns information about the questions made
on the second Node.js Guatemala community session.
The response includes an array of questions with the author, the and the question ID and the question itself.

     * parameters: limit, method, question, author
     * produces: 
     * responses: 200, default
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
