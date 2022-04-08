/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-05 19:17:20
 * @LastEditors: jind
 * @LastEditTime: 2022-04-08 13:07:21
 */

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// extends keyof typeof readonly  T[P]

interface Todo {
  name: string
  age: number
}

// 检查key值
type r = keyof Todo // 'name' | 'age'
function myReadonly(obj: any) {
  const result = {}
  for (const key in obj) {
    // result['readonly' + key] = obj[key]
  }

  return result
}

// readonly 属性只读
type User = {
  readonly name: string
}

const person: User = {
  name: 'xiaohong',
}

// 1. 返回一个对象
// 2. 遍历obj
// 3. 加上readonly关键字
// 4， 通过key获取obj 接口里面的值
