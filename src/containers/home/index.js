import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
  <div class="jumbotron">
    <div class="container text-center">
      <h1>GS Test</h1>      
      <p><button className="btn btn-primary" onClick={() => props.changePage()}>Start Assessment</button></p>
    </div>
  </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/assessment')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)