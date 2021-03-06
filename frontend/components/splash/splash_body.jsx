import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { requestLocation } from '../../actions/filter_actions';

class SplashBody extends React.Component {
  constructor(props) {
    super(props);
    this.goToCity = this.goToCity.bind(this);
  }

  goToCity(location) {
    return () => {
      this.props.requestLocation(location);
      this.props.router.push('/search');
    };
  }

  render() {
    return (
      <div className="body">
        <h4 id='body-title'>Featured Locations</h4>
        <ul className='city-links'>
          {/*this.cityLinksUl()*/}

          <li onClick={this.goToCity('Los+Angeles')} className='city-link city-los-angeles'>
            <div className='city-link-cover'>
              <span className='city-name'>LOS ANGELES</span>
            </div>
          </li>

          <li onClick={this.goToCity('San+Francisco')} className='city-link city-san-fran'>
            <div className='city-link-cover'>
              <span className='city-name'>SAN FRANCISCO</span>
            </div>
          </li>

          <li onClick={this.goToCity('New+York')} className='city-link city-new-york'>
            <div className='city-link-cover'>
              <span className='city-name'>NEW YORK</span>
            </div>
          </li>

          <li onClick={this.goToCity('Seattle')} className='city-link city-seattle'>
            <div className='city-link-cover'>
              <span className='city-name'>SEATTLE</span>
            </div>
          </li>

          <li onClick={this.goToCity('Seoul')} className='city-link city-seoul'>
            <div className='city-link-cover'>
              <span className='city-name'>SEOUL</span>
            </div>
          </li>

          <li onClick={this.goToCity('Las+Vegas')} className='city-link city-vegas'>
            <div className='city-link-cover'>
              <span className='city-name'>LAS VEGAS</span>
            </div>
          </li>

          <li onClick={this.goToCity('London')} className='city-link city-london'>
            <div className='city-link-cover'>
              <span className='city-name'>LONDON</span>
            </div>
          </li>

          <li onClick={this.goToCity('Dubai')} className='city-link city-dubai'>
            <div className='city-link-cover'>
              <span className='city-name'>DUBAI</span>
            </div>
          </li>

          <li onClick={this.goToCity('Amsterdam')} className='city-link city-amsterdam'>
            <div className='city-link-cover'>
              <span className='city-name'>AMSTERDAM</span>
            </div>
          </li>

          <li onClick={this.goToCity('Rome')} className='city-link city-rome'>
            <div className='city-link-cover'>
              <span className='city-name'>ROME</span>
            </div>
          </li>

          <li onClick={this.goToCity('Sydney')} className='city-link city-sydney'>
            <div className='city-link-cover'>
              <span className='city-name'>SYDNEY</span>
            </div>
          </li>

          <li onClick={this.goToCity('Paris')} className='city-link city-paris'>
            <div className='city-link-cover'>
              <span className='city-name'>PARIS</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  requestLocation: location => dispatch(requestLocation(location))
});

export default withRouter(
  connect(null, mapDispatchToProps)(SplashBody)
);
