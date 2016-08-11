'use strict';
var dataProvider = require('../../data/questions/{questionId}.js');
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
     */
    delete: function (req, res, next) {
        /**
         * Get the data for response 404
         * For response `default` status 200 is used.
         */
        var status = 404;
        var provider = dataProvider['delete']['404'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
