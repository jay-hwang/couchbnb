import React from 'react';
import { withRouter } from 'react-router';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.spotFormInfo.editSpotTarget || {
        host_id: this.props.currentUser.id,
        host_name: this.props.currentUser.first_name,
        title: "",
        country: "",
        state_region: "",
        city: "",
        post_code: "",
        street_address: "",
        price_per_night: "",
        room_type: "Entire Place",
        bed_count: '',
        max_guests: ""
    };

    this.marginRight = this.marginRight.bind(this);
    this.marginLeft = this.marginLeft.bind(this);

    this.handleSpotFormClose = this.handleSpotFormClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.closeSpotForm = this.closeSpotForm.bind(this);
    this.spotFormContainer = this.spotFormContainer.bind(this);

    this.title = this.title.bind(this);
    this.roomType = this.roomType.bind(this);
    this.bedGuestContainer = this.bedGuestContainer.bind(this);
      this.maxGuestsInput = this.maxGuestsInput.bind(this);
      this.bedCountInput = this.bedCountInput.bind(this);
    this.price = this.price.bind(this);
    this.streetAddress = this.streetAddress.bind(this);
    this.cityStateRegionRow = this.cityStateRegionRow.bind(this);
      this.city = this.city.bind(this);
      this.stateRegion = this.stateRegion.bind(this);
    this.countryPostCode = this.countryPostCode.bind(this);
      this.country = this.country.bind(this);
      this.postCode = this.postCode.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.spotForm = this.spotForm.bind(this);
  }

  marginRight() {
    return (
      <div className="margin-right">
        { this.closeSpotForm() }
      </div>
    );
  }

  marginLeft() {
    return (
      <div className="margin-left">

      </div>
    );
  }

  handleSpotFormClose() {
    $(".spot-form-container").addClass("display-none");
  }

  handleInputChange(field) {
    return(e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  closeSpotForm() {
    return (
      <div className="closeSpotForm" onClick={this.handleSpotFormClose}>
        X
      </div>
    );
  }

  spotFormContainer() {
    return (
      <div className="spot-form-container display-none">
        { this.marginLeft() }
        { this.spotForm() }
        { this.marginRight() }
      </div>
    );
  }


//////////////////////////////


  title() {
    return (
      <input
        type="text"
        value={ this.state.title }
        onChange={ this.handleInputChange('title') }
        placeholder="Title"
        className='spot-form-row'/>
    );
  }

  roomType() {
    return (
      <label className="spot-form-label">
        <select className="room-type"
                value={ this.state.room_type }
                onChange={ this.handleInputChange('room_type') }>
          <option value="Entire place">Entire Place</option>
          <option value="Private Room">Private Room</option>
          <option value="Shared Room">Shared Room</option>
        </select>
      </label>
    );
  }

  bedGuestContainer() {
    return (
      <div className="spot-form-row two" >
        { this.maxGuestsInput() }
        { this.bedCountInput() }
      </div>
    );
  }

    maxGuestsInput() {
      return (
        <input
          type="text"
          onChange={ this.handleInputChange('max_guests') }
          value={ this.state.max_guests }
          placeholder="Max Guests"
          className="bed-guest-input" />
      );
    }

    bedCountInput() {
      return (
        <input
          type="text"
          onChange={ this.handleInputChange('bed_count') }
          value={ this.state.bed_count }
          placeholder="Bed Count"
          className="bed-guest-input" />
      );
    }

  price() {
    return (
      <input
        type="text"
        value={ this.state.price_per_night }
        onChange={ this.handleInputChange('price_per_night') }
        placeholder="Price Per Night"
        className='spot-form-row' />
    );
  }

  streetAddress() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('street_address') }
        value={ this.state.street_address }
        placeholder="Street Address"
        className="spot-form-row" />
    );
  }

  cityStateRegionRow() {
    return (
      <div className='spot-form-row two'>

      </div>
    );
  }

    city() {
      return (
        <input
          type="text"
          onChange={ this.handleInputChange('city') }
          value={ this.state.city }
          placeholder="City"
          className="location-input-half" />
      );
    }

    stateRegion() {
      return (
        <input
          type="text"
          onChange={ this.handleInputChange('state_region') }
          value={ this.state.state_region }
          placeholder="State/Region"
          className="location-input-half" />
      );
    }

    countryPostCode() {
      return (
        <div className="spot-form-row two">

        </div>
      );
    }

      country() {
        return (
          <input
            type="text"
            onChange={ this.handleInputChange('country') }
            value={ this.state.country }
            placeholder="Country"
            className="location-input-half" />
        );
      }

      postCode() {
        return (
          <input
            type="text"
            onChange={ this.handleInputChange('post_code') }
            value={ this.state.post_code }
            placeholder="Post Code"
            className="location-input-half" />
        );
      }

  handleSubmit(e) {
    e.preventDefault();
    const spot = this.state;
    this.props.processForm( spot );

    this.setState({
        host_id: this.props.currentUser.id,
        host_name: this.props.currentUser.first_name,
        title: "",
        country: "",
        state_region: "",
        city: "",
        post_code: "",
        street_address: "",
        price_per_night: "",
        room_type: "Entire Place",
        bed_count: '',
        max_guests: ''
    });

    this.handleSpotFormClose();
    window.location.reload();
  }

  spotForm() {
    return (
      <form className="spotForm" onSubmit={this.handleSubmit}>

        { this.bedGuestContainer() }




        <button className="form-submit">Create</button>
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.spotFormContainer() }
      </div>
    );
  }
}

export default withRouter(SpotForm);
