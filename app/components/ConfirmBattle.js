import React, {PropTypes} from 'react';

import {Link} from 'react-router';

import * as styles from '../styles';

import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import Loading from './Loading';

import MainContainer from '../container/MainContainer';

function puke(obj){
  return <pre>{JSON.stringify(obj, null, '')}</pre>
}

function ConfirmBattle({isLoading, playersInfo, onInitBattle}){
  return (
    isLoading === true
    ? <Loading speed={200} text="Waiting"/>
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header="Player One">
            <UserDetails
                info={playersInfo[0]}/>
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player Two">
            <UserDetails
                info={playersInfo[1]}/>
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={onInitBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContainer>
  );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitBattle: PropTypes.func.isRequired
}

export default ConfirmBattle;
