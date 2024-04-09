const {
  is,
  isAny
} = require('bpmnlint-utils');

// * This rule checks BPMN diagrams to ensure that outgoing sequence flows from
// * exclusive gateways (bpmn:ExclusiveGateway) have conditions defined.
// * It validates if any outgoing sequence flow is missing a condition.

module.exports = function () {

  function check(node, reporter) {
    if (is(node, 'bpmn:ExclusiveGateway')) {

      const outgoing = node.outgoing || [] 
      outgoing.forEach((flow) => {
        const missingCondition = (
          !hasCondition(flow)

        );
          
    
        if (missingCondition) {
          reporter.report(flow.id, 'Sequence flow is missing condition');
        }
        
       
      });
      if (outgoing.length === 0) {
        reporter.report(node.id,"exclusive gateway should have outgoing connection");
    }
    }
  }
  return {
    check
  };

};

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

