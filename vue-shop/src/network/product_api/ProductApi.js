import { request } from '../request'

export function queryProduct() {
    return request(
        {
            url: '/home/multidata'
        }
    )
}

// 查询所有分类
export function queryClassify() {
    return request(
        {
            method: 'post',
            url: '/classify/selectAll',
            data: {
                'invitationCode': 'LingZuiFang'
            }
        }
    )
}

// 查询首页banner
export function queryBanner() {
    return request(
        {
            url: '/advertisingApp/selectByCompanyInvitationCode'
        }
    )
}

// invitationCode
// 查询所有商品
export function queryAllProduce(data) {
    return request({
        method: 'get',
        url: '/products/seleByQuery',
        data
    })
}
