import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AddTodo } from './AddTodo';
import { addTodo } from '../actions';

configure({adapter: new Adapter()});

describe('<AddTodo />', () => {

	test('dispatch function is not called on form submit if input is empty', () => {
		const mockFunction = jest.fn();
		const wrapper = mount(<AddTodo dispatch={mockFunction} />);
		wrapper.find('form').simulate('submit', new Event('submit'));

		expect(mockFunction).not.toHaveBeenCalled();
	});

	test('dispatch function is called on form submit if input has a value', () => {
		const mockFunction = jest.fn();
		const wrapper = mount(<AddTodo dispatch={mockFunction} />);
		wrapper.find('input').instance().value = 'input value';
		wrapper.find('form').simulate('submit', new Event('submit'));

		expect(mockFunction).toHaveBeenCalled();
	});

});

