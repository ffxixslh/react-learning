const devURL = 'https://httpbin.org'
const prodURL = 'https://www.baidu.com'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devURL : prodURL
export const TIME_OUT = 5000
