/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-09 23:05:01
 * @LastEditors: jind
 * @LastEditTime: 2022-04-17 22:31:48
 */
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

function first(arr: any[]) {
  if (arr.length === 0) {
    return 'never'
  }
  return arr[0]
}

// 知识点

// 1. extends 类型提交推断

// 2. 获取tuple的length 属性 indexed

// 3. extends union 判断的规则

// 4. infer 的使用（推断）
