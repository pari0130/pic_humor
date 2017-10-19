	
$(document).ready(function() {
		$.localScroll();
		$(".cache").delay(500).fadeOut(500); /*hwi delay 1000*/
		$("#wrapper-header").delay(750).animate({opacity:'1',width:'100%'},500); /*hwi delay 1500*/
		$("#wrapper-navbar").delay(1000).animate({opacity:'1',height:'60px'},500); /*hwi delay 2000*/
		$("#main-container-image").delay(1250).animate({opacity:'1'},500); /*hwi delay 2500*/
		/*$("#getAlert").val();*/
		
	});

/*TRANSITION PAGE*/

var speed = 'slow';

$('html, body').hide();

$(document).ready(function() {
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
});

/* DISABLE HOVER EFFECT WHILE YOU SCROLL FOR A SMOOTHY NAVIGATION */

var body = document.body,
	timer;

window.addEventListener('scroll', function() {

	clearTimeout(timer);

	if(!body.classList.contains('disable-hover'))
		body.classList.add('disable-hover')

	timer = setTimeout(function(){
		body.classList.remove('disable-hover')
	}, 200);

}, false);
 
  /* BOUTON MENU */

$(document).on('touchstart mouseover', '#stripes', function(event){

        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#stripes").stop().animate({scale:'1.2',opacity:'0.5'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

$(document).on('touchend mouseout', '#stripes', function(event){
	
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#stripes").stop().animate({scale:'1',opacity:'1'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

/* MENU SIDE OPEN */

var MENUSIDEOPEN = document.getElementById('stripes');

MENUSIDEOPEN.addEventListener('click', function() {
			   $("#main-container-menu").stop().animate({left:'0'},300); /*hwi default 300*/
}); 

/* BOUTON CROSS */

$(document).on('touchstart mouseover', '#cross-menu', function(event){

        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#cross-menu").stop().animate({scale:'1.2',opacity:'0.5'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

$(document).on('touchend mouseout', '#cross-menu', function(event){
	
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#cross-menu").stop().animate({scale:'1',opacity:'1'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

/* MENU SIDE CLOSE */

var MENUSIDECLOSE = document.getElementById('cross-menu');

MENUSIDECLOSE.addEventListener('click', function() {
			   $("#main-container-menu").stop().animate({'left':'-100%'},300);	
}); 

/* BOUTON MENU ARROW-2 */

$(document).on('touchstart mouseover', '#wrapper-title-2', function(event){

        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#fleche-nav-2").stop().animate({rotate: '90deg',opacity:'1'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

$(document).on('touchend mouseout', '#wrapper-title-2', function(event){
	
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#fleche-nav-2").stop().animate({rotate: '0deg',opacity:'0.5'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

/* BOUTON MENU ARROW-3 */

$(document).on('touchstart mouseover', '#wrapper-title-3', function(event){

        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#fleche-nav-3").stop().animate({rotate: '90deg',opacity:'1'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

$(document).on('touchend mouseout', '#wrapper-title-3', function(event){
	
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#fleche-nav-3").stop().animate({rotate: '0deg',opacity:'0.5'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

/* BOUTON MENU */

$(document).on('touchstart mouseover', '#stripes', function(event){

        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#stripes").stop().animate({scale:'1.2',opacity:'0.5'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

$(document).on('touchend mouseout', '#stripes', function(event){
	
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#stripes").stop().animate({scale:'1',opacity:'1'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

/* BOUTON NEXT */

$(document).on('touchstart mouseover', '#oldnew-next', function(event){

        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#oldnew-next").stop().animate({scale:'1.2',opacity:'0.5'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

$(document).on('touchend mouseout', '#oldnew-next', function(event){
	
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#oldnew-next").stop().animate({scale:'1',opacity:'1'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

/* BOUTON PREV */

$(document).on('touchstart mouseover', '#oldnew-prev', function(event){

        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#oldnew-prev").stop().animate({scale:'1.2',opacity:'0.5'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

$(document).on('touchend mouseout', '#oldnew-prev', function(event){
	
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
			
			   $("#oldnew-prev").stop().animate({scale:'1',opacity:'1'},300);	

            event.handled = true;
        } else {
            return false;
        }
});

$(document).on('touchstart mouseover', '#logo', function(event){

        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
            
               $("#logo").stop().animate({scale:'1.1',opacity:'0.5'},300);  

            event.handled = true;
        } else {
            return false;
        }
});

$(document).on('touchend mouseout', '#logo', function(event){
    
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {
            
               $("#logo").stop().animate({scale:'1',opacity:'1'},300);  

            event.handled = true;
        } else {
            return false;
        }
});

/*FORMULAIRE NEWSLETTER*/
    
/*$("form").on("submit", function(event) {
  event.preventDefault();
  $.post("/burstfly/form-burstfly-modified.asp",$("form").serialize(), function(data) {//alert(data);
    });
});*/

// logout 기능 수행 hwi
function logout(){
	var url;
   // 현재 요청한 위치 의 pathname을 저장함 ~~~ /home.do 등
	   /*if(getQuerystring('cont_id') != '' && getQuerystring('cont_id') != null){*/
   if(window.location.pathname != "/home.do"){	   
	   /*getQueryString 함수를 이용해서 url주소 parameter 값을 받아온다.*/
	   url = window.location.pathname+"?cont_id="+getQuerystring('cont_id')+"&mn="+getQuerystring('mn');
	   alert("url : " + url);
	   alert("encoding url : " + encodeURIComponent(url));	 
   }else{
	   url = window.location.pathname;   
   }	
    /*받아온값을 인코딩 시켜주지 않으면 ?뒤에 &하나까지 값만 받아오고 2개는 받아지지 않으므로 인코딩 해줌*/
	location.href = $("#getContextPath").val()+"/logout.do?url="+encodeURIComponent(url);
}

// alert 띄우기
/*function showAlert(){
	$("#modal_trigger_alert").click();
};*/

// detail page 에서 login시 cont_id, mn 값을 
function getQuerystring(paramName){ 
	   var _tempUrl = window.location.search.substring(1); // url에서 처음부터 '?'까지 삭제
	   var _tempArray = _tempUrl.split('&'); // '&'을 기준으로 분리하기
	   for(var i = 0; _tempArray.length; i++) { 
		   var _keyValuePair = _tempArray[i].split('='); // '=' 을 기준으로 분리하기
		   if(_keyValuePair[0] == paramName){ // _keyValuePair[0] : 파라미터 명
			   // _keyValuePair[1] : 파라미터 값
			   return _keyValuePair[1]; 
		   } 
	   }
} 