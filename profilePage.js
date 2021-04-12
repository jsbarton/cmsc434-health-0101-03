function changeColor(element){
  if (element.style.backgroundColor == "white") {
    let val = document.getElementById('level');
    val = parseInt(val);
    val+=20;
    document.getElementById('level').innerHTML = val.toString();
    element.style.backgroundColor = "turquoise";
  } else {
    element.style.backgroundColor ="white";
  }

}
