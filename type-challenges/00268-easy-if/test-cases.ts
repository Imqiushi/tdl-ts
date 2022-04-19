/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-20 07:42:19
 * @LastEditors: jind
 * @LastEditTime: 2022-04-20 07:42:22
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [Expect<Equal<If<true, 'a', 'b'>, 'a'>>, Expect<Equal<If<false, 'a', 2>, 2>>]

// @ts-expect-error
type error = If<null, 'a', 'b'>
