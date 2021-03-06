import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';

import toJson from 'enzyme-to-json';
import LoginForm from '../LogInForm';

describe('<LoginForm/>', () => {
  it('renders login form component', () => {
    const history = createBrowserHistory();
    const mockOnsubmit = jest.fn();
    const mockOnchange = jest.fn();
    const props = {
      closeModal: jest.fn()
    };
    const wrapper = mount(
      <Router history={history}>
        <LoginForm
          handleSignInSubmit={mockOnsubmit}
          handleChange={mockOnchange}
          signindata={{
            email: 'testsignin@gmail.com',
            errors: {}
          }}
          signInError={false}
          {...props}
        />
      </Router>

    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
