<template>
  <div class="container">
    <h1>ToDo List</h1>
    <md-card class="cardBox">
      <md-field>
        <md-input v-model="currentTodo" @keydown.enter="addTodo(todo)" placeholder="Add a todo"></md-input>
      </md-field>
      <div class="todoBox">
        <li v-for="(todo, index) in todos" :key="todo.id">
          <input class="completeButton" type="checkbox" v-model="todo.completed" />

          <span
            class="todo-item-label"
            :class="{completed: todo.completed}"
            @dblclick="editTodo(todo)"
            v-if="!todo.edit"
          >{{todo.label}}</span>

          <md-input
            v-else
            class="todo-item-edit"
            type="text"
            v-model="todo.label"
            @keyup.enter="doneEdit(todo)"
            @keyup.escape="doneEdit(todo)"
          ></md-input>
          <md-icon-button class="closeButton" @click="removeTodo(index)">X</md-icon-button>
        </li>
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          label: "Enjoy the day",
          completed: true,
          edit: false
        }
      ],
      currentTodo: "",
      editedTodo: null
    };
  },
  methods: {
    addTodo() {
      if (this.currentTodo.trim() == 0) {
        return;
      }
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
        edit: false
      });
      this.currentTodo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      todo.edit = true;
    },
    doneEdit(todo) {
      todo.edit = false;
    }
  }
};
</script>

<style>
body {
  background-color: lightgray;
}
.container {
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  background-color: #d6f54c;
  margin: auto;
  max-width: 20rem;
  height: 30rem;
  border-radius: 2%;
}
h1 {
  margin: 1rem;
  padding: 1rem;
  text-align: center;
}

.cardBox {
  text-align: left;
}
.todoBox {
  margin: 1rem;
}

.closeButton {
  margin: 1rem;
  border-radius: 0%;
}
li {
  list-style-type: none;
}
</style>

