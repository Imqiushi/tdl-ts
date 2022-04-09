<!--
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-09 23:05:58
 * @LastEditors: jind
 * @LastEditTime: 2022-04-09 23:05:59
-->

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```
