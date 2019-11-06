import {observable, computed, action} from "mobx";

interface Todo {
    task: string;
    isComplete: boolean;
}

class TodoStore {
    private static _instance: TodoStore;

    static get instance(): any {
        if (TodoStore._instance === null)
            new TodoStore();
        return this._instance;
    }

    private constructor() {
        TodoStore._instance = this;
    }

    @observable todoList: Todo[] = [];

    @computed get all(): Todo[] {
        return this.todoList;
    }

    @computed get todo(): Todo[] {
        return this.todoList.filter(todo => !todo.isComplete);
    }

    @computed get completed(): number {
        return this.todoList.filter(todo => todo.isComplete).length;
    }

    @action add = (task: string) => this.todoList.push({task, isComplete: false});

    @action done(task: Todo) {
        // @ts-ignore
        this.todoList.find(todo => todo === task).isComplete = true;
    }

}

export const todoStore = TodoStore.instance;