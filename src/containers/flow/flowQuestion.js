/* eslint max-len: 0 */
import React from 'react';

const FlowQuestion = () => (
  <div>
    <div className="row">
      <div>
        <h3>header 3</h3>
        <button
          type="button"
          onClick={() => console.log('hi')}
          className="btn btn-default"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => console.log('hi')}
          className="btn btn-default"
        >
          No
        </button>
      </div>
    </div>
    <div>
      <button
        type="button"
        onClick={() => console.log('hi')}
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
);

export default FlowQuestion;
