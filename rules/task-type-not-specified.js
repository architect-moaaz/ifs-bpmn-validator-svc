   
  /**
   * Rule that specifie task type not given
   */
  const { is, isAny } = require("bpmnlint-utils");

module.exports = function () {
    function hasTask(node) {
      const flowElements = node.flowElements || [];
     return flowElements.some((node) => is(node, 'bpmn:Task'));
    }
  
    function check(node, reporter) {
      if (!isAny(node, ["bpmn:Process", "bpmn:SubProcess"])) {
        return;
      }
  
      if (!hasTask(node)) {
        const type = is(node, "bpmn:SubProcess") ? "Sub process" : "Process";

        reporter.report(node.id, type + " task has no task type");
       
      }
      
    }
  
    return { check };
  };




