/*************************************

Need to add:
  -Delete and add function for all lists
  -working priority and due date
  -add due date to list objects
  -make add menu prettier
  -automatic updating as due date gets closer

**************************************/

$(function(){
  
    var doc         = document,
      addButton     = doc.getElementById("add"),
      allLists      = doc.getElementsByClassName("list"),
      listWrapper   = doc.getElementById("list"),
      allItems      = doc.getElementsByTagName("li"),
        
      addTask       = function() {
        
        var taskItem	= doc.createElement("li"),
            nameInput	= doc.getElementById("task-input").value,
            priInput	= $('input[name="priority"]:checked').val(),
            dateInput	= doc.getElementById("date-input").value;
        
        if (!nameInput.length) {
          
          alert("You need to enter a goal first.");
          
        } 
        
        else if ($('input[name=priority]:checked').length === 0) 
        {
          alert("You need to enter a Priority first.");
        }
        
        else if (!dateInput) 
        {
          alert("You need to enter a date first.");
        }     
                 
        
        else {
          // ".content" ).find( ".ci" ).css( "background-color", "red" );
          var day = dateInput.slice(8,10),
              month = dateInput.slice(5,7),
              today = new Date(),
              datePri = "";
          
          taskItem.innerHTML = month + "/" + day + " : " + nameInput +" <button class=\"delete\">Delete</button>";
          
          var list = getList(dateInput, priInput);
          
          allLists[list].appendChild( taskItem );
          
          doc.getElementById("task-input").value = "";
         $('input[name=priority]').attr('checked',false);
          
          loadRemoveOptions();
          
        }
        
      },

      loadRemoveOptions	= function() {
      for(var j = 0; j < 9; j++){
          var allDelButtons = allLists[j].getElementsByTagName("button");
          for (var i = 0, l = allItems.length; i < l; i++) {
            allDelButtons[i].addEventListener("click", removeTask, false);
          }
      }
      },
      getList	= function(dateInput, priInput) {
        var   day = dateInput.slice(8,10),
              month = dateInput.slice(5,7),
              today = new Date();
        
        switch(priInput) {
          case "i":
              var priList = [0, 1, 2];
              break;
          case "s":
              var priList = [3, 4, 5];
              break;
          case "w":
              var priList = [6, 7, 8];
              break;
          default:
              alert("something dun goofed");
              break;
        }
        
        if ((month-1) - today.getMonth() < 2)
            return priList[0];
        else if ((month-1) - today.getMonth() < 4)
            return priList[1];
        else
            return priList[2];       
      },  
      removeTask = function() {
        
        var taskToDelete = this.parentNode,
            confirmRemoval = confirm("This action is irreversible. Are you sure you want to delete this task?");
        
        /* codepen kills alerts so replaced with a simplified version
				if (confirmRemoval) {
					
					taskToDelete.outerHTML = "";
					
					if (!allItems.length) {
						notification.remove("hidden");
					}
     
				}
    */
      taskToDelete.outerHTML = "";    
    };
  
  addButton.addEventListener("click", addTask, false);
  
  $("[data-toggle]").click(function(){
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
  });
  
  loadRemoveOptions();

  $(".swipe-area").swipe({
    swipeStatus: function(event, phase, direction, distance, duration, fingers){
      if (phase == "move" && direction == "right"){
        $(".container").addClass("open-sidebar");
        return false;
      }
      if (phase == "move" && direction == "left"){
        $(".container").removeClass("open-sidebar");
        return false;
      }
    }
  });
  
});