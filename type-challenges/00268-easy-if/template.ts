/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-20 07:42:13
 * @LastEditors: jind
 * @LastEditTime: 2022-04-20 07:45:22
 */

type If<C, T, F> = C extends true ? T : F

type BBBB = If<false, 'a', 'b'> // expected to be 'b'
type AAAA = If<true, 'a', 'b'> // expected to be 'a'
type error22 = If<null, 'a', 'b'>
