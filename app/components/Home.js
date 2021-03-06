import React from 'react';
import {Link} from 'react-router';

import MainContainer from '../container/MainContainer';

function Home(props){
  return(
    <MainContainer>
      <h1>Github Battle</h1>
      <p className='lead'>Motto</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>
          Get Started
        </button>
      </Link>
    </MainContainer>
  );
}

export default Home;
