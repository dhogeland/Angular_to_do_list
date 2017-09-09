angular.module('app')
  .directive('inputField', function() {
    return {
      templateUrl: "JS/directive/input/input.html",
    }
  })
  .directive('toDoTask', function() {
    return {
      templateUrl: "JS/directive/toDoTask/toDoTask.html",
    }
  })
  .directive('completedTask', function() {
    return {
      templateUrl: "JS/directive/completedTask/completedTask.html",
    }
    })
