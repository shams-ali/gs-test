import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FlowQuestion from './flowQuestion';

class Flow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevQuestion: {},
      error: '',
      success: false,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleNext(e) {
    console.log('handle next');
  }

  handleBack() {
    console.log('handle back');
  }

  handleSubmit(e){
    console.log('handle submit');
  }

  render() {
    const { answer, error, success } = this.state;
    return (
      <div className="flow-wrap">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 text-center">
            <FlowQuestion />
          </div>
        </div>
      </div>
    );
  }
}

Flow.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Flow;
