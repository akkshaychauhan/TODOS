$(document).on('ready', function(){
	var todo = $(localStorage.getItem('todo'));
	var done = $(localStorage.getItem('done'));
	
	if (todo.length > 0) {
		$('.todo_todo').html(todo);
	}
	if (done.length > 0) {
		$('.todo_done').html(done);
	}
});

$(document).on('click', 'a', function(e){
	e.preventDefault();
	
	switch ($(this).data('action')) {
		case ('add'):
				var val = $(this).parent().find('.todo_new').html() || false;
				if (val) {
					$('<div class="todo_item"><a href="#" class="ico-" data-action="check" aria-checked="false" role="checkbox">c</a><div class="todo_task" contenteditable>'+val+'</div><a href="#" class="ico-" data-action="del">x</a></div>').appendTo('.todo_todo');
					$(this).parent().find('.todo_new').html('');
				}
				console.log('add', 'done');
			break;
		
		case ('del'):
				$(this).parent().remove();
				console.log('del', 'done');
			break;
			
		case ('check'):		
				$(this).html('v').data('action','uncheck').attr('aria-checked', true).parent().find('.todo_task').attr('contenteditable', false).parent().detach().appendTo('.todo_done');
			
				console.log('check', 'done');
			break;
		
		case ('uncheck'):	
				$(this).html('c').data('action','check').attr('aria-checked', false).parent().detach().appendTo('.todo_todo').parent().find('.todo_task').attr('contenteditable', true);
				console.log('uncheck', 'done');
			break;
	}
	
	localStorage.setItem('todo', $('.todo_todo').html());
	localStorage.setItem('done', $('.todo_done').html());
});