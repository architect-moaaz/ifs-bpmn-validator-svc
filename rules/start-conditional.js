const {
    is,
    isAny
  } = require('bpmnlint-utils');
  
  module.exports = function () {
   function check(node, reporter) {
      if (is(node, 'bpmn:StartEvent')) {
        const conditionalEventDefinition = node.eventDefinitions || []
        if(conditionalEventDefinition.length>0 && conditionalEventDefinition[0].$type =='bpmn:ConditionalEventDefinition' ){
        if( (conditionalEventDefinition[0].condition.body  == null )) {
          reporter.report(node.eventDefinitions , 'Error while elobrationg process');
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