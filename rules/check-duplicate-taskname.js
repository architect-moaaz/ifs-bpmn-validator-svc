const {
  is,
} = require('bpmnlint-utils');
module.exports = function () {
  const encounteredTaskNames = [];

  function check(node, reporter) {
    if (is(node, 'bpmn:UserTask')) {
      const userTaskName = node.name || 'Unnamed Task';
      let formattedUserTaskName = userTaskName; 
      if (userTaskName.includes(' ')) {
        formattedUserTaskName = userTaskName.replace(/\s+/g, ''); 
      }

      if (formattedUserTaskName.length > 1 && encounteredTaskNames.includes(formattedUserTaskName)) {
        reporter.report(node.name,"Duplicate userTask found: " + formattedUserTaskName);
      }
      encounteredTaskNames.push(formattedUserTaskName);

      let assignmentData = ''; 
      if (node.dataInputAssociations) {
        for (const association of node.dataInputAssociations) {
          if (
            association.targetRef &&
            association.targetRef.name === 'TaskName' &&
            association.assignment
          ) {
            for (const assignment of association.assignment) {
              if (assignment.from && assignment.from.body) {
                assignmentData = assignment.from.body;
              }
            }

            let formattedAssignmentData = assignmentData; 
            if (assignmentData.includes(' ')) {
              formattedAssignmentData = assignmentData.replace(/\s+/g, ''); 
            }

            if (formattedAssignmentData !== formattedUserTaskName) {
              reporter.report(node.name,"Taskname and userTask cannot be different");
            }
          }
        }
      }
    }
  }

  function getDuplicateTaskNames() {
    const duplicateTaskNames = [];
    const taskCountMap = {};

    for (const taskName of encounteredTaskNames) {
      taskCountMap[taskName] = (taskCountMap[taskName] || 0) + 1;
      if (taskCountMap[taskName] > 1 && !duplicateTaskNames.includes(taskName)) {
        duplicateTaskNames.push(taskName);
      }
    }

    return duplicateTaskNames;
  }

  return {
    check: check,
    getDuplicateTaskNames: getDuplicateTaskNames,
  };
};
