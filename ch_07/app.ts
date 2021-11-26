// TS Namespaces
namespace AppModels {
    export enum TodoState {
        NEW = 1,
        COMPLETE
    }

    export interface Todo {
        id: number;
        name: string
        state: TodoState
    }

}

namespace AppServices {
    export interface ITodoService {
        list(): AppModels.Todo[]

        listByState(state: AppModels.TodoState): AppModels.Todo[]
    }
}


const service: AppServices.ITodoService = {
    list(): AppModels.Todo[] {
        const x = AppModels.TodoState.COMPLETE;
        console.log(x);
        return null;
    },
    listByState(state: AppModels.TodoState): AppModels.Todo[] {
        return null
    }
};
