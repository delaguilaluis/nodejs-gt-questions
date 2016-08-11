'use strict';
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
    const questionIdParameter = req.params && req.params.questionId;
    if (questionIdParameter === undefined) {
      return res.status(400).send('You must specify a question ID!');
    }

    const foundQuestionIndex = req.questions.findIndex(question => (
      question.questionId === questionIdParameter
    ));

    if (foundQuestionIndex === -1) {
      return res.status(404).send('Question not found');
    }

    req.questions.splice(foundQuestionIndex, 1);
    return res.send('Question successfully deleted');
  }
};
