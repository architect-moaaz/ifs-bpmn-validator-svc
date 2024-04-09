const {
    is,
    isAny
  } = require('bpmnlint-utils');
   module.exports = function () {
   function check(node, reporter) {
      if (is(node, 'bpmn:IntermediateCatchEvent' )) {
        const intermediateCatchEvent = node.eventDefinitions || []
      if( intermediateCatchEvent.length>0 && intermediateCatchEvent[0].$type == 'bpmn:MessageEventDefinition' )
        if (Object.keys(intermediateCatchEvent [0].$attrs).length === 0 ) {
          reporter.report(node.intermediateCatchEvent, 'No  message found');
        }
      }
    }
    return {
      check
    };
  };