'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/questions',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/questions',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
