$(function(){
  var run=$("progress"),
      num=0,flag,
      start=$("#start"),
      end=$("#end"),
      re=$("#restart");
  start.click(function(){
    flag=window.setInterval(function(){
      run.attr("value",num++)
    },200)
  }),
  end.click(function(){
    window.clearInterval(flag);
  }),
  re.click(function(){
    run.attr("value",num=0)
  });

});
