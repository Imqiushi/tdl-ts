/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-03-26 17:29:24
 * @LastEditors: jind
 * @LastEditTime: 2022-04-09 21:39:05
 */
// K 'name '
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 1. union的类型的遍历 in 关键词

type AA = 'a' | 'b'

// 1. 返回一个对象
// 2. 遍历相当于 foreach mapped  in 关键字 ----
// 3.  todo key 取值 indexed
// 4.  看看key在不在todo里面
// 4.1 keyof lookup
// 4.2 extends 约束 union的类型约束   'a' | 'b' , 'b' | 'c'
