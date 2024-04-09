const {
  is,
  isAny
} = require('bpmnlint-utils');
module.exports = function () {

  function check(node, reporter) {
    if (is(node, 'bpmn:InclusiveGateway')) {
      const outgoing = node.outgoing || [];
      outgoing.forEach((flow) => {
        const missingCondition = (
          !hasCondition(flow)

        );
        if (missingCondition) {
          reporter.report(flow.id, 'Sequence flow is missing condition', ['conditionExpression']);
        }
      });
    }
  }
  return {
    check
  };

};

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

