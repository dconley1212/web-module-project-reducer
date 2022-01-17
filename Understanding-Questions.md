# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- the event handler starts executing the dispatch function.
- Within the dispatch function it executes addOne function that returns an action object
- then the reducer function starts to be executed
- Execute the action of the reducer function
- re-render application
  ...

- TotalDisplay shows the total plus 1.
