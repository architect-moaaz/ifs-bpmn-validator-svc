 const { is, isAny } = require("bpmnlint-utils");

 /* This rule checks BPMN diagrams to ensure that human tasks 
   have appropriate input and output assignments defined */

 module.exports = function() {
   function check(node, reporter) {
     if (is(node, "bpmn:UserTask")) {
       const dataInputs = node.ioSpecification.dataInputs;

       if (!Array.isArray(dataInputs) || dataInputs.length <= 2) {
         reporter.report(node.id, "dataInputs are missing for HumanTask.");
       }
       const outputSets = node.ioSpecification.outputSets;

       if (!outputSets || !Array.isArray(outputSets)) {
         reporter.report(node.id, "output is missing for HumanTask.");
       }
     }
   }

   return {
     check,
   };
 };
