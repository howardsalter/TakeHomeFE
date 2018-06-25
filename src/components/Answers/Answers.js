import React from "react";

class Answers extends React.Component {
  state = {
    input: ""
  }
  
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render(){
    var options = this.props.options;
    var handleState = this.props.handleState;
    var handleChange = this.handleChange;
    console.log(this.props.type);
    if ( this.props.type == "m"){
      return(
        <div>
          {options.map(function(option, index){
            return (<button className="answer-option" onClick={(e) => handleState(e, ['m', index])}>{option}</button>)
          })}
        </div>
      );
    } else if ( this.props.type == "t" ) {
      return(
        <div>
            <input class="terminal-input" type="text" id="textResponse" onChange={handleChange} /><button onClick={(e) => handleState(e, ['t', this.state.input])}>Submit</button>
        </div>
      );
    } else if ( this.props.type == "b" ) {
      return(
        <div>
            <button className="answer-option" onClick={(e) => handleState(e, ['b', true])}>True</button>
            <button className="answer-option" onClick={(e) => handleState(e, ['b', false])}>False</button>
        </div>
      );
    }
  }
}

export default Answers;
