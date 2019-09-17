import React, { Component } from 'react';

class Result extends Component {
    state = {  }
    render() { 
        let {result} = this.props;
        return (
            <div className="result"><p>{result}</p></div>
        );
    }
}
 
export default Result;