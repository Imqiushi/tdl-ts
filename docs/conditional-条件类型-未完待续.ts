/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-17 21:55:36
 * @LastEditors: jind
 * @LastEditTime: 2022-04-17 22:13:12
 */
interface Animal {
  live(): void
}

interface Dog extends Animal {
  woof(): void
}

// 约束 Dog 检测 是否属于 Animal
// Dog extends Animal => true
type Example1 = Dog extends Animal ? number : string

// 显然 RegExp  不在Animal 范围内 =>false
// return string
type Example2 = RegExp extends Animal ? number : string

type S = Dog

// aa: live woof
let aa: S

// normal interface
interface IdLabel {
  id: number
}

interface NameLabel {
  name: string
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel
function createLabel(id: number): IdLabel

function createLabel(name: string): NameLabel

function createLabel(nameOrId: string | number): IdLabel | NameLabel

// T 泛型 受 number ｜ string 约束

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented'
}

createLabel('ss')

createLabel(33)

let CC = createLabel(Math.random() ? 'hello' : 42)
// let c: NameLabel | IdLabel
