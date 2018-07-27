var counter = 3;

// 🍊🍊🍊🍊🍊 NAVBAR ANIMATION 🍊🍊🍊🍊🍊
$('.todo_select li').click(function () {
        var choose = $( this ).index() + 1;

        // add tag class
        $('.todo_select li').removeClass('active');
        $( this ).addClass('active');
        // add content class
        $('.todo_content div').removeClass('active');
        $( '.todo_content div:nth-child(' + choose + ')' ).addClass('active');
});

// 🍆🍆🍆🍆🍆 TODO Pages ANIMATION 🍆🍆🍆🍆🍆
$('.info_btn').click(function(){
        $('.info_btn').removeClass('active');
        $('.info_init').addClass('active');
});

$('form .remove_input').click(function(){
        $('.todo_info').children().removeClass('active');
        $('.info_btn').addClass('active');
});

// 🍋🍋🍋🍋🍋 MOVING TOODs 🍋🍋🍋🍋🍋
$('.content_add .todo_tips').on('click', '.del-btn', function() {
        todo_number = ('.' + $( this ).parent().parent().attr('class') );
        $(todo_number).remove();
        Record();
});

$('.content_add .todo_tips').on('click', '.edit-btn', function() {
        todo_number = $( this ).parent().parent().attr('class');
        todo_migration = $( this ).parent().parent().children('p').text();
        $('.todo_info').children().removeClass('active');
        $('.info_update').addClass('active');

        // get data into Update input
        todo_migration = todo_migration.substring(2);
        $('.info_update form #todo_update').val( todo_migration );
        //Update(todo_number);
  $("#todo_update_id").val(todo_number);
});

$('.content_pending .todo_tips').on('click', '.btn', function() {
        // remove form Pending , also record # of todo.
        todo_number = $( this ).parent().parent().attr('class');
        todo_migration = $( this ).parent().parent().children('p').text();
        $( this ).parent().parent().remove();

        // join to Done
        $('.content_done .todo_tips ul').append('<li class=' + todo_number + '><p>' + todo_migration + '</p><div class="btn-group"><div class="btn">Not done?</div></div></li>');
        Record();
});

$('.content_done .todo_tips').on('click', '.btn', function() {
        // remove from Done, also record # of record.
        todo_number = $( this ).parent().parent().attr('class');
        todo_migration = $( this ).parent().parent().children('p').text();
        $( this ).parent().parent().remove();

        // join to Pending.
        $('.content_pending .todo_tips ul').append('<li class=' + todo_number + '><p>' + todo_migration + '</p><div class="btn-group"><div class="btn">Done?</div></div></li>');
        Record();
});

// 🌽🌽🌽🌽🌽 SUBMIT FUNC. 🌽🌽🌽🌽🌽
$( "#create_form" ).submit(function( event ) {
        var todo_content = $( "#todo_input").val()
        if ( todo_content.length > 3 ) {
                var new_todo =  '<li class=todo_' + counter + '><p>- ' + todo_content + '</p><div class="btn-group"><div class="btn del-btn"><i class="fa fa-trash" aria-hidden="true"></i></div><div class="btn edit-btn"><i class="fa fa-pencil" aria-hidden="true"></i></div></div></li>'
                var new_pending =  '<li class=todo_' + counter + '><p>- ' + todo_content + '</p><div class="btn-group"><div class="btn">Done?</div></div></li>'
                $('.content_add .todo_tips ul').append(new_todo);
                $('.content_pending .todo_tips ul').append( new_pending );
                $('#todo_input').val("");
                counter+=1;
                Record();
        } else {
                alert("from create: too less word! make it long > 3");
        }
        event.preventDefault();
});

        $( "#update_form" ).submit(function( event ){
    id=$("#todo_update_id").val();
    alert(id);
                alert($( "#todo_update").val());
                var todo_content = '- ' + $( "#todo_update").val()
                if ( todo_content.length > 3 ) {
                        $( '.' + id ).children('p').text(todo_content);
                        $('#todo_update').val("");
                } else {
                        //alert("from  update: too less word! make it long > 3, " + id);
                return;
                }
                $('.todo_info').children().removeClass('active');
                $('.info_btn').addClass('active');
                event.preventDefault();
        });

// 🔥🔥🔥🔥🔥 MONITOR for # todo tips 🔥🔥🔥🔥🔥
function Record() {
        if($('.content_add .todo_tips ul li').size() === 0){
                $('.info_btn').text('New thing todo?');
        } else {
                todo_done = $('.content_done .todo_tips ul li').size();
                todo_all = $('.content_add .todo_tips ul li').size();
                $('.info_btn').text( todo_done + '/' + todo_all);
        }
}