/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-18 21:55:05
 * @LastEditors: jind
 * @LastEditTime: 2022-04-20 07:39:25
 */

// 嵌套没法中断
type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T

type X = Promise<string>

type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type H = Promise<Promise<Promise<boolean>>>

//  X => string
// Y => field:number

type bbb = MyAwaited<Y>
type aaa = MyAwaited<X>
type ccc = MyAwaited<Z>
type dd = MyAwaited<H>

let at: aaa
function myAwaited<T>(a: T): Promise<T> {
  // let aa = await t():Promise<string>
  return Promise.resolve(a)
}
