function northFunction() {
    document.getElementById("discount").style.display = "block";
    document.getElementById("discount").style.textShadow = "1px 1px 2px #333";
    document.getElementById("hours").style.display = "block";
    northHours = "Monday - Friday 6am - 8pm";
    document.getElementById("hours").firstElementChild.innerHTML = northHours;
  }

function southFunction() {
    document.getElementById("discount").style.display = "none";
    document.getElementById("hours").style.display = "block";
    southHours = "Monday - Friday 9am - 10pm"
    document.getElementById("hours").firstElementChild.innerHTML = southHours;
  }


northButton = document.getElementById("northButton");
southButton = document.getElementById("southButton");

northButton.addEventListener("click",northFunction);
southButton.addEventListener("click",southFunction);



