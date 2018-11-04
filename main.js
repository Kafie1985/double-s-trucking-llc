 var imgList = document.querySelectorAll(".img");
 var modal = document.getElementById("modal")
 var modalContainer = document.querySelector(".modal-container");
 var close = document.querySelector(".close");
 var inputDate = document.querySelectorAll('.date')
 var  currentDate = new Date();



 close.onclick = function () {
      modal.src = "";
      modalContainer.style.visibility = "hidden"
      modalContainer.style.opacity = "0"

 };



 for (var i = 0; i < imgList.length; i++) {
      imgList[i].addEventListener('click', function () {
           var imgSrc = this.getAttribute("src")
           modal.src = imgSrc;
           modalContainer.style.opacity = "1";
           modalContainer.style.visibility = "visible"
      })
 };

 for (var d = 0; d < inputDate.length; d++) {
      inputDate[d].value = currentDate;
 }