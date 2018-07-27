//check checkbox to complete todo
$("ul").on("click", "#last", function() {
	$(this).parent().find("input:text").toggleClass("completed");
	$(this).find("i:last").toggleClass("fa-square-o fa-check-square-o");
});

//delete todos via x icon
$("ul").on("click", "#first", function(event) {
	$(this).parent().fadeOut('500',function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//delete empty todos via backspace
$("ul").on("keyup", ".todo", function(event) {
	//if backspace on empty text input
	if(event.which === 8 && $(this).val() === "") {
		$(this).parent().fadeOut('.5',function(){
			$(this).remove();
		});	
	}	
		event.stopPropagation();
});

//add new todo
$("#new-todo").on("keypress", function(event) {
	if(event.which === 13) {
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span id='first'><i class='fa fa-times' aria-hidden='true'></i></span><span id='last'><i class='fa fa-square-o'></i></span><input class='todo' type='text' value='" +newTodo+ "'></li>");
	}
});