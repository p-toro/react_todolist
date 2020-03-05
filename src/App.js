import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }

  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  addTodo = ()=> {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos, name]
    });
  }

  removeTodo = (index) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div class="app_wrapper">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Todoリスト（React）
            </Typography>
          </Toolbar>
        </AppBar>
        <div class="app">
          <div class="app_form">
            <TextField
              onInput={this.onInput}
              label="「やること」を入力"
              variant="outlined"
            />
            <Button onClick={this.addTodo} variant="contained" color="primary">
              登録
            </Button>
          </div>
          <div class="app_list">
            <List>
              {todos.map((todo, index) => (
                <ListItem key={index}>
                  <ListItemText>{todo}</ListItemText>
                  <Button
                    onClick={() => {
                      this.removeTodo(index)
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    削除
                  </Button>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    )
  }
}
