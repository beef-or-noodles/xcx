
let url_config = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'http://tstmtb.api.aimusic.art'
}else{
    // 生产环境
    url_config = 'http://tstmtb.api.aimusic.art'
}

export default url_config