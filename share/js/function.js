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