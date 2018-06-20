// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchTerm } from './actionCreators';

const Landing = (props: { searchTerm: string, handleSearchTermChange: Function }) => (
  <div className="landing">
    <h1>svideo</h1>
    <input
      value={props.searchTerm}
      type="text"
      name=""
      id=""
      onChange={props.handleSearchTermChange}
      placeholder="Search"
    />
    <Link to="/search">or Browse All</Link>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(searchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
