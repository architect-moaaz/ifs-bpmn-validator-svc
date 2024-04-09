const {
  is,
  isAny
} = require('bpmnlint-utils');

module.exports = function () {
function check(node, reporter) {
    if (is(node, 'bpmn:IntermediateCatchEvent')) {
      const escalationEventDefinition = node.eventDefinitions || []
      if (escalationEventDefinition.length > 0 && escalationEventDefinition[0].$type ==
        'bpmn:EscalationEventDefinition') {
        if (Object.keys(escalationEventDefinition[0].$attrs).length === 0) {
          reporter.report(node.eventDefinitions, 'Node null[2] Event should specify an event type');
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