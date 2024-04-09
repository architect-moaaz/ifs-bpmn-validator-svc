const allRules = [
  'check-duplicate-taskname',
  'conditional-flows',
  'intermediate-message',
  'start-error-node',
  'end-event-message',
  'start-message',
  'start-conditional',
  'start-timer-node',
  'Input-output-for-humantask',
  'intermediate-signal',
  'intermediate-error',
  'intermediate-link',
  'start-compensation',
  'intermediate-compensation',
  'intermediate-escalation.js',
  'intermediate-timer',
  'task-type-not-specified',
  'end-event-required',
  'exclusive-same-condition',
  'start-error-node',
  'event-sub-process-typed-start-event',
  'fake-join',
  'label-required',
  'exclusive-gateway-condition',
  'inclusive-gateway-condition',
  'naming',
  'no-bpmndi',
  'no-complex-gateway',
  'no-disconnected',
  'no-duplicate-sequence-flows',
  'no-gateway-join-fork',
  'no-implicit-split',
  'no-inclusive-gateway',
  'single-blank-start-event',
  'single-event-definition',
  'start-event-required',
  'sub-process-blank-start-event',
  'superfluous-gateway',
  

];


module.exports = {
  rules: allRules.reduce(function(rules, ruleName) {
    rules[ruleName] = 'error';

    return rules;
  }, {})
};
