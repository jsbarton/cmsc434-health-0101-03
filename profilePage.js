var name = localStorage.getItem("name");
var age = localStorage.getItem("age", age);
var height = localStorage.getItem("height", height);
var weight = localStorage.getItem("weight", weight);
var gender = localStorage.getItem("gender", gender);

document.getElementById('user-name').innerHTML=name;
document.getElementById('flex-age').innerHTML=age;
document.getElementById('flex-height').innerHTML=height;
document.getElementById('flex-weight').innerHTML=weight;

const imgDiv = document.querySelector('.user-image');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#upload-btn');

imgDiv.addEventListener('mouseenter', function()
{
  uploadBtn.style.display = "block";
});

imgDiv.addEventListener('mouseleave', function()
{
  uploadBtn.style.display = "none";
});

file.addEventListener('change', function() {
  const chosenFile = this.files[0];

  if(chosenFile) {
    const reader = new FileReader();
    reader.addEventListener('load', function(){
      img.setAttribute('src', reader.result);
    });

    reader.readAsDataURL(chosenFile);
    // localStorage.setItem("profilePic", chosenFile);
  }
});

function changeColor(element){
  if (element.style.backgroundColor == "white") {
    let val = document.getElementById('level');
    // val = parseInt(val);
    console.log(typeof(val));
    console.log(typeof(20));
    val+=20;
    document.getElementById('level').innerHTML = val;
    element.style.backgroundColor = "turquoise";
  } else {
    element.style.backgroundColor ="white";
  }

}
