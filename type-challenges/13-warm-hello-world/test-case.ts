/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-03-27 16:08:32
 * @LastEditors: jind
 * @LastEditTime: 2022-04-07 12:45:49
 */
import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
