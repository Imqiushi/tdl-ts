/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-20 07:48:17
 * @LastEditors: jind
 * @LastEditTime: 2022-04-20 07:56:24
 */

type Concat<T extends any[], U extends any[]> = [...T, ...U]

// Concat<[], [1]>

function concat(arr1: any[], arr2: any[]) {
  arr1.concat(arr2)
}
// 扩展运算符
type Result222 = Concat<[1], [2]> // expected to be [1, 2]÷
