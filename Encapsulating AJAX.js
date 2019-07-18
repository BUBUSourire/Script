//封装AJAX

window.$=window.jQuery

$ajax=function({url,method,body,headers}){
    return new Promise(function(resolve,reject){
        let request=new XMLHttpRequest()
        request.open(method,url)
        for(let key in headers){
            let value =headers[key]
            request.setRequestHeader(key,value)
        }
        request.onreadystatechange=() => {
            if(request.status>=200&&request.status<300){
                resolve.call(undefined,request.responseText)
            }else if (request.status>400){
                reject.call(undefined,request)
            }
        }
        request.send(body)
    })
}

//应用

btn.addEventListener('click', (e) => {
    $ajax({
        url:'/xxx',
        method:'get',
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'today':'18'
        }
    }).then(
        (responseText) => {console.log(responseText)},
        (request) => {console.log(request)}
    )
})