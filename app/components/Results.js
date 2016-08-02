import React, {PropTypes} from 'react'
import {Link} from 'react-router';

import * as styles from '../styles';

import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import Loading from './Loading';

import MainContainer from '../container/MainContainer';

function StartOver(){
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Results({isLoading, playersInfo, scores}){

  if (isLoading === true){
    return (
      <Loading />
    )
  }

  if (scores[0] === scores[1]){
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver/>
      </MainContainer>
    )
  }

  const winningIndx = scores[0] > scores[1] ? 0 : 1;
  const losingIndx = winningIndx === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={scores[winningIndx]} info={playersInfo[winningIndx]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={scores[losingIndx]} info={playersInfo[losingIndx]} />
        </UserDetailsWrapper>
      </div>
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results;
