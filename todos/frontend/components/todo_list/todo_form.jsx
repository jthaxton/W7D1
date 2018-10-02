import React from 'react';
import { uniqueID } from '../../util/util';

export default class ToDoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: uniqueID(),
      title: "",
      body: "",
      done: false
    };
  }

  setTitle(e) {
    e.preventDefault(); 
    const title = e.target.value;
    this.setState({title});
  }

  setBody(e) {
    e.preventDefault();
    const body = e.target.value;
    this.setState({body});
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.props.receiveTodo);
    console.log(this.state);
    this.props.receiveTodo(this.state);
  }

  render () {
    return (
      <div>
        <form name="" action="" >
          <label>Title: <input onChange={this.setTitle.bind(this)} type="text" name="title" value={this.state.title}></input></label>
          <label>Body: <textarea onChange={this.setBody.bind(this)} name="body">{this.state.body}</textarea> </label>
          <input onClick={this.handleClick.bind(this)} type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
