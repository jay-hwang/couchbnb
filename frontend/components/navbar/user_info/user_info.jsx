import React from 'react';
import { withRouter } from 'react-router';
import BookingForm from '../../booking/booking';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.userName = this.userName.bind(this);
    this.userPic = this.userPic.bind(this);
    this.userInfoItems = this.userInfoItems.bind(this);
    this.toggleUserInfoItems = this.toggleUserInfoItems.bind(this);

    this.displayLogout = this.displayLogout.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.displayHost = this.displayHost.bind(this);
    this.handleHost = this.handleHost.bind(this);
    this.handleBookings = this.handleBookings.bind(this);
  }

  userPic() {
    return (
      <div className="profile-pic-cont">
        <img
          className='profile-pic'
          src={this.props.currentUser.profile_pic_url}>
        </img>
      </div>
    );
  }

  userName() {
    return (
      <p>{ this.props.currentUser.first_name }</p>
    );
  }

  userInfoItems() {
    return (
      <div className="user-info-items hidden">
        { this.displayHost() }
        { this.displayBookings() }
        { this.displayLogout() }
      </div>
    );
  }

  toggleUserInfoItems() {
    $(".user-info-items").removeClass("hidden");
    $(".user-info-items").mouseleave(() => (
      $(".user-info-items").addClass("hidden")
    ));
  }

  handleLogout() {
    this.props.logout();
  }

  displayLogout() {
    return (
      <div className="user-info-item" onClick={this.handleLogout}>
        Log Out
      </div>
    );
  }

  handleHost() {
    this.props.router.push('host');
  }

  displayHost() {
    return (
      <div className="user-info-item" onClick={this.handleHost}>
        Host
      </div>
    );
  }

  handleBookings() {
    this.props.router.push('bookings');
  }

  displayBookings() {
    return (
      <div className="user-info-item" onClick={this.handleBookings}>
        My Trips
      </div>
    );
  }

  render() {
    return (
      <div className="user-info" onMouseEnter={ this.toggleUserInfoItems }>
        { this.userName() }
        { this.userPic() }
        { this.userInfoItems() }
      </div>
    );
  }
}

export default withRouter(UserInfo);
