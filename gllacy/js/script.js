var popup = document.querySelector(".modal-login");
var link = document.querySelector(".feedback-button");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var user = popup.querySelector("[name=user]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

link.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup.classList.add("modal-show");
 user.focus();
});

close.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup.classList.remove("modal-show");
 popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
 popup.classList.remove("modal-error");

 user.classList.remove("field-error");
 email.classList.remove("field-error");
 comment.classList.remove("field-error");

 popup.offsetWidth = popup.offsetWidth;

 if (!user.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");
  user.classList.add("field-error");
 }

 if (!email.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");
  email.classList.add("field-error");
 }

 if (!comment.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");
  comment.classList.add("field-error");
 }
});

window.addEventListener("keydown", function(evt) {
 if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
   popup.classList.remove("modal-show");
   popup.classList.remove("modal-error");
  }
 }
});

var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");

var btn1 = document.querySelector(".switch-1");
var btn2 = document.querySelector(".switch-2");
var btn3 = document.querySelector(".switch-3");

var body = document.querySelector("body");

btn1.addEventListener("click", function(evt) {
 document.querySelector(".slide-show").classList.remove("slide-show");
 slide1.classList.add("slide-show");
 document.querySelector(".active-switch").classList.remove("active-switch");
 btn1.classList.add("active-switch");
 body.classList.remove("body-2");
 body.classList.remove("body-3");
 body.classList.add("body-1");
});

btn2.addEventListener("click", function(evt) {
 document.querySelector(".slide-show").classList.remove("slide-show");
 slide2.classList.add("slide-show");
 document.querySelector(".active-switch").classList.remove("active-switch");
 btn2.classList.add("active-switch");
 body.classList.remove("body-1");
 body.classList.remove("body-3");
 body.classList.add("body-2");
});

btn3.addEventListener("click", function(evt) {
 document.querySelector(".slide-show").classList.remove("slide-show");
 slide3.classList.add("slide-show");
 document.querySelector(".active-switch").classList.remove("active-switch");
 btn3.classList.add("active-switch");
 body.classList.remove("body-1");
 body.classList.remove("body-2");
 body.classList.add("body-3");
});
