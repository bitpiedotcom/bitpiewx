$(function(){
  var url = 'https://bitpie.songchenwen.com'
  var win_height = parseInt($(document).height())

  var lang = getlang()
  var pangName = pageName()
  console.log(pangName)
  var i18n ;
  if(lang === 'cn') {
    i18n = cn
  }else{
    i18n = en
  }
  i18npage(i18n,pangName)
  console.log(i18n)
  $('body').css({'minHeight':win_height})
  $("#change-country").click(function(){
    $('.country-box').addClass('on')
    var data = [{"country_name": "Canada", "country_calling_code": "1", "currency_code": "CAD", "country_code": "CAN"}, {"country_name": "China", "country_calling_code": "86", "currency_code": "CNY", "country_code": "CHN"}, {"country_name": "Germany", "country_calling_code": "49", "currency_code": "EUR", "country_code": "DEU"}, {"country_name": "France", "country_calling_code": "33", "currency_code": "EUR", "country_code": "FRA"}, {"country_name": "United Kingdom", "country_calling_code": "44", "currency_code": "GBP", "country_code": "GBR"}, {"country_name": "Hong Kong", "country_calling_code": "852", "currency_code": "HKD", "country_code": "HKG"}, {"country_name": "Japan", "country_calling_code": "81", "currency_code": "JPY", "country_code": "JA"}, {"country_name": "Macao", "country_calling_code": "853", "currency_code": "MOP", "country_code": "MAC"}, {"country_name": "Taiwan", "country_calling_code": "886", "currency_code": "TWD", "country_code": "TWN"}, {"country_name": "United States of America", "country_calling_code": "1", "currency_code": "USD", "country_code": "USA"}];
    var html = '';
    for(var i=0; i<data.length; i++){
      html += '<div class="country-list" data-num="'+data[i].country_calling_code+'">'+data[i].country_name+'</div>'
    }
    $(".country-list-box").html(html);
    $.ajax({
      type:'GET',
      url:url+'/api/v1/country',
      dataType:'json',
      success:function(data){
        console.log(data)
        $('.country-box').addClass('on')
      }
    })
  });
  $('.close-btn').click(function(){
    $('.country-box').removeClass('on')
  });
  $("#getCode").on("click",function(){
    var country = parseInt($('#country').attr('data-num'))
    var phoneNum = $("#phoneNum").val()

    if(!checkPhone(country,phoneNum)){
      return alert(i18n.login.intro4);
    }
    var self = $(this);
    self.attr('disabled',true);
    $.ajax({
      type:'GET',
      url:'https://dealer.bitpie.songchenwen.com'+'/api/v1/invite/getCode?phone='+phoneNum+'&area='+country,
      dataType:'json',
      success:function(data){
        if(data.code != 200) {
          $('#getCode').attr('disabled',false);
          return alert(data.rm);
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
        $('#getCode').attr('disabled',false);
        return alert(i18n.login.fail);
      }
    })
  })
  $(".country-list-box").on("click",".country-list",function(){
    var data = $(this).attr('data-num')
    var name = $(this).html()
    $('#country').html(name).attr('data-num',data)
    $('.country-box').removeClass('on')
  })
  $('.login-btn').click(function(){
    var invite_code = getQueryString('invite_code')
    var account_name = getQueryString('account_name')
    var area = $('#country').attr('data-num')
    var phone = $('#phoneNum').val()
    var vaildCode = $('#intro3').val()

    $.ajax({
      type:'POST',
      url:'https://dealer.bitpie.songchenwen.com/api/v1/invite/user/recode',
      dataType:'json',
      data:{
        area:area,
        phone  :phone,
        inviteCode:invite_code,
        vaildCode   :vaildCode,
        accountName:account_name
      },
      success:function(data){
        if(data.result){
          window.location = '/share/get_reward.html'
        }else{
          alert(data.rm)
        }
      }
    })
  })
})
