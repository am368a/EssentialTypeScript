// // Javascript prototypical inheritance
// // function TodoService(){
// //     this.todos = [];
// // }
// // TodoService.lastId = 0;
// // TodoService.prototype.getAll = function (  ){
// //     return this.todos;
// // }
// //
// // TodoService.getNextId = function (  ){
// //     return TodoService.lastId += 1;
// // }
// //
// // const todoService = new TodoService();
// // todoService.getAll();
//
//
// // Typescript classes
//
// interface Todo {
//     name: string;
//     state?: TodoState
// }
//
// enum TodoState {
//     NEW = 1,
//     PENDING = 2,
//     COMPLETED = 3,
//     ACTIVE = 4
// }
//
// interface IIdGenerator{
//     nextId: number;
// }
//
// interface ITodoService {
//     add(todo: Todo): Todo;
//     delete(todoId: number): Todo;
//     getById(todoId: number): Todo;
//     getAll(): Todo[]
// }
//
// class TodoService implements ITodoService, IIdGenerator{
//     static lastId: number = 0;
//
//     constructor(private todos) {
//     }
//
//     get nextId() {
//         return TodoService.lastId += 1;
//     }
//
//     getAll() {
//         return this.todos;
//     }
//
//     add(todo: Todo): Todo {
//         return undefined;
//     }
//
//     delete(todoId: number): Todo {
//         return undefined;
//     }
//
//     getById(todoId: number): Todo {
//         return undefined;
//     }
//
// }
//
// abstract class TodoStateChanger {
//      protected constructor(private newState: TodoState) {
//     }
//
//     abstract canChangeState(todo: Todo): boolean;
//
//     changeState(todo: Todo): Todo {
//         if (this.canChangeState(todo))
//             todo.state = this.newState;
//         return todo;
//     }
// }
//
//
// class CompleteTodoStateChanger extends TodoStateChanger {
//     constructor() {
//         super(TodoState.COMPLETED);
//     }
//
//     canChangeState(todo: Todo): boolean {
//         return !!todo
//     }
// }
//
// new CompleteTodoStateChanger();
//
//
//
//
//
//
//
//
