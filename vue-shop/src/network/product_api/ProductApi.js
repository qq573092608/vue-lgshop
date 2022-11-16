import { request } from '../request'

export function queryProduct() {
    console.log('00000')
    return request(
        {
            url: '/home/multidata'
        }
    )
}