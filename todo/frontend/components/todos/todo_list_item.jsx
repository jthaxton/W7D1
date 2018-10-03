import React from 'react';

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      buttonValue: this.props.todo.done ? "Done" : "Undo"
    };
  }

  updateButton() {
    console.log(this.props.todo);
    this.props.editTodo( this.props.todo )
      .then( () => {
      console.log(this.props.todo);
      const buttonValue = this.props.todo.done ? "Done" : "Undo";
      this.setState({buttonValue});
    });
  }

  handleRemoveClick() {
     this.props.deleteTodo( this.props.todo );
  }

  render() {
    return (
      <li>
        {this.props.todo.title}
        <button
          onClick={ this.handleRemoveClick.bind(this) }>
          Remove
        </button>
        <button
          onClick={ this.updateButton.bind(this) }>
          { this.state.buttonValue }
        </button>
      </li>
    );
  }
}

// const ToDoListItem = ({todo, removeTodo, updateTodo}) => {
//   return (
//     <li>{todo.title}</li>
//   );
// };

export default ToDoListItem;
