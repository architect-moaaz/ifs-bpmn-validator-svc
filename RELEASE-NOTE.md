
# Release Notes

BPMN Validator - 
Description




## V1.0.0 (21-Aug-2023)

 - Check duplicate human task name - A rule that checks the duplication of taskname in workflow 

 - Conditional-flows - A rule that checks the whether the sequence flow is missing in the workflow 

 - Input-output human task 

This rule checks BPMN diagrams to ensure that human tasks , have appropriate input and output assignments defined 

4.end-event-required 

A rule that checks the presence of an end event per scope. 

5. event-sub-process-typed-start-event 

A rule that checks that start events inside an event sub-process are typed. 

6. exclusive-gateway-condition 

 This rule checks BPMN diagrams to ensure that outgoing sequence flows from exclusive gateways (bpmn:ExclusiveGateway) have conditions defined It validates if any outgoing sequence flow is missing a condition. 

7. exclusive-same-condition 

A rule that checks that Unknown gateway directions or Unspecified gateway directions 

8. fake-join 

A rule that checks that no fake join is modeled by attempting to give a task or event join semantics. Users should model a parallel joining gateway to achieve the desired behavior. 

8. helper 

A rule that checks Element has disallowed type 

9. inclusive-gateway-condition 

A rule that checks Sequence flow is missing condition 

10. Input-output-for-humartask 

This rule checks BPMN diagrams to ensure that human tasks   have appropriate input and output assignments defined 

 

11. intermediate-compensation 

A rule that checks Node null or Event should specify an event type 

12. intermediate-message 

A rule that checks the intermediate message for message event in workflow 

13. intermediate-signal  

A rule that checks the intermediate signal has any Node null or  Event should specify an event type 

14. intermediate-timer 

A rule that checks the intermediate timer has any Node null or  Event should specify an event type 

15. label-required 

A rule that checks the the presence of a label  for all the bpmn conditions and sequence flow  it will throw Element is missing label/name 

16. naming 

A rule that checks the Element is missing name in bpmn workflow 

17. no-bpmn 

A rule that checks that there is no BPMN information missing for elements, which require BPMN nodes 

18. no-disconnected 

A rule that verifies that there exists no disconnected  flow elements, i.e. elements without incoming or outgoing sequence flows 

19. no-duplicate-sequence-flows  

A rule that verifies that there are no disconnected flow elements, i.e. elements without incoming or outgoing sequence flows 

20. no-gateway-join-fork 

A rule that checks, whether a gateway forks and joins at the same time. 

21. no-implicit-split 

A rule that checks that no implicit split is modeled starting from a task. users should model the parallel splitting gateway explicitly instead. 

22. single-blank-start-event 

A rule that checks whether not more than one blank start event 

23. single-event-definition 

A rule that verifies that an event contains maximum one event definition. 

24. start-event-required 

A rule that checks for the presence of a start event per scope. 

25. start-message 

A rule that checks start message has any message given In bpmn workflow 

26. start-timer-node 

A rule that checks Node Start  Has timer with no delay or date specified 

27. sub-process-blank-start-event 

A rule that checks that start events inside a normal sub-processes are blank (do not have an event definition). 

28. superfluous-gateway 

A rule that checks, whether a gateway has only one source and target. Those gateways are superfluous since they don't do anything. 

29. task-type-not-specified 

A Rule that specifies task type not given in bpmn workflow 

