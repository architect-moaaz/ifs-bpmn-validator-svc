
const {
    is,
    isAny
  } = require('bpmnlint-utils');

  module.exports = function() {

    function check(node, reporter) {
     // if (is(node.$parent,  'bpmn:ExclusiveGateway')) {
      if(is(node,'bpmn:ExclusiveGateway')){}
        const name = (node.name || '').trim();

    if (name.length === 0) {
      reporter.report(node.id, 'Element is missing label/name', [ 'name' ]);
    }
  
      }
    
return { check };
  };
