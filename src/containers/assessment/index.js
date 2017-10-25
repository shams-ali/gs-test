import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import data from '../../data';
import Score from '../../components/score';
import Question from '../../components/question';
import { decrement } from '../../modules/counter';

const Assessment = ({count, question, decrement}) => (
  <div className="flow-wrap">
    <div className="row">
      <div className="col-md-offset-3 col-md-6 text-center">
        {data.length === question ? <Score score={count.reduce((c, v) => c + v, 0)} /> : <Question data={data}/> }
      </div>
      <div>
      {question ? <button
        type="button"
        onClick={() => decrement()}
        className="btn btn-primary back"
      >
        <span
          className="glyphicon glyphicon-menu-left"
          aria-hidden="true"
        />
        Back
      </button> : null
      }
    </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  question: state.counter.question,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  decrement,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assessment);
