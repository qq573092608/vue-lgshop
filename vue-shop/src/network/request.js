import axios from "axios"

export function request(config) {
    return new Promise((resolve, reject) => {
        // 1.创建axios实例
        const instance = axios.create(
            {
                baseURL: 'http://123.207.32.32:8000',
                timeout: 5000
            }
        )

        // 2.拦截器
        instance.interceptors.request.use(
            cfg => {
                // 1.token校验  2.加载动画  3.服务器特定要求的配置信息
                return cfg
            },
            err => {

            }
        )

        instance.interceptors.response.use(
            res => {
                
                return res.data
            },
            err => {
                
            }
        )

        return instance(config)
    })
}


// export function testBlock (callBackA, callBackB, callBackC) {
//     callBackA('aaaaaaa')

//     callBackB('bbbbb', 'cccccc')

//     callBackC('ddddd', (res444, res555) => {
//         console.log('444444' + res444)
//         console.log('res555' + res555)
//     })
// }

// testBlock(
//     res0 => {
//       console.log(res0)
//     },
//     (res1, res2) => {
//       console.log(res1, res2)
//     },
//     (res3,callbackDDD) => {
//       callbackDDD('反向调用000', '反向调用111')
//     }
// )


// 0.
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1.创建axios实例
//         const instance = axios.create(
//             {
//                 baseURL: 'http://123.207.32.32:8000',
//                 timeout: 5000
//             }
//         )

//         instance(config)
//         .then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//             reject(err)
//         })
//     })
// }

// 1.
// export function http(config, success, failure) {
//     // 1.创建axios实例
//     const instance = axios.create(
//         {
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         }
//     )

//     instance(config)
//     .then(res => {
//         success(res)
//     })
//     .catch(err => {
//         failure(err)
//     })
// }