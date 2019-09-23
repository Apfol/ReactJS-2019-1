import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import FeedWrapper from './../../FeedWrapper/FeedWrapper';
import PostsWrapper from './../../PostsWrapper/PostsWrapper';
import ProfileWrapper from './../../ProfileWrapper/ProfileWrapper';
import classes from './Navbar.css';

var Navbar = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul className={classes.links}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
        </ul>
      </nav>


      <Route path="/" exact render={() => (
          <FeedWrapper></FeedWrapper>
      )}></Route>

      <Route path="/posts" render={() =>(
          <PostsWrapper></PostsWrapper>
      )}></Route>

      <Route path="/profile" exact render={() =>(
        <ProfileWrapper></ProfileWrapper>
      )}></Route>
    </BrowserRouter>
  );
};
export default Navbar;
