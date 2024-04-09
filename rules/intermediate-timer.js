const {
    is,
    isAny
  } = require('bpmnlint-utils');
  
  module.exports = function () {
  
    function check(node, reporter) {
      if (is(node, 'bpmn:IntermediateCatchEvent')) {
        const timerEventDefinition = node.eventDefinitions || []
        if( timerEventDefinition.length>0 && timerEventDefinition[0].$type == 'bpmn:TimerEventDefinition') {
         if ((timerEventDefinition[0].timeDate === undefined)) {
         reporter.report(node.eventDefinitions, 'Node Start [3] Has timer with no delay or date specified.');
   }
    }
        else{
          return;
        }
      }
    }
    return {
      check
    };
  };