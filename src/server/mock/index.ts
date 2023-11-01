import { MockMethod } from 'vite-plugin-mock';
//单纯的使用自己的返回数据话，可以不用引入mockjs
import Mock from 'mockjs';
import qs from "qs";
// Mock.mock(/\/api\/random/, (options) => {
//     var str = options.url.slice(options.url.indexOf("?") + 1);
//     var elem = qs.parse(str);
//     return Mock.mock({
//         code: 200,
//         data: {
//             "ename": elem.name,
//             age: '@integer(10-100)',
//             uid: '@id',
//             url: '@image',
//             city: '@city',
//             country: '@county(true)',
//             province: '@province',
//             mobile_phone: '@phone',
//             email: '@email',
//             region: '@region',
//             "id|+1": 1234,//id 从1234累加
// 			"name": "@cname",//随机中文姓名
// 			"age|1-200": 1,//1-200间的随机整数
// 			"price|200-500.2-5": 1,//200-500间 随机2-5位小数
// 			"star|1-5": "★",//随机1-5个★
// 			"chart|2": "hello",//字符串重复两次
// 			"love|1": true,//随机布尔值
// 			"arr|1": ["a", "b", "c", "d"],//随机数组中的一项
//             "aprice": function() {//随机数值拼接
//                 //@ts-ignore
// 				return this.price + this.name
// 			},
// 			"tel": /1\d{10}/,//可接收正则
// 			"pic": function() {//随机演示图片
// 				return Mock.Random.dataImage('200x100', this.name)
// 			},
//             menus: [
//                 {
//                     menu_name: '一级导航',
//                     id: '@id',
//                     code: 'Nav1',
//                     children: [
//                         {
//                             code: 'about',
//                             menu_url: 'views/about',
//                             access_permissions: '["about"]',
//                             children: [],
//                             menu_name: '测试1',
//                             id: '@id'
//                         },
//                         {
//                             code: 'home',
//                             menu_url: 'views/home',
//                             access_permissions: '["home"]',
//                             children: [],
//                             menu_name: '测试2',
//                             id: '@id'
//                         }
//                     ]
//                 },

//             ]
//         },
//     })
// });
 
//自定义MockMethod
export default [
  {
    url: '/api/random', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return {
        menusList: [{
          id: '1',
          title: '南辰',
          subMenuList: [
            {
              id: '11',
              title: '南',
              path: '/user/nan'
            },
            {
              id: '12',
              title: '小',
              path: '/user/xiao'
            },
            {
              id: '13',
              title: '辰',
              path: '/user/chen'
            }
          ]
        }, {
          id: '2',
          title: '希',
          subMenuList: [
            {
              id: '21',
              title: '玩游戏',
              path: '/user/play'
            }
          ]
        }]
      }
    }
  }
] as MockMethod[] // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档

// export const userData = Mock.mock("/data/list", "get", {
//   // 属性 list 的值是一个数组，随机生成 1 到 10 个元素
//   "list|1-10": [
//     {
//       // 随机生成1-10个★
//       "string|1-10": "★",
//       // 随机生成1-100之间的任意整数
//       "number|1-100": 1,
//       // 生成一个浮点数，整数部分大于等于 1、小于等于 100，小数部分保留 1 到 10 位。
//       "floatNumber|1-100.1-10": 1,
//       // 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
//       "boolean|1": true,
//       // 随机生成一个布尔值，值为 false 的概率是 2 / (2 + 5)，值为 true 的概率是 5 / (2 + 5)。
//       'bool|2-5': false,
//       // 从属性值 object 中随机选取 2-4 个属性
//       "object|2-4": {
//         "310000": "上海市",
//         "320000": "江苏省",
//         "330000": "浙江省",
//         "340000": "安徽省"
//       },
//       // 通过重复属性值 array 生成一个新数组，重复次数为 2
//       "array|2": [
//         "AMD",
//         "CMD",
//         "UMD"
//       ],
//       // 执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。
//       'foo': '哇哈哈哈哈',
//       'name': function () {
//         return this.foo
//       },
//       // 根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
//       'regexp': /\d{5,10}/,
//     },
//   ],
//   code: 200,
//   message: 'ok',
// });