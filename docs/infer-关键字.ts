/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-18 22:18:09
 * @LastEditors: jind
 * @LastEditTime: 2022-04-19 07:34:23
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

// number
type Id = Unpacked<Ids>

// string
type Name1 = Unpacked<Names>
