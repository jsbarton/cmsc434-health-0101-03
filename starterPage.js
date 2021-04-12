function getInfo() {

let temp = document.getElementById('gender');

  let obj = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    height: document.getElementById('height').value,
    weight: document.getElementById('weight').value,
    gender: temp.options[temp.selectedIndex].text
  }

alert(JSON.stringify(obj));
  localStorage.setItem("userInfo", obj);
  window.location.href="profilePage.html";
}
