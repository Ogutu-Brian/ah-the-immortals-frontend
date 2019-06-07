import React from 'react';
import { Modal, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from './FormComponent';
import '../../styles/style.css';
import SocialComponent from '../Login/SocialComponent';


const SignupModal = ({ show, closeModal, handleSubmit, handleChange, facebook, twitter, google }) => {
  return (
    <Modal
      show={show}
      onHide={closeModal}
    >
      <Modal.Header
        closeButton
      >
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="shadow-lg p-3 mb-5 bg-light rounded form-div">
          <p>Sign Up</p>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <h2><span className="bg-light">OR</span></h2>
          <div className="round-icon">
            <SocialComponent
              facebook={facebook}
              google={google}
              twitter={twitter}
            />
          </div>
        </div>
        <div className="link-text">
          <p>
            Have an account?       .
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

SignupModal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  facebook: PropTypes.func.isRequired,
  google: PropTypes.func.isRequired,
  twitter: PropTypes.func.isRequired,
};

export default SignupModal;