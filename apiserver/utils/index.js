// 封装formatDate函数，用以生产返回前端的数据格式
function formateData(obj={}){
    const {code=200,data=[],msg='success'} = obj
    if(code === 400 && msg === 'success'){
        msg = 'fail'
    }
    return{
        code,
        data,
        msg
    }
}

formateData.fail = function(){
    return formateData({code:400})
}

formateData.success = function(){
    return formateData()
}
module.exports = {
    formateData
}