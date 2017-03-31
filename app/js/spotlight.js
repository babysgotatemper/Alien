//jQuery spotlight plugin by A.R.Shakhmukhametov and A.V.Aksyutenko
$.fn.spotlight=function(opts){
 $(this).load(function(){
  var pos=$(this).offset();
  var vouale;
  var spotlight;
  var spotimage;
  var spotmask;
  vouale=document.createElement('div');
  $(vouale).css('position','absolute');
  $(vouale).css('top',pos.top);
  $(vouale).css('left',pos.left);
  $(vouale).css('overflow','hidden');
  $(vouale).width(500);
  $(vouale).height(300);
  if(jQuery.browser.msie){
     $(vouale).css('background-color','black');
  }
  else{
     $(vouale).css('background-color','rgba(0,0,0,0.9)');
  }
  document.body.appendChild(vouale);
  spotlight=document.createElement('div');
  $(spotlight).width(150);
  $(spotlight).height(150);
  $(spotlight).css('overflow','hidden');
  $(spotlight).css('display','none');
  $(spotlight).css('position','absolute');
  $(spotlight).css('left',pos.left);
  $(spotlight).css('top',pos.top);
  $(spotlight).css('z-index',500);
  spotimage=document.createElement('img');
  $(spotimage).attr('src',$(this).attr('src'));
  $(spotimage).css('height',$(this).height());
  $(spotimage).css('width',$(this).width());
  spotmask=document.createElement('img');
  $(spotmask).attr('src','/img/spotlight.png');
  $(spotmask).css('position','absolute');
  $(spotmask).css('left',pos.left);
  $(spotmask).css('top',pos.top);
  $(spotmask).css('z-index',550);
  spotlight.appendChild(spotimage);
  vouale.appendChild(spotlight);
  vouale.appendChild(spotmask);
  $('body').mousemove( function(e){
   var x=e.pageX-(pos.left)-75;
   var y=e.pageY-(pos.top)-75;
   $(spotlight).css('display','');
   $(spotlight).css('left',x);
   $(spotlight).css('top',y);
   $(spotmask).css('left',x);
   $(spotmask).css('top',y);
   $(spotimage).css('marginLeft',-x);
   $(spotimage).css('marginTop',-y);
  });
 }).each(function(){
  if(this.complete || (jQuery.browser.msie && parseInt(jQuery.browser.version) == 6))
   $(this).trigger("load");
   });
 ;}
