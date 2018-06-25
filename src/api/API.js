import axios from "axios";

export default {
  // Gets all questions and associated information
  getQuestions: function() {
    return axios.get("http://trilogyapi.nicadsolutions.com/questions");
  },
  // Gets all question ids
  getQuestionIds: function() {
    return axios.get("http://trilogyapi.nicadsolutions.com/questions/ids");
  },
  // Get a single question based on question id
  getQuestionId: function(id) {
    return axios.get("http://trilogyapi.nicadsolutions.com/question/" + id);
  },
  // Gets the book with the given id
  getAnswer: function(id) {
    return axios.get("http://trilogyapi.nicadsolutions.com/question/" + id + "/answer");
  }
};
