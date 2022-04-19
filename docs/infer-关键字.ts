/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-18 22:18:09
 * @LastEditors: jind
 * @LastEditTime: 2022-04-20 07:38:03
 */
// type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any

type ReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type AS = string
// type func2 = ReturnType<AS>
type func = () => number
type func1 = ReturnType2<func>

// 模拟

type QAwaited<T> = T extends Promise<infer R> ? R : T
// A = string
type AP = QAwaited<Promise<string>>
// B = number
type BP = Awaited<Promise<Promise<Promise<string>>>>
// C = boolean | number
type CP = QAwaited<boolean | Promise<number>>

type Unpacked<T> = T extends (infer R)[] ? R : T
// Awaited

type Ids = number[]

type Names = string[]

// interface Animal {
//   name: string
//   skill: 'fei'
// }
type Animal2 = {
  name: string
  skill: 'fei'
}
type Pig = Animal2[]

type Pigs = Unpacked<Pig>

// number
type Id = Unpacked<Ids>

// string
type Name1 = Unpacked<Names>

// T 是否是一个可推断的函数 是返回可推断的类型 否则返回any
type NewReturnType<T> = T extends (...args: any[]) => infer R ? R : any

// 符合函数 拆出推断类型
type Function1 = () => void

type Function2 = () => string

// 不符合函数类型推断出 返回any
type Function3 = {
  name: string
}

type MyFunction = NewReturnType<Function1>

type MyFunction2 = NewReturnType<Function2>

type MyFunction3 = NewReturnType<Function3>

// => if else的判断语句
// T 是否是一个可推断的数组
// T 是否是一个可推断的函数
// T 是否是一个可推断的Promise
type NewUnpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T

// 只能拆包出一层
type Test1 = NewUnpacked<Promise<Promise<number>>>

// 返回any 如果有内置any类型 否则返回 其他类型或者是一个 union类型
type Test2 = NewUnpacked<(string | boolean)[]>

// 拆解函数类型 返回的是 可推断的类型
type Test3 = NewUnpacked<() => string>

// 会优先任务Promise<string> 是 数组的一个类型
type T4 = NewUnpacked<Promise<string>[]>

// U 还是一个 Promise
type NewUnpacked1<T> = T extends Promise<infer U> ? U : T

// 如果是正常的类型拆包则返回的是进行优先推断
type T5 = NewUnpacked1<T4>

// 不能持续性推断出类型
type T6 = NewUnpacked1<Promise<Promise<number>>>

// 如何持续拆解出Promise

// 通过接力的形式处理

// 如果属于基础 判断是否是基础类型 如果不是的话 相当于递归

// 检测出自己是一个promise

// 返回基础类型

// 就是一个递归
type NewUnpacked2<T> = T extends Promise<infer U> ? NewUnpacked2<U> : T

//F extends (value: infer V, ...args: any) => any ? Awaited<V> : never : T
// Awaited 这边需要使用一个递归操作

// Awaited

type T7 = NewUnpacked2<Promise<Promise<number>>>

type T8 = NewUnpacked2<Promise<Promise<number>>>

type T9 = NewUnpacked2<undefined | null>
