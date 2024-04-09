const {
  is,
  isAny
} = require('bpmnlint-utils');
module.exports = function () {
  function check(node, reporter) {
    if (is(node, 'bpmn:ExclusiveGateway')) {
     const outgoing = node.outgoing || []
      outgoing.forEach((flow) => {
        
  if(outgoing[0] && outgoing[1] &&outgoing[0].conditionExpression && outgoing[1].conditionExpression && outgoing[0].conditionExpression.body && outgoing[1].conditionExpression.body ) {
      if(outgoing[0].conditionExpression.body == outgoing[1].conditionExpression.body) {
          reporter.report(flow.id, 'Unknown gateway directions Unspecified', ['conditionExpression']);
        }
  }
      });
    }
  }
  return {
    check
  };

};


