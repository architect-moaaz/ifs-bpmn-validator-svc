const {
  is,
  isAny
} = require('bpmnlint-utils');

module.exports = function () {
  function check(node, reporter) {
    if (is(node, 'bpmn:IntermediateCatchEvent')) {
      const intermediateCatchEvent = node.eventDefinitions || []
      if (intermediateCatchEvent.length > 0 && intermediateCatchEvent[0].$type == 'bpmn:SignalEventDefinition')
        if (intermediateCatchEvent[0].signalRef == null) {
          reporter.report(node.eventDefinitions, '- Node null[3] Event should specify an event type');
        }
    }
  }
  return {
    check
  };
};