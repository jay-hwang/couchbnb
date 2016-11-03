import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../modal/modal_style';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      modalOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.loginModal = this.loginModal.bind(this);
    this.signupModal = this.signupModal.bind(this);
  }

  modal() {
    return (
      <Modal isOpen={this.state.modalOpen}
             onRequestClose={this.closeModal}
             style={ModalStyle}>
          {<SessionFormContainer loginForm={this.state.login}/>}
      </Modal>
    );
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  loginModal() {
    return (
      <div className="header-login" onClick={this.openModal}>
        <p>Log In</p>
      </div>
    );
  }

  signupModal() {
    return (
      <div className="signup" onClick={this.openModal}>
        <p>Sign Up</p>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.processForm({user})) {
      this.props.router.replace('home');
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const errors = this.props.errors;
    let errorsLi;
    if (errors) {
      errorsLi = errors.map((error, i) => (
        <li key={i}>{error}</li>
      ));
    }

    const nameInputFields = () => {
      return(
        <div className="name-input-fields">
          <label>
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.handleChange('first_name')}
              placeholder="First Name"
            />
          </label>

          <label>
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.handleChange('last_name')}
              placeholder="Last Name"
            />
          </label>
        </div>
      );
    };

    const toggleForm = this.props.loginForm === false ? "Log In" : "Sign Up";
    const formHeader = this.props.loginForm === true ? "Log In" : "Sign Up";

    return(
      <div className="modal">
        { this.props.loginForm === false ? this.signupModal() : this.loginModal() }

        <Modal isOpen={this.state.modalOpen}
               onRequestClose={this.closeModal}
               style={ModalStyle}>
          <div>

            <form onSubmit={this.handleSubmit}>
              <div className="session-form-header">
                <h2 className="session-form-type">{formHeader}</h2>
              </div>

              <ul>
                {errorsLi}
              </ul>

              { this.props.loginForm === false ? nameInputFields() : ""}

              <label className="input">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  placeholder="Email"
                />
              </label>

              <label className="input">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  placeholder="Password"
                />
              </label>

              <button className="form-submit">{formHeader}</button>

              <div className="toggle-form">
                <p>
                  Not a member yet? <Link to={toggleForm}>{toggleForm}</Link>
                </p>
              </div>
            </form>

          </div>
        </Modal>

      </div>
    );
  }
}

export default withRouter(SessionForm);
