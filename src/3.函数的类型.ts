// 函数类型

// 函数function关键字来定义函数
// 表达式定义
// 函数有入参 和 返回值 （针对这个部分，掌握类型）
// 函数本身的类型

// function sum(a: string, b: string): string {
// 	return a + b
// }

// type ISum = (x: string, y: string) => string

// let sum: ISum = (a, b) => {
// 	return a + b
// }
// let res = sum('1', '2')

// 1)常见的类型推导方式
// let name = 'abc' // 根据赋值来推导类型
// let age = 18 // 根据赋值来推导类型

// 2)根据返回值来进行类型推导，自动推导返回值类型
// let sum = (a: string, b: string) => {
// 	return a + b
// }

// type ISum = (x: string, y: string) => string
// let sum: ISum = (a, b) => {
// 	return a + b
// }
// 3)会根据上下文来推导赋予值的类型（根据位置来进行推导的）
// type ICallback = (a: string, b: number, c: boolean) => void

// void表示不关心返回的具体类型
// function fn(callback: ICallback) {}
// fn((x, y, z) => {
// 	return {}
// })

// 函数中的可选参数(增加? 表示可选, 这个只能放在最后)	（增加= 表示默认值）
let sum = (a: string = 'a', b?: string): string => {
	return a + b
}
sum('1', '2')

// 函数的剩余参数（...args 表示剩余参数，类型是数组）
let total = (...args: number[]): number => {
	return args.reduce((memo, current) => ((memo += current), memo))
}

let person = {
	name: 'Tom',
	age: 18
}
// 可以采用ts 中的typeof 来获取变量的类型（ts中this类型需要手动指定，默认是函数的第一个参数）
type IThis = typeof person
function getVal(this: IThis, key: keyof IThis) {
	// keyof 索引类型插叙 只能查询类型
	return this[key]
}
getVal.call(person, 'name') // 调用对象的方法

// 重载函数（函数名相同，参数类型不同）ts中的重载是伪重载（类型是重载，而不是逻辑重载）
function toArray(value: number): number[]
function toArray(value: string): string[]
function toArray(value: number | string): string[] | number[] {
	// 123 [1, 2, 3] , '123' ['1', '2', '3']
	if (typeof value === 'number') {
		return value.toString().split('').map(Number)
	} else {
		return value.split('')
	}
}
let arr = toArray(123)
let arr1 = toArray('123')

// 函数中 参数类型，返回值类型，类型推导方式，可选，默认值，this，剩余运算符，重载
export {}
