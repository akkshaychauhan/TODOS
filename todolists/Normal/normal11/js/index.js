$(document).ready(function(){
  $('.btn--menu').click(function(e){
    e.preventDefault();
    $(this).parents().find('.settings').toggleClass('menu-opened');
    $(this).toggleClass('actived');
  })
});

//On déclare l'application
var app = angular.module('app', []);

app.controller('TodoCtrl', ['$scope', '$filter', function ($scope, $filter){
	addTodoDB = function(todoText) {
		db.transaction(function(tx){
			var addedOn = new Date();
			tx.executeSql("INSERT INTO todo(todo, added_on, complete) VALUES (?,?,?)",
				[todoText, addedOn, false],
				onSuccesss,
				onErrorr);
		});
	}
	onErrorr = function(tx, e) {
		alert("There has been an error: " + e.message);
	}
	onSuccesss = function(tx, r) {
		// re-render the data.
		getAllTodoItems();
	}
	getAllTodoItems = function() {
		$scope.todos = [];
		db.transaction(function(tx) {
			tx.executeSql("SELECT * FROM todo", [], function(tx, rs){
				for (var i=0; i < rs.rows.length; i++) {
					$scope.$apply(function () {
            $scope.todos.push({
              id : rs.rows.item(i).ID,
              text : rs.rows.item(i).todo,
              date : rs.rows.item(i).added_on,
              complete : rs.rows.item(i).complete
            })
          });
				}
			},
			onErrorr);
		});
	}
	$scope.deleteTodo = function(id) {
		db.transaction(function(tx){
			tx.executeSql("DELETE FROM todo WHERE ID=?", [id],
				onSuccesss,
				onErrorr);
		});
	}
	$scope.addTodo = function() {
		var text = $scope.todoText.trim();
		if(text != ''){
			addTodoDB(text);
			$scope.todoText = "";
		}
	}
	$scope.updateTodo = function(id, complete){
		var completed;
		if(complete == 'false'){
			completed = true;
		}
		else{
			completed = false;
		}
		db.transaction(function(tx){
			tx.executeSql("UPDATE todo SET complete= ?  WHERE ID=?", [completed, id],
				onSuccesss,
				onErrorr);
		});
	}
	$scope.testAllComplete = function(){
		if($scope.remaining == 0){
			completed = false;
			db.transaction(function(tx){
			tx.executeSql("UPDATE todo SET complete= ?", [completed],
				onSuccesss,
				onErrorr);
			})
			
		} //Si tous les todos sont marqués comme NON FAIT en BDD, on les passe topus à FAIT
		else{
			completed = true;
			db.transaction(function(tx){
			tx.executeSql("UPDATE todo SET complete= ?", [completed],
				onSuccesss,
				onErrorr);
			})
		}
	}

	//permet de vider toute la base 
	$scope.emptyTodo = function(){
		angular.forEach($scope.todos, function(todo){
			if(todo.complete == 'true'){
				db.transaction(function(tx){
				tx.executeSql("DELETE FROM todo WHERE id =?", [todo.id]);
				});
			}
		});
		getAllTodoItems();
	}
	$scope.$watch('todos', function(){
    //$scope.remaining = $scope.todos.length;
		$scope.remaining = $filter('filter')($scope.todos, {complete:"false"}).length;
		if($scope.remaining == 0 && $scope.todos.length !=0 ){
			$scope.allMarked = true;
		}
		else{
			$scope.allMarked = false;
		}
	}, true)


	init = function () {
		var dbSize = 5 * 1024 * 1024; // 5MB
		db = openDatabase("Bonjour", "1.0", "Todo list", dbSize);

		db.transaction(function(tx) {
			tx.executeSql("CREATE TABLE IF NOT EXISTS todo(ID INTEGER PRIMARY KEY, todo TEXT, added_on DATETIME, complete BOOLEAN)", []);
		});
		getAllTodoItems();
	}
	//on vide le tableau par précaution
	$scope.todos = [];
	//variable globale pour acceder au nom la base de donnée
	var db;

	init();
}])

app.controller('SettingsCtrl', ['$scope', function ($scope){
  
  onSuccess = function(){
    console.log("Update success");
  }
  onError = function(){
    console.log("Update failed");
  }
  getAllSettings = function() {
		$scope.settings = [];
		db.transaction(function(tx) {
			tx.executeSql("SELECT * FROM settings WHERE id= ?", [1], function(tx, rs){
				for (var i=0; i < rs.rows.length; i++) {
					$scope.$apply(function () {
            $scope.settings.push({
              id : rs.rows.item(i).ID,
              bgUrl : rs.rows.item(i).url,
              date : rs.rows.item(i).added_on
            })
          });
				}
			},
			onErrorr);
		});
    console.log($scope.settings);
	}
  //Init the newsettings table
  init = function () {
		var dbSize = 5 * 1024 * 1024; // 5MB
		db = openDatabase("Bonjour", "1.0", "Todo list", dbSize);

		db.transaction(function(tx) {
			tx.executeSql("CREATE TABLE IF NOT EXISTS settings(ID INTEGER PRIMARY KEY, url TEXT, added_on DATETIME)", []);
		});
		getAllSettings();
    console.log($scope.settings);
    //Init Bg : todo : test if the value exist in db, update le body bg image if exist; else set a default image
    var url;
    if(!$scope.settings.bgUrl){
      console.log('ddd');
      url="http://www.quentinmorel.fr/wp-content/uploads/angular_todo_bg.jpg";
      db.transaction(function(tx) {
      	tx.executeSql("INSERT INTO settings(url) VALUES (?)",[url]);
      });
    }
    else{
      url= $scope.settings.bgurl;
    }
    $('body').css('background-image', 'url('+ url +')');
	}
	$scope.updateUrl = function(){
    //Save the news url in the db
		db.transaction(function(tx){
			tx.executeSql("UPDATE settings SET url= ? WHERE ID=?", [$scope.settings.bgUrl, 1],
				onSuccess,
				onError);
		});
    getAllSettings();
    $('body').css('background-image', 'url('+ $scope.settings.bgUrl +')');
  }
  var db; 
  init();
}])


app.controller('MainCtrl', ['$scope', function ($scope){
}])