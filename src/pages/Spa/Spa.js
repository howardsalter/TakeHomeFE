import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Terminal from "../../components/Terminal";
import Question from "../../components/Question";
import Answers from "../../components/Answers";
import API from "../../api/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Spa extends React.Component {
  state = {
    questions: [],
    currentQuestion: 0,
    myState: "Not Loaded",
    correct: 0,
    endMessage: ""
  };

  constructor(props) {
    super(props);

    this.handleState = this.handleState.bind(this);
  }

  handleState(e, data) {
    e.preventDefault();
    let stateObject = this.state;

    if (data[0] == 't'){
      if (data[1].toLowerCase().trim() == this.state.questions[this.state.currentQuestion]["correct"].toLowerCase()){
        stateObject.correct = this.state.correct + 1;
      } 
    } else {
      if (data[1] == this.state.questions[this.state.currentQuestion]["correct"]){
        stateObject.correct = this.state.correct + 1;
      } 
  }

    stateObject.currentQuestion = this.state.currentQuestion + 1;
    if (stateObject.currentQuestion == this.state.questions.length) {
      if (stateObject.correct <= 1){
        stateObject.endMessage = "Global Thermonuclear War! I Win!";
      } else if (stateObject.correct == 2){
        stateObject.endMessage = "Cannot calculate win scenario.";
      } else if (stateObject.correct >= 3){
        stateObject.endMessage = "You Win! How about a nice game of chess?";
      }
    }
    console.log(stateObject)
    this.setState(stateObject);
  }

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    API.getQuestions()
      .then((res) => {
        this.setState({
          questions: res.data,
          myState: "Loaded"
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Terminal>
              <h1>V.O.P.R.</h1>
              <p>Variable Operation Plan Response</p>
              <div className="terminal-text">Would you like to play a game?</div>
            </Terminal>
          </Col>
          <Col size="md-6">
            <div className="defcon-container">
              <h1 className="defcon-title">DEFCON</h1>
              <h2 className={"defcon-number defcon-number-" + (4 - this.state.currentQuestion)}>{4 - this.state.currentQuestion}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Question>
              {(this.state.questions.length > this.state.currentQuestion) ? ( 
                <div>
                  <h3>{this.state.questions[this.state.currentQuestion]["question"]}</h3>
                  <Answers 
                    options = {this.state.questions[this.state.currentQuestion]['answers']} 
                    type = {this.state.questions[this.state.currentQuestion]['type']}
                    handleState = {this.handleState.bind(this)}
                  ></Answers>
                </div>
              ) : (
                <div>
                  <h2>{this.state.endMessage}</h2>
                  <p>{this.state.correct} out of {this.state.questions.length} Correct!</p>
                </div>
              )}
            </Question>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>  
      </Container>
    );
  }
}

export default Spa;
