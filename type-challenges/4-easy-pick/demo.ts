/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-05 20:10:16
 * @LastEditors: jind
 * @LastEditTime: 2022-04-07 12:34:26
 */

const id = <HTMLCanvasElement>document.getElementById('dd')

type Person = { age: number; name: string; alive: boolean }

// indexed
type Age = Person['age']

type a = keyof Person

type Point = { x: number; y: number }

type P = keyof Point

type b = P

type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish

type Mapish = { [k: string]: boolean }
type M = keyof Mapish

let s = 'hello'
// 检测类型 对比 js 的typeof
let n: typeof s

let c = 1

let m = typeof c

// union类型
type I1 = Person['age' | 'name']

type I2 = Person[keyof Person]
