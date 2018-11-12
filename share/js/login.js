$(function(){
  var url = 'https://dealer.bitpie.songchenwen.com'
  var win_height = parseInt($(document).height())
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
      return alert("请输入正确的手机号");
    }
    var self = $(this);
    self.attr('disabled',true);
    $.ajax({
      type:'GET',
      url:url+'/api/v1/invite/getCode?phone='+phoneNum+'&area='+country,
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
            self.text('重新获取');
            $('#getCode').removeClass('on')
            return;
          }
          self.html('<span lang="en">重新获取，</span>'+index);
          index--;
        },1000);

        self.text('已发送');
      },
      error:function(e){
        return alert("失败");
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
    $.ajax({
      type:'POST',
      url:url+'/api/v1/invite/user/gift/add',
      dataType:'json',
      success:function(data){
        console.log(data)
      }
    })
  })
  $('#share').click(function(){
    var opts = {
      scale: 2,
      logging: true,
      width: 750,
      height: 1334
    }
    // html2canvas(document.querySelector("#share-canvas"),opts).then(function(canvas) {
    //   $('body').append(canvas)
    //   var img = canvas.toDataURL('image/png')
    //   console.log(img)
    // });
    dsBridge.call("bp_interaction.getShareLink","",function (v) {
      console.log(v)
      alert('0')
      new QRCode(document.getElementById('qrcode'), v);
      html2canvas(document.querySelector("#share-canvas"),opts).then(function(canvas) {
        $('body').append(canvas)
        var img = canvas.toDataURL('image/png')
        alert('1')
        dsBridge.call("bp_interaction.openShareBase64Img",img, function (v) {
          console.log(v)
          alert('2')
        })
      });

    })
  })
})
