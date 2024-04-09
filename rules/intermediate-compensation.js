const {
    is,
    isAny
  } = require('bpmnlint-utils');
   module.exports = function () {
     function check(node, reporter) {
      if (is(node, 'bpmn:IntermediateCatchEvent')) {
        const compensateEventDefinition = node.eventDefinitions || []
        if ( compensateEventDefinition.length>0 && compensateEventDefinition[0].$type == 
            'bpmn:CompensateEventDefinition'){
        if (Object.keys(compensateEventDefinition [0].$attrs).length === 0 ) {
          reporter.report(node.eventDefinitions , 'Node null [2] Event should specify an event type');
        }
  else{
          return;
        }
      }  
       }
  }
    return {
      check
    };
  };