// 以赋予值的结果 来推导内容

// let name = 'jiangwen'
// let age = 25

// let const 区别
const age = 30 // 如果用常量 来自动推导类型就是字面类型
let name: string | number

// 默认没有赋值的时候 联合类型可以调用公共的方法
name = 'jiangwen'
name.toUpperCase()
name = 123
name.toFixed() // 赋值后会推断类型

// 联合类型 一般我们会基于联合类型 来扩展额外的类型

// 字面量类型 . type 可以声明一个类型
type Direction = 'up' | 'down' | 'right' | 'left'
let direction: Direction = 'right'

type women =
	| {
			wealthy: true
			waste: string
	  }
	| {
			wealthy: false
			norality: string
	  }
let richWoman: women = {
	wealthy: true,
	waste: 'clothes'
}
// 可以利用联合类型来做到属性之间的互斥（可辨识联合类型）

// 断言（非空断言，这个值一定不为空，绕过ts检测了）
// let ele: HTMLElement | null = document.getElementById('app')
// ele!.style.background = 'red' // ts
// ele?.style.background // js 可选链操作符号
// null ?? 123 // 空值合并操作符,除了null和undefined，其他值都会返回左边的值

// as 断言 可以强制把某个类型断言成已存在的某个类型
let ele: HTMLElement | null = document.getElementById('app')
;(ele as HTMLElement).style.background = 'blue'
;(<HTMLElement>ele).style.background = 'green' // 两种写法都可以

ele?.style.background // js 可选链操作符号

// 断言成any 再断言成某个类型
let str: string | number
str! as any as boolean

export {}
