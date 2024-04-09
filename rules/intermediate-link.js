const {
  is,
  isAny
} = require('bpmnlint-utils');

module.exports = function () {
  function check(node, reporter) {
    if (is(node, 'bpmn:IntermediateCatchEvent')) {
      const linkEventDefinition = node.eventDefinitions || []
      if (linkEventDefinition.length > 0 && linkEventDefinition[0].$type == 'bpmn:LinkEventDefinition')
        if (Object.keys(linkEventDefinition[0].$attrs).length === 0) {
          reporter.report(node.eventDefinitions, ' These nodes do not have a name {_4F0DF1F2-3C95-4523-95AD-48654657632A} for process');
        }
    }
  }
  return {
    check
  };
};