$(function(){
  var btn = true
  $('#share').click(function(){
    var opts = {
      scale: 3,
      logging: true,
      width: 750,
      height: 1334
    }
    if(btn){
      btn = false
      dsBridge.call("bp_interaction.getShareLink","",function (v) {
        $("#share_qr").html(' ')
        new QRCode(document.getElementById('share_qr'), v);
        html2canvas(document.querySelector("#share-canvas"),opts).then(function(canvas) {
          var img = canvas.toDataURL('image/png')
          dsBridge.call("bp_interaction.openShareBase64Img",img, function (v) {
            btn = true
          })
        });

      })
    }
  })
})