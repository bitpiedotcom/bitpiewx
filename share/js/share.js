$(function(){
  var btn = true
  $('#share').click(function(){
    dsBridge.call("bp_interaction.openShearPoster","",function (v) {

    })
  })
  $('#copy-url').click(function(){
    dsBridge.call("bp_interaction.getShareLink","",function (v) {
      var url ="Bitpie 全球最安全的钱包,没有之一" + v
      dsBridge.call('bp_interaction.openShareText',url, function (v) {

      })
    })

  })
})