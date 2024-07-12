import { use } from 'react'
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: 'Hello, Dashboard!',
  }
}

// 1.实现loading效果，默认导出async函数
// export default async function A() {
//   const { message } = await getData()
//   return <div>{message}</div>
// }

// 2.实现loading效果，使用use函数
export default  function A() {
  const { message } = use(getData())
  return <div>{message}</div>
}