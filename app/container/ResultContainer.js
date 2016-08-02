import React, { Component } from 'react';
import Results from '../components/Results';
import {battle} from '../utils/githubHelpers';

class ResultContainer extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      scores: []
    };
  }

  async componentDidMount(){
    try {
      const scores = await battle(this.props.location.state.playersInfo)

      this.setState({
        isLoading: false,
        scores: scores
      });
    } catch(err){
        console.warn('Error in ResultContainer: ', err);
    }
  }

  render(){
    return (
      <Results
        isLoading = {this.state.isLoading}
        playersInfo = {this.props.location.state.playersInfo}
        scores = {this.state.scores}/>
    )
  }
}

export default ResultContainer;
