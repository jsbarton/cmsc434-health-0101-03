
function onLoad() {

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

}

function changeColor(element){
  let bars = document.getElementsByName('bar');
  let cnt = 0
  let len = bars.length
  let val = 0
  
  let i = parseInt(element.value)
  if (element.style.backgroundColor = "turquoise") {
      val = i-1
      while (i < len) {
          bars.item(i).style.backgroundColor = "white"
          i+=1
      }
  } else {
        val = i
        while (i >= 0) {
          bars.item(i).style.backgroundColor = "turquoise"
          i-=1  
        }
      
      
  }
  

  val*=20;
  document.getElementById('level').innerHTML = val+20
  
}

window.onload = onLoad