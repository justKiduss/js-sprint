Day X: Controlled Inputs, Form Handling, and State as Single Source of Truth

Description

React class components controlling user input through component state. The input field value is not stored in the DOM but in React state. The UI re-renders on every keystroke based on state. Includes form submission handling, state updates through event handlers, and strict one-way data flow: state → UI → event → updated state.

Features

Controlled input field using this.state and setState.
State reflects the exact text typed by the user.
Single source of truth for form data (state).
Event handler reads user input from event.target.value.
Functional component examples included for comparison.
Bug prevention through proper method binding in constructors.

Challenges

Binding event handlers to the correct this context.
Updating state safely through setState.
Understanding that uncontrolled DOM input state is replaced by React state.
Ensuring value attribute always matches current component state.

Exercises

React Practice:
Controlled inputs with value + onChange.
Form submission prevention using event.preventDefault().
Passing state to child components as props.
Correct use of functional setState when depending on previous values.

JavaScript Practice:
Understanding event objects.
Referencing event.target.value.
Avoiding direct DOM manipulation.

Implementation Code Example

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange}
        />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
https://justkiduss.github.io/js-sprint/day10/ContactForm.js