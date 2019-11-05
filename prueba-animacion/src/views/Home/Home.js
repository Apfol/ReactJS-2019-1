import React from 'react';
import { connect } from 'react-redux';
// import Google from '../../components/Log/Google/Google';

const Home = ({ currentUser }) => {
  return (
    <div className="home">
      <h1>Home page</h1>
      {//<Google></Google>
      }
      {currentUser && currentUser ? (
        <p>You are logged in as {currentUser.email}</p>
      ) : (
        <p>You are logged out, please sign in.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Home);