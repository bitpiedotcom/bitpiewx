    var api = function(){}
    api.prototype.send = function(type,url,timeout,data,callback){
        $.ajax({
            url: url,
            type: type,
            timeout: timeout,
            data:data,
            dataType:"JSON",
            success: function (data) {
                return callback(true,data)
            },
            complete: function (xml, status) {
                if(status == "timeout"){
                    return  callback(false,null)
                }
            }

        })

    }

    api.prototype.request = function(type,url,timeout,data,callback){
        this.send(type,url,timeout,data,function(flag,data){
            if(flag){
                callback(data)
            }else{
                callback("error")
            }
        })
    }