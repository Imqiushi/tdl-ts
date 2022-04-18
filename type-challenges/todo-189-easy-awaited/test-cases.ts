/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-18 21:55:14
 * @LastEditors: jind
 * @LastEditTime: 2022-04-19 07:35:07
 */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type H = Promise<Promise<Promise<boolean>>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<H>, boolean>>
]

// @ts-expect-error
type error = MyAwaited<number>
