import React from 'react';
import { uniqueID } from '../../util/util';

export default class ToDoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
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
    let obj = Object.assign({id: uniqueID(), done: false}, this.state);
    this.props.createTodo(obj)
      .then(() => this.setState({title: '', body: ''}));
  }

  render () {
    return (
      <div>
        <ul>{this.props.errors.map(err => <li>{err}</li>)}</ul>
        <form name="" action="" >
          <label>Title: <input onChange={this.setTitle.bind(this)} type="text" name="title" value={this.state.title}></input></label>
          <label>Body: <input onChange={this.setBody.bind(this)} name="body" value={this.state.body} ></input> </label>
          <input onClick={this.handleClick.bind(this)} type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
