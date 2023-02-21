import React from "react";
import PropTypes from "prop-types";
import { auth } from './../firebase.js';

function NewSurveyForm(props) {
  function handleNewSurveyFormSubmit(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      name: event.target.name.value,
      q1: event.target.q1.value,
      q2: event.target.q2.value,
      q3: event.target.q3.value,
      q4: event.target.q4.value,
      q5: event.target.q5.value,
      userId: auth.currentUser.uid
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleNewSurveyFormSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Survey Name"
        /><br/>
        <textarea
          type='text'
          name='q1'
          placeholder="Question 1"
        /><br/>
        <textarea
          type='text'
          name='q2'
          placeholder="Question 2"
        /><br/>
        <textarea
          type='text'
          name='q3'
          placeholder="Question 3"
        /><br/>
        <textarea
          type='text'
          name='q4'
          placeholder="Question 4"
        /><br/>
        <textarea
          type='text'
          name='q5'
          placeholder="Question 5"
        /><br/>
        <button type="submit">Submit!</button>
      </form>
    </React.Fragment>
  )
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
}

export default NewSurveyForm