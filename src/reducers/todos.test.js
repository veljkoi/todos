import reducer from './todos';
import { addTodo, toggleTodo } from '../actions';

describe('todos reducer', () => {

	test('ADD_TODO action adds 1 item into store', () => {
		const todoAction = addTodo('test');
		
		const todo = {
			id: 0,
			text: 'test',
			completed: false
		};

		expect(reducer([], todoAction)).toEqual([todo]);
	});

	test('TOGGLE_TODO action toggles completed prop of a todo', () => {
		const toggleTodoAction = toggleTodo(0);

		const todo = {
			id: 0,
			text: 'test',
			completed: false
		};

		expect(reducer([todo], toggleTodoAction)).toEqual([{...todo, completed: true}]);
	});	

});