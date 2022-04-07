/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-05 19:17:27
 * @LastEditors: jind
 * @LastEditTime: 2022-04-07 12:50:27
 */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
