angular.module('app').controller('ctrl', function($scope, srv) {

  // INITIALIZES THE SCOPED 'TASKLIST' TO THE
  // SERVICE'S 'TASKLIST' ON SERVICE LINE 4
  $scope.taskList = srv.taskList;

  // TAKES THE 'TASK' FROM THE INPUT FIELD
  // LOCATED ON THE 'INPUT' DIRECTIVE AT LINE 7
  // AND SENDS IT TO THE SERVICE
  $scope.addTask = (task) => {
    // ADDING 'TASK' TO THE 'TASKLIST'
    // BY CALLING FUNCTION LOCATED ON
    // SERVICE'S LINE 15
    srv.addTask(task)
    // RESETS THE INPUT TO ''
    $scope.task = '';
    // UPDATES THE SCOPED 'TASKLIST'
    // TO THE SERVICE'S UPDATED 'TASKLIST'
    $scope.taskList = srv.taskList;
  };

  // SENDS THE 'TASK' TO THE SERVICE WHERE
  // IT'S 'COMPLETED' PROPERTY IS SET TO
  // THE OPPOSITE BOOLEAN VALUE, CALLED FROM
  // 'TODOTASK' DIRECTIVE LINE 10 &
  // 'COMPLETEDTASK' DIRECTIVE LINE 10
  $scope.updatingCompletedProperty = (task) => {
    // SETTING THE SCOPED 'TASKLIST' TO
    // 'THELIST' SO IT CAN BE PASSED AS
    // A PARAMETER
    let theList = $scope.taskList;
    // UPDATING THE TASK 'COMPLETED' PROPERTY
    // BY CALLING FUNCTION LOCATED ON
    // SERVICES'S LINE 33
    srv.updatingCompletedProperty(theList, task);
  };

});
