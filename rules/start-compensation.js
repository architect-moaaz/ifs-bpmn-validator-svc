const {
  is,
  isAny
} = require('bpmnlint-utils');
module.exports = function () {
  function check(node, reporter) {
    if (is(node, 'bpmn:StartEvent')) {
      const compensateEventDefinition = node.eventDefinitions || []
      if (compensateEventDefinition.length > 0 && compensateEventDefinition[0].$type == 'bpmn:CompensateEventDefinition')
        if (Object.keys(compensateEventDefinition[0].$attrs).length === 0) {
          reporter.report(node.eventDefinitions, 'Error while elaborating process id');
        }
        else {
          return;
        }
    }
  }
  return {
    check
  };
};