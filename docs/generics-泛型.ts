/*
 * @Description: 类型约束
 * @Autor: jind
 * @Date: 2022-04-08 23:36:28
 * @LastEditors: jind
 * @LastEditTime: 2022-04-13 12:50:38
 */

// 输入类型 => 返回同样类型
function identity(arg: number): number {
  return arg
}

// 输入any 类型=> any类型
function identity2(arg: any): any {
  return arg
}

// 输入泛型 返回泛型
function identity3<T>(arg: T): T {
  return arg
}

function identity4<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// class的泛型使用
class GenericNumber<T> {
  zeroValue!: T
  add!: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

interface Lengthwise {
  length: number
  name: string
}

// 约束泛型
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length) // Now we know it has a .length property, so no more error
  return arg
}

// T 如果是obj 则遍历key值
function getProperty<T, Key extends keyof T>(obj: T, key: Key) {
  return obj[key]
}

loggingIdentity({ name: 'xx', length: 33 })

identity(1)
identity2(3)
identity3(4)

// 增加类型 返回 该类型
identity3<string>('dd')

identity4(['33'])
