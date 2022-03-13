# todo-node-js

The application is deployed on heroku

Base Url: https://user-node-js.herokuapp.com/

Consists of 3 APIs

### 1
URL: getTodo

Method: GET

Response: Array of Objects includes todo details

### 2
URL: updateTodo

Method: PUT

Query Param: id (id of the todo)

Response: Array of Objects includes updated todo details

### 3
URL: addTodo

Method: POST

Body: { todoDetails : Object with todo details }
  
Response: Success Message
