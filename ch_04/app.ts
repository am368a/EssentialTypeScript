// /**
//  * Custom types - Interfaces, Classes, Enums
//  */
//
// interface Todo {
//     name: string;
//     completed?: boolean
// }
//
// interface ITodoService {
//     add(todo: Todo): Todo;
//     delete(todoId: number): Todo;
//     getById(todoId: number): Todo;
//     getAll(): Todo[]
// }
//
//
// const todo: Todo = {
//     name: 'Dry Cleaning'
// };
//
// // Defining functions using Interface
//
// interface JQuery {
//     (selector: string): JQueryElement;
//     fn: any
//     version: number
// }
//
// interface JQueryElement {
//     data(name: string): any
//     data(name: string, data: any): JQueryElement
// }
//
// // Extending Interface
// interface JQueryElement {
//     todo(name: string): Todo
// }
//
// const $ = <JQuery>function (selector) {
//     //query for DOM element
// }
//
// $.version = 1.12;
//
// const todo_1 = {name: 'Dry cleaning1'};
// const container = $('container');
// container.data('todo', todo_1);
// const savedTodo = container.data('todo');
//
//
// $.fn.todo = function (todo?: Todo): Todo {
//     return todo ? $(this).data('todo', todo) :
//         $(this).data('todo');
// }
//
// container.todo('getTodo');
//
//
// // Enums
// enum TodoState{
//     NEW = 1,
//     PENDING = 2,
//     COMPLETED = 3,
//     ACTIVE = 4
// }
//
// const todo_3 = {
//     name: TodoState.NEW,
//     state: TodoState.COMPLETED
// }
//
// // Anonymous Types
//
// var onlyName: { name: string};
//
// onlyName = { name: 'a'};
//
//
//
