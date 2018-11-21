$(function(){
  var lang = getlang()
  var i18n ;
  if(lang === 'cn') {
    i18n = cn
    lang = 'cn'
  }else{
    i18n = en
    lang = 'en'
  }
  var url1 = 'https://api1.bitpie.com'
  var url2 = 'https://api3.bitpie.com'
  var url3 = 'https://api2.bitpie.com'
  var win_height = parseInt($(document).height())
  $('body').css({'minHeight':win_height})
  $('.sussess-container').css({'minHeight':win_height})
  var conutry =1;
  function getcountry(type){
    var url;
    if(type === 1){
      url = url1
    }else if(type === 2){
      url = url2
    }else if(type === 3){
      url = url3
    }else if(type === 4){
      return false
    }
    $.ajax({
      type:'GET',
      url:url+'/api/v1/country',
      dataType:'json',
      success:function(data){
        $('.country-box').addClass('on')
      },
      error:function(){
        conutry+=1
        getcountry(conutry)
      }
    })
  }
  $("#change-country").click(function(){
    $('.country-box').addClass('on')
    var data = [{"country_name": "Canada", "country_calling_code": "1", "currency_code": "CAD", "country_code": "CAN"}, {"country_name": "China", "country_calling_code": "86", "currency_code": "CNY", "country_code": "CHN"}, {"country_name": "Germany", "country_calling_code": "49", "currency_code": "EUR", "country_code": "DEU"}, {"country_name": "France", "country_calling_code": "33", "currency_code": "EUR", "country_code": "FRA"}, {"country_name": "United Kingdom", "country_calling_code": "44", "currency_code": "GBP", "country_code": "GBR"}, {"country_name": "Hong Kong", "country_calling_code": "852", "currency_code": "HKD", "country_code": "HKG"}, {"country_name": "Japan", "country_calling_code": "81", "currency_code": "JPY", "country_code": "JA"}, {"country_name": "Macao", "country_calling_code": "853", "currency_code": "MOP", "country_code": "MAC"}, {"country_name": "Taiwan", "country_calling_code": "886", "currency_code": "TWD", "country_code": "TWN"}, {"country_name": "United States of America", "country_calling_code": "1", "currency_code": "USD", "country_code": "USA"}];
    var html = '';
    for(var i=0; i<data.length; i++){
      html += '<div class="country-list" data-num="'+data[i].country_calling_code+'">'+data[i].country_name+'</div>'
    }
    $(".country-list-box").html(html);
    getcountry(conutry)
  });
  $('.close-btn').click(function(){
    $('.country-box').removeClass('on')
  })


  var getCodeNum = 1
  function getCode (type,lang){
    var country = parseInt($('#country').attr('data-num'))
    var phoneNum = $("#phoneNum").val()
    var url;
    var self = $('#getCode');
    if(type === 1){
      url = url1
    }else if(type === 2){
      url = url2
    }else if(type === 3){
      url = url3
    }else if(type === 4){
      $('#getCode').attr('disabled',false);
      return $.alert({
        title: 'fail',
        content: i18n.login.fail
      });
      return false
    }
    $.ajax({
      type:'GET',
      url:url+'/api/v1/invite/getCode?phone='+phoneNum+'&area='+country,
      dataType:'json',
      success:function(data){
        if(data.code != 200) {
          $('#getCode').attr('disabled',false);
          return $.alert({
            title: '提示',
            content: data.rm[lang]
          });
        }
        var index = 60;
        $('#getCode').addClass('on')
        var interval = setInterval(function(){

          if(index<=1) {
            clearInterval(interval);
            $('#getCode').attr('disabled',false);
            self.text(i18n.login.getCode3);
            $('#getCode').removeClass('on')
            return;
          }
          self.html('<span lang="en">'+ i18n.login.getCode3+'，</span>'+index);
          index--;
        },1000);

        self.text(i18n.login.getCode2);
      },
      error:function(e){
        getCodeNum+=1
        getCode(getCodeNum,lang)
      }
    })
  }
  $("#getCode").on("click",function(){
    var country = parseInt($('#country').attr('data-num'))
    var phoneNum = $("#phoneNum").val()

    if(!checkPhone(country,phoneNum)){
      return $.alert({
        title: '提示',
        content: i18n.login.intro4
      });
    }
    var self = $(this);
    self.attr('disabled',true);
    getCode(getCodeNum)

  })
  $(".country-list-box").on("click",".country-list",function(){
    var data = $(this).attr('data-num')
    var name = $(this).html()
    $('#country').html(name).attr('data-num',data)
    $('.country-box').removeClass('on')
  })

  var recodeNum = 1
  function recode(type,lang){
    var url;
    var invite_code = getQueryString('invite_code')
    var account_name = getQueryString('account_name')
    var area = $('#country').attr('data-num')
    var phone = $('#phoneNum').val()
    var vaildCode = $('#intro3').val()
    var activity_type = getQueryString('activity_type')
    if(type === 1){
      url = url1
    }else if(type === 2){
      url = url2
    }else if(type === 3){
      url = url3
    }else if(type === 4){
      return false
    }
    $.ajax({
      type:'POST',
      url:url+'/api/v1/invite/user/recode',
      dataType:'json',
      data:{
        area:area,
        phone  :phone,
        inviteCode:invite_code,
        vaildCode   :vaildCode,
        accountName:account_name,
        activity_type:activity_type
      },
      success:function(data){
        if(data.result){
          window.location = '/share/success.html'
        }else{
          $.alert({
            title: '提示',
            content: data.rm[lang]
          });
        }
      },
      error:function(){
        recodeNum+=1
        recode(recodeNum,lang)
      }
    })
  }
  $('.login-btn').click(function(){

    recode(recodeNum,lang)
  })
})
