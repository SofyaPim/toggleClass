'use strict'

let form_popup = document.getElementsByClassName("form-request-popup");
let form_request = document.querySelector(".form-request-button-box");
let close_button = document.querySelector(".form-request-popup-close");
let content = document.querySelector(".form-request-popup-content");

form_request.onclick = function () {
    if (form_popup[0].className == "form-request-popup hidden") {
        form_popup[0].className = "form-request-popup see";
    } else if (form_popup[0].className == "form-request-popup see") {
        form_popup[0].className = "form-request-popup hidden";
    }
}

close_button.onclick = () =>{
    form_popup[0].className = "form-request-popup hidden";
}



$("form").submit(function(e){
    e.preventDefault();

    let fioVal = $(this).find("[name='fio']").val();
    let emailVal = $(this).find("[name='email']").val();
    let phoneVal = $(this).find("[name='phone']").val();

    let errorElement = $(this).find(".error-message");

    if(fioVal == "" || emailVal == "" || phoneVal ==""){
// .html -позволяет вставлять текст внутрь html элемента
        var errorMessage = "Вы не заполнили поля";
    
    if(fioVal == ""){
        $(this).find("[name='fio']").css("border-color", "red");
        errorMessage = errorMessage + "Ваша фамилия? ";
    }else{
        $(this).find("[name='fio']").css("border-color", "green");
    }
    if(emailVal == ""){
        $(this).find("[name='email']").css("border-color", "red");
        errorMessage = errorMessage + "некорректный адрес ";
    }else{
        $(this).find("[name='email']").css("border-color", "green");
    }
    if(phoneVal == ""){
        $(this).find("[name='phone']").css("border-color", "red");
        errorMessage = errorMessage + "Телефон?";
    }else{
        $(this).find("[name='phone']").css("border-color", "green");
    }
    errorElement.html(errorMessage);
    errorElement.slideDown();
}else{
    alert("Все классно, форма была отправлена");
    errorElement.slideUp();
    $(this).find("[name='fio']").css("border-color", "green");
    $(this).find("[name='email']").css("border-color", "green");
    $(this).find("[name='phone']").css("border-color", "green");
}

});


$("[name='fio'], [name='email'],[name='phone']").keyup(function(e){
    if(e.keyCode != 27 && e.keyCode !=9 && e.keyCode !=16 && e.keyCode !=17){
        if($(this).val().length >=2 && $(this).val().length <= 30){
            $(this).css("border-color", "green");
        }else{
            $(this).css("border-color", "red");
        }
    }
});

//функция явления формы народу
$(window).keydown(function (e) { 
    if(e.keyCode == 220){
        form_popup[0].className = "form-request-popup flipInY animated";
        setTimeout(() => {
            form_popup[0].className = "form-request-popup see";
        }, 1000);
    }

});

$(window).keydown(function (e) { 
    if(e.keyCode == 27){
        form_popup[0].className = "form-request-popup hinge animated slow";
        setTimeout(() => {
            form_popup[0].className = "form-request-popup hidden";
        }, 2010);
    }

});


$(window).keydown(function(e){
  if(e.keyCode == 32 || e.keyCode == 190 ){
    $("[type='submit']").click();
  }    
})
$(window).keydown(function(e){
  if(e.keyCode == 49){
    content.className = "alt_dark";
  }
})
$(window).keydown(function(e){
  if(e.keyCode == 50){
    content.className = "alt_red";
  }
})


$(document).ready(function()
{
	
	$('.faq-quest').toggleClass('inactive-quest');
	
	
	//var contentwidth = $('.faq-quest').width();
	//$('.faq-answer').css({'width' : contentwidth });
	
	
	$('.faq-quest').first().toggleClass('active-quest').toggleClass('inactive-quest');
	$('.faq-answer').first().slideDown().toggleClass('open-content');
	
	
	$('.faq-quest').click(function () {
		if($(this).is('.inactive-quest')) {
			$('.active-quest').toggleClass('active-quest').toggleClass('inactive-quest').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-quest').toggleClass('inactive-quest');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-quest').toggleClass('inactive-quest');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});
	
	return false;
});
