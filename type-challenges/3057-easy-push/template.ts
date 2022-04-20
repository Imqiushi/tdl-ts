/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-08 22:36:04
 * @LastEditors: jind
 * @LastEditTime: 2022-04-20 08:00:58
 */
type Push<T extends any[], U> = [...T, U]

function myPush(arr: any[], key: any) {
  let temp = []
  arr.push(key)
}

type Result = Push<[1, 2], '3'> // [1, 2, '3']
type R2 = Push<['1', 2, '3'], boolean>
