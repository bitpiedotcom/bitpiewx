$(function(){
  var btn = true
  $('#share').click(function(){
    dsBridge.call("bp_interaction.openShearPoster","",function (v) {

    })
  })
  $('#copy-url').click(function(){
    var lang = getlang()
    var i18n ;
    if(lang === 'cn') {
      i18n = cn
    }else{
      i18n = en
    }

    dsBridge.call("bp_interaction.getShareLink","",function (v) {
      var url =i18n.share.font + v
      dsBridge.call("bp_interaction.copyShareText",url,function (v) {

      })

    })

  })
})