/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-08 22:36:04
 * @LastEditors: jind
 * @LastEditTime: 2022-04-08 22:45:46
 */
type Push<T, U> = {
  T: T['length'] = U
}

function myPush(arr: any[], key: any) {
  let temp = []
  arr.push(key)
}

type Q = [1]

type rr = keyof { name: string }

type Result = Push<[1, 2], '3'> // [1, 2, '3']
