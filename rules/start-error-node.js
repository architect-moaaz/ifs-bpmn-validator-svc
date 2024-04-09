const {
    is,
    isAny
  } = require('bpmnlint-utils');
   module.exports = function () {
   function check(node, reporter) {
      if (is(node, 'bpmn:StartEvent')) {
        const errorEventDefinition = node.eventDefinitions || []
        if ( errorEventDefinition.length>0 && errorEventDefinition[0].$type == 'bpmn:ErrorEventDefinition'){
        if (Object.keys(errorEventDefinition [0].$attrs).length === 0 ) {
     reporter.report(node.errorEventDefinition , 'Signal Trigger information is not complete TriggerMetaData [name=null, type=Signal, dataType=null, modelRef=null, ownerId=3');
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