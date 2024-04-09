const {
  is,
  isAny
} = require('bpmnlint-utils');
module.exports = function () {
  function check(node, reporter) {
    if (is(node, 'bpmn:IntermediateCatchEvent')) {
      const errorEventDefinition = node.eventDefinitions || []
      if (errorEventDefinition.length > 0 && errorEventDefinition[0].$type == 'bpmn:ErrorEventDefinition') {
        if (Object.keys(errorEventDefinition[0].$attrs).length === 0) {
          reporter.report(node.eventDefinitions, 'Node null [2] Event should specify an event type');
        }

        else {
          return;
        }
      }
    }
  }
  return {
    check
  };
};