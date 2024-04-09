const {
  is,
  isAny
} = require('bpmnlint-utils');
module.exports = function () {
  function check(node, reporter) {
    if (is(node, 'bpmn:EndEvent')) {
      const messageEventDefinition = node.eventDefinitions || []
      if (messageEventDefinition.length > 0 && messageEventDefinition[0].$type == 'bpmn:MessageEventDefinition') {
        if ((Object.keys(messageEventDefinition[0].$attrs).length === 0)) {
          reporter.
            report(node.eventDefinitions, 'No message given');
        }
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