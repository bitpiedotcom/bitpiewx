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