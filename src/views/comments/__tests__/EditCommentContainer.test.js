import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { FormControl, Form } from 'react-bootstrap';
import Edit from '../EditCommentContainer';

describe('Tests EditCommentContainer', () => {
  const store = configureStore([thunk])({
    comments: { data: {comments: []}, error: {}}
  });
  const props = {
    editCommentAction: jest.fn(),
    id: 3,
    slug: 'string',
    placeholder: 'issa'
  };
  const history = createBrowserHistory();
  const wrapper = mount (
    <Router history={history}>
      <Provider store={store}>
        <Edit {...props} />
      </Provider>
    </Router>
  );
  it('tests mounting of container', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('tests input change in form', () => {
    const form = wrapper.find(Form);
    const input = form.find(FormControl);
    input.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'Test body',
        name: 'body'
      }
    });
    expect(input.length).toEqual(1);
  });
  it('tests submit of edit of comment', () => {
    const form = wrapper.find(Form);
    form.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(form.length).toEqual(1);
  });

});
