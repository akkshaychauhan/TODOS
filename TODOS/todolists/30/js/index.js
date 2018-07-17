var data = {
	task: "",
	taskList: []
};
Vue.component('task-item', {
	props: ['text', 'number', 'status'],
	data: function() {
		return data;
	},
	methods: {
		removeTask: function() {
			data.taskList.splice(this.number, 1)
		},
		toggleStatus: function() {
			data.taskList[this.number].completed = !data.taskList[this.number].completed
		}
	},
	template: "<transition name='fade'><div class='task'><p class='left' :class='{complete: status}'>{{text}}</p><p class='right'><i class='fa fa-check-circle-o' aria-hidden='true' @click='toggleStatus'></i><i class='fa fa-times-circle-o' aria-hidden='true' @click='removeTask'></i></p></div></transition>"
});

var app = new Vue({
	el: '#todoList',
	data: data,
	methods: {
		addTask: function() {
			if (this.task.length > 0) {
				this.taskList.push(new Task(this.task));
				this.task = "";
			}
		},
		saveList: function() {
			var json_str = JSON.stringify(this.taskList);
			createCookie('taskListString', json_str);
		},
		getList: function() {
			var json_str = readCookie('taskListString');
			if (json_str != null) {
				var parsed = JSON.parse(json_str);
				this.taskList = parsed;
			}
		}
	},
	beforeMount() {
		this.getList();
	},
	updated() {
		this.saveList();
	}
});

var Task = function(t) {
	this.text = t;
	this.completed = false;
}

/* COOKIE FUNCTION */
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

/* Handler for hitting enter instead of using button */
function handleKeyUp(e) {
	var key = e.keyCode;
	if(key == 13) {
		 app.addTask();
		 }
}