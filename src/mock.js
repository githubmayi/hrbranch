import Mock from 'mockjs'

const loginlist = [
    {
        "username": 'admin',
        "password": '123456'
    },
    {
        "username": 'mayi',
        "password": '123456'
    },
    {
        "username": '张三',
        "password": '123456'
    }
]
const barsource = [
    { "name": "测试数据一", "2016": "24.3", "2017": "85.2", "2018": "157", "2019": "106.5" },
    { "name": "测试数据二", "2016": "48.6", "2017": "120.1", "2018": "140.3", "2019": "120.5" },
    { "name": "测试数据三", "2016": "59.6", "2017": "141.8", "2018": "191.2", "2019": "89.9" },
    { "name": "测试数据四", "2016": "80.6", "2017": "159.3", "2018": "146.5", "2019": "116.5" },
    { "name": "测试数据五", "2016": "58.6", "2017": "128.3", "2018": "187.5", "2019": "196.5" },
]
export default {
    loginlist,
    barsource
}

// 登录返回的数据
Mock.mock('login', (options) => {
    let logindata = JSON.parse(options.body);
    return loginlist.filter((e) => e.username == logindata.username && e.password == logindata.password)
})