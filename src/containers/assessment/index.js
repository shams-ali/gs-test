import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import data from '../../data';
import {
  increment,
  decrement
} from '../../modules/counter';

const Assessment = props => (
  <div className="flow-wrap">
    <div className="row">
      <div className="col-md-offset-3 col-md-6 text-center">
        <p>Count: {props.count}</p>

        <p>
          <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
        </p>

        <p>
          <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
        </p>

        <h1>Assessment</h1>
        <div className="row">
          <div>
            <h3>header 3</h3>
            <button
              type="button"
              /* onClick={} */
              className="btn btn-default"
            >
              Yes
            </button>
            <button
              type="button"
              /* onClick={handleNext} */
              className="btn btn-default"
            >
              No
            </button>
          </div>
        </div>
        <div>
          <button
            type="button"
            /* onClick={handleBack} */
            className="btn btn-default back"
          >
            <span
              className="glyphicon glyphicon-menu-left"
              aria-hidden="true"
            />
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  decrement,
  changePage: () => push('/assessment')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assessment)
// export default Assessment;