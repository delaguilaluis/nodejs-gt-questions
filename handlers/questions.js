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

    // HTTP method overriden? Create a new question
    if (req.query && req.query.method === 'post') {
      if (req.query.body === undefined) {
        return res.status(400).send('You must specify a question!');
      }

      const question = {
        questionId: req.getCurrentQuestion(),
        body: req.query.body,
        author: req.query.author || '',
      };

      // DO NOT TRY THIS AT HOME
      req.questions.push(question);
      return res.send(question);
    }

    // Return the existing questions instead
    return res.send(req.questions);
  }
};
