<!--
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-05 19:21:58
 * @LastEditors: jind
 * @LastEditTime: 2022-04-05 19:32:33
-->

```ts
interface Todo {
  title: string
  desccription: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'hello',
  completed: false,
}
```
