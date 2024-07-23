import TaskList from './TaskList.vue';

import * as TaskStories from './Task.stories';

export default {
	component: TaskList,
	title: 'TaskList',
	tags: ['autodocs'],
	decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
	args: {
		...TaskStories.ActionsData,
	}
}

export const Default = {
	args: {
		// Shaping the stories through args composition.
		// The data was inherited from the Default story in Task.stories.js.
		tasks: [
			{ ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
			{ ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
			{ ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
			{ ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
			{ ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
			{ ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
		],
	},
};

export const WithPinnedTasks = {
	args: {
		// Shaping the stories through args composition.
		// Inherited data coming from the Default story.
		tasks: [
			...Default.args.tasks.slice(0, 3),
			{ id: '4', title: 'Task 4 (pinned)', state: 'TASK_PINNED' },
			{ id: '5', title: 'Task 5 (pinned)', state: 'TASK_PINNED' },
			{ id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
		],
	},
};

export const Loading = {
	args: {
		tasks: [],
		loading: true,
	},
};

export const Empty = {
	args: {
		// Shaping the stories through args composition.
		// Inherited data coming from the Loading story.
		...Loading.args,
		loading: false,
	},
};

export const MuchoTasko = {
	args: {
		// Shaping the stories through args composition.
		// The data was inherited from the Default story in Task.stories.js.
		tasks: [
			{ ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
			{ ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
			{ ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
			{ ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
			{ ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
			{ ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
			{ ...TaskStories.Default.args.task, id: '7', title: 'Task 7' },
			{ ...TaskStories.Default.args.task, id: '8', title: 'Task 8' },
			{ ...TaskStories.Default.args.task, id: '9', title: 'Task 9' },
			{ ...TaskStories.Default.args.task, id: '10', title: 'Task 10' },
			{ ...TaskStories.Default.args.task, id: '11', title: 'Task 11' },
			{ ...TaskStories.Default.args.task, id: '12', title: 'Task 12' },
			{ ...TaskStories.Default.args.task, id: '13', title: 'Task 13' },
			{ ...TaskStories.Default.args.task, id: '14', title: 'Task 14' },
			{ ...TaskStories.Default.args.task, id: '15', title: 'Task 15' },
			{ ...TaskStories.Default.args.task, id: '16', title: 'Task 16' },
			{ ...TaskStories.Default.args.task, id: '17', title: 'Task 17' },
			{ ...TaskStories.Default.args.task, id: '18', title: 'Task 18' },
			{ ...TaskStories.Default.args.task, id: '19', title: 'Task 19' },
			{ ...TaskStories.Default.args.task, id: '20', title: 'Task 20' },
			{ ...TaskStories.Default.args.task, id: '21', title: 'Task 21' },
			{ ...TaskStories.Default.args.task, id: '22', title: 'Task 22' },
			{ ...TaskStories.Default.args.task, id: '23', title: 'Task 23' },
			{ ...TaskStories.Default.args.task, id: '24', title: 'Task 24' },
			{ ...TaskStories.Default.args.task, id: '25', title: 'Task 25' },
			{ ...TaskStories.Default.args.task, id: '26', title: 'Task 26' },
			{ ...TaskStories.Default.args.task, id: '27', title: 'Task 27' },
			{ ...TaskStories.Default.args.task, id: '28', title: 'Task 28' },
			{ ...TaskStories.Default.args.task, id: '29', title: 'Task 29' },

		],
	},
};