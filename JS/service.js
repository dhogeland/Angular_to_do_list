angular.module('app').controller('ctrl').service('srv', function() {

    // ESTABLISHES THE 'TASKLIST' AS AN ARRAY
    this.taskList = [];

    // FUNCTION ESTABLISHED TO ACCEPT A TASK
    // AND ADD IT TO THE 'TASKLIST'
    const updatingList = aTask => {
      return this.taskList.push(aTask)
    };

    // RECEIVES THE 'TASK' FROM THE CONTROLLER'S LINE 10
    // WHICH IS PROVIDED BY THE INPUT FIELD LOCATED
    // ON THE 'INPUT' DIRECTIVE LINE 7
    this.addTask = task => {
      // TAKES THE PROVIDED PARAMETER AND
      // SETS IT TO A NEW OBJECT
      let theTask = {
        task,
        id: this.taskList.length,
        completed: false
      };
      // RETURNS A CALL TO 'UPDATINGLIST' FUNCTION
      // ON LINE 8 THAT ADDS AN ITEM TO THE 'TASKLIST'
      // USING 'THETASK' OBJECT CREATED WITH
      // THE 'TASK' PARAMETER
      return updatingList(theTask);
    };

    // FUNCTON ESTABLISHED TO CHANGE THE 'COMPLETED'
    // PROPERTY FOR A GIVEN TASK CALLED FROM
    // CONTROLLER'S LINE 27
    this.updatingCompletedProperty = (aList, aTask) => {
      // ESTABLISHES A NEW ARRAY TO PUSH EACH
      // TASK INTO
      let updatedList = [];
      // CYCLES THROUGH EACH ITEM IN THE
      // PROVIDED LIST
      aList.forEach(eachTask => {
        // WHEN A LIST ITEM MATCHES THE
        // PROVIDED TASK'S 'ID' PROPERTY
        if (Object.is(eachTask.id, aTask.id)) {
          // THAT ITEM'S 'COMPLETED' PROPERTY
          // IS SET TO THE OPPOSITE BOOLEAN VALUE
          eachTask.completed = !aTask.completed;
        };
        // EACH ITEM IS THEN ADDED TO THE
        // 'UPDATEDLIST' ARRAY
        updatedList.push(eachTask);
      });
      // AFTER EACH ITEM HAS BEEN CHECKED
      // THE 'UPDATEDLIST' IS SET TO THE
      // 'TASKLIST' AND RETURNED
      return this.taskList = updatedList;
    };

})
