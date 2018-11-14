function checkPhone(code,str){
  var result = false;
  if(code == "86"){
    if(/^1[0|3|4|5|7|8|9][0-9]\d{8}$/.test(str)){
      result = true;
    }
  }else{
    if(/\d{5,13}/.test(str)){
      result = true;
    }
  }
  return result
}
function getlang(){
  var lang = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
  lang = lang.substr(0, 2);//截取lang前2位字符
  if (lang == 'zh'){
    lang = 'cn';
  }
  if (lang != 'cn' && lang != 'en' && lang != 'jp'){
    lang = 'en'
  }
  return lang;
}
function pageName() {
  var strUrl=location.href;
  var arrUrl=strUrl.split("/");
  var strPage=arrUrl[arrUrl.length-1];
  return strPage;
}
function i18npage(i18n, pageName){
  var data;
  if(pageName === 'login.html'){
    data = i18n.login
    $('#intro1').html(data.intro1)
    $('#phoneNum').html(data.phoneNum)
    $('#intro3').html(data.intro3)
    $('#title1').html(data.title1)
    $('#title2').html(data.title2)
    $('#title3').html(data.title3)
    $('#getCode').html(data.getCode)
    $('#button').html(data.button)
  }else if(pageName === 'get_reward.html'){
    data = i18n.reward
    $('#button').html(data.button)
    $('#title').html(data.title)
    $('#foot').html(data.foot)
    var html = ''
    for(var i in data.intro){
      html += '<div>' + data.intro[i] + '</div>'
    }
    $('#intro').html(html)
  }else if(pageName === 'success.html'){
    data = i18n.success
    $('#intro').html(data.intro)
    $('#button').html(data.button)
  }
}
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}