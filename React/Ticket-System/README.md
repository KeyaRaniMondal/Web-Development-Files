1. What is JSX, and why is it used?

- JSX, or JavaScript XML, is a syntax extension for JavaScript primarily used with React to create UI components by writing HTML-like code directly inside JavaScript files
- JSX looks like HTML, so developers can easily visualize the UI structure.
- JSX allows developers to describe the UI in a declarative manner. 
- JSX supports embedding JavaScript expressions inside markup using {}. This makes it simple to add dynamic values, conditional rendering, and loops directly within the UI code.

2. What is the difference between State and Props?
<h2 align="center">State vs Props in React</h2>

<table align="center">
  <tr>
    <th align="center"> State</th>
    <th align="center"> Props</th>
  </tr>
  <tr>
    <td>Can be changed by the component itself.</td>
    <td>Read-only. Cannot be modified by the receiving component.</td>
  </tr>
  <tr>
    <td>Used for managing local component data.</td>
    <td>Used for passing data from parent to child.</td>
  </tr>
  <tr>
    <td>Changes trigger re-render in the same component.</td>
    <td>Changes trigger re-render in the child component.</td>
  </tr>
  <tr>
    <td>Managed internally by the component.</td>
    <td>Managed externally by the parent component.</td>
  </tr>
</table>

3. What is the useState hook, and how does it work?

- The useState hook in React is used to add state to functional components. It lets you declare a state variable and a function to update it, enabling components to store and react to dynamic data such as user input, API responses, or UI changes.
- Declaration:
```const [state, setState] = useState(initialValue);```
- state: The current value.
- setState: A function to update the value.
- initialValue: The starting state.
- When setState is called, React schedules a re-render of the component.
- The component re-renders with the updated state value.
- State updates are asynchronous — React batches them for performance.

4. How can you share state between components in React?

- Move the state to the closest common parent component.
- Pass the state down as props to child components.
- Child components can trigger updates via callback functions passed from the parent.

5. How is event handling done in React?

- Define a handler function inside your component.
- Attach it to an element using a React event attribute.
- When clicked, React triggers the handler.