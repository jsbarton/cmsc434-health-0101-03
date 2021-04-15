function getInfo() {

  let pass = true

  let name = document.getElementById("name").value

  let n = /\W/g

  if (name.match(n) != null) {
    alert("Error in name: only letters, numbers, and underscores allowed in name")
    pass = false
  }

  let age = document.getElementById("age").value

  let a = /\D/g

  if (age.match(a) != null) {
    alert("Error in age: only digits allowed in age")
    pass = false
  }

  let height = document.getElementById("height").value

  let h = /\D/g

  if (height.match(h) != null) {
    alert("Error in height: only digits for inches allowed in height")
    pass = false
  }

  let weight = document.getElementById("weight").value

  let w = /\D/g

  if (weight.match(w) != null) {
    alert("Error in weight: only digits for pounds allowed in weight")
    pass = false
  }

  let gender = document.getElementById("gender").value

  if (pass) {
    localStorage.setItem("name", name)
    localStorage.setItem("age", age)
    localStorage.setItem("height", height)
    localStorage.setItem("weight", weight)
    localStorage.setItem("gender", gender)
    window.location.href="/profilePage.html";
  }
}





// let temp = document.getElementById('gender');
//
//   let obj = {
//     name: document.getElementById('name').value,
//     age: document.getElementById('age').value,
//     height: document.getElementById('height').value,
//     weight: document.getElementById('weight').value,
//     gender: temp.options[temp.selectedIndex].text
//   }
//
// alert(JSON.stringify(obj));
//   localStorage.setItem("userInfo", obj);
//   window.location.href="profilePage.html";
// }
