import React from 'react';
import renderer from 'react-test-renderer';

import Todo from './Todo';

describe('<Todo/>', () => {

	test('renders with line-trough if completed', () => {
		const todo = {
			onClick: () => {},
			text: 'test',
			completed: true
		};
		const tree = renderer.create(<Todo {...todo}/>).toJSON();
		expect(tree).toMatchSnapshot();
	});

});