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
  var url1 = 'https://api3.bitpie.com'
  var url2 = 'https://api2.bitpie.com'
  var url3 = 'https://api1.bitpie.com'
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
        var data = data
        var html = '';
        for(var i=0; i<data.length; i++){
          html += '<div class="country-list" data-num="'+data[i].country_calling_code+'">'+data[i].country_name+'</div>'
        }
        $(".country-list-box").html(html);
      },
      error:function(){
        conutry+=1
        getcountry(conutry)
      }
    })
  }
  $(".input-country-btn").click(function(){

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
    $('#getCode').addClass('on')
    getCode(getCodeNum,lang)

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
    var area = $('#country').attr('data-num')
    var phone = $('#phoneNum').val()
    var vaildCode = $('#intro3').val()
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
        vaildCode   :vaildCode
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
