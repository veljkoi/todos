import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Link from './Link';

configure({adapter: new Adapter()});

describe('<Link />', () => {
	
	let wrapper;
	let props;

	beforeEach(() => {
		props = {
			active: true,
			children: '',
			onClick: () => {}
		};

		wrapper = shallow(<Link {...props}></Link>);
	});

	test('should render span if active', () => {
		expect(wrapper.find('span')).toHaveLength(1);
	});

	test('should render a link if not active', () => {
		props.active = false;
		wrapper.setProps(props);
		expect(wrapper.find('a')).toHaveLength(1);
	});

	test('onClick function gets called on link click', () => {
		props.active = false;

		const mockFunction = jest.fn();
		props.onClick = mockFunction;

		wrapper.setProps(props);

		wrapper.find('a').simulate('click', new Event('click'));

		expect(mockFunction).toHaveBeenCalled();
	});	

});