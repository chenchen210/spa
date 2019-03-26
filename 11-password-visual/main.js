$(function(){
  var $pwd=$("#pwd"),
      $eye=$("#eye");
  $eye.on('mouseover',function(){
   $pwd.attr("type","number");
  }),
  $eye.on('mouseout',function(){
    $pwd.attr("type","password");
  });
});
