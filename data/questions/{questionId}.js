'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /questions/{questionId}
 */
module.exports = {
    /**
     * summary: Delete question
     * description: Deletes the question with the specified ID
     * parameters: questionId
     * produces: 
     * responses: 404, default
     * operationId: 
     */
  delete: {
    404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
      Mockgen().responses({
        path: '/questions/{questionId}',
        operation: 'delete',
        response: '404'
      }, callback);
    },
    default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
      Mockgen().responses({
        path: '/questions/{questionId}',
        operation: 'delete',
        response: 'default'
      }, callback);
    }
  }
};
