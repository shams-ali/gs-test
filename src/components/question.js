import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increment } from '../modules/counter';
const Question = ({question, increment, data}) => {
  const { Title, choices } = data[question];
  
  return (
    <div>
      <h1>Assessment</h1>
      <div className="row">
        <div>
          <h3>{ Title }</h3>
          {choices.map(({text, score}, i) => {
            return (
              <button
                key={i}
                type="button"
                onClick={() => increment(score)}
                className="btn btn-default"
              >
                {text}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  question: state.counter.question,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)