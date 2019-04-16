$(function(){

  var n=6;
  var $container=$('.main');
  //模板块方式
  var DOM ='<input class="timer-button" type="button" value="同意(6s)" disabled>';
  $container.html(DOM);
  //var $timerbtn =$('<input typr="button" value="同意(6s)" disabled>');
  //$timerbtn.appendTo($container);
  
 // $container.append($timerbtn);
  
  var $btnAgree = $('input[type="button"]');
  
  var timer=window.setInterval(function(){
    n--;
    if(n === 0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    }else{
      $btnAgree.val('同意('+n+'s)');
    }
  },1000);

  $btnAgree.click(function(){
    alert('SPA! 10-success!');
  });
});
