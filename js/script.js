let user_input = document.getElementById("user_input");
let user_result = document.getElementById("user_result");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let info = document.getElementById("info");
let moreInfo = document.getElementById("moreinfo");
let stb = document.getElementById("stb");
let EA = document.getElementById("EA");
let EV = document.getElementById("EV");
let CH = document.getElementById("CH");
let CM = document.getElementById("CM");

btn.addEventListener("click", function () {
  let name = document.getElementById("name");
  let lastName = document.getElementById("lastname");
  let age = document.getElementById("age");
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");

  let bmi = `${Math.floor((weight.value / height.value ** 2) * 10000)}`;

  if (
    name.value === "" ||
    lastName.value === "" ||
    age.value === "" ||
    height.value === "" ||
    weight.value === ""
  ) {
    alert("لطفا تمامی فیلدها را پر کنید.");
    return;
  }

  user_result.style.display = "block";

  stb.innerHTML = `<h2>شاخص توده بدنی شما : ${bmi} است.</h2>`;

  if (bmi >= 40) {
    CM.style.backgroundColor = "#DF2E38";
    CM.style.borderColor = "#FF0303";
    CM.style.color = "black";
    CM.innerHTML = `<h2>چاقی مفرط</h2> <h2>40 < </h2>`;
    CH.innerHTML = `<h2>چاق</h2>`;
    EV.innerHTML = `<h2>اضافه وزن</h2>`;
    EA.innerHTML = `<h2>ایده آل</h2>`;
    CH.style.backgroundColor = "gray";
    CH.style.color = "lightgray";
    CH.style.borderColor = "black";
    EV.style.backgroundColor = "gray";
    EV.style.color = "lightgray";
    EV.style.borderColor = "black";
    EA.style.backgroundColor = "gray";
    EA.style.color = "lightgray";
    EA.style.borderColor = "black";
  } else if (bmi >= 30 && bmi < 40) {
    CH.style.backgroundColor = "#F8DE22";
    CH.style.borderColor = "#F0A500";
    CH.style.color = "black";
    CH.innerHTML = `<h2>چاق</h2> <h2>39.9 - 30</h2>`;
    CM.innerHTML = `<h2>چاقی مفرط</h2>`;
    EV.innerHTML = `<h2>اضافه وزن</h2>`;
    EA.innerHTML = `<h2>ایده آل</h2>`;
    CM.style.backgroundColor = "gray";
    CM.style.color = "lightgray";
    CM.style.borderColor = "black";
    EV.style.backgroundColor = "gray";
    EV.style.color = "lightgray";
    EV.style.borderColor = "black";
    EA.style.backgroundColor = "gray";
    EA.style.color = "lightgray";
    EA.style.borderColor = "black";
  } else if (bmi >= 25 && bmi < 30) {
    EV.style.backgroundColor = "#B0D9B1";
    EV.style.borderColor = "#618264";
    EV.style.color = "black";
    EV.innerHTML = `<h2>اضافه وزن</h2> <h2>29.9 - 25</h2>`;
    CM.innerHTML = `<h2>چاقی مفرط</h2>`;
    CH.innerHTML = `<h2>چاق</h2>`;
    EA.innerHTML = `<h2>ایده آل</h2>`;
    CH.style.backgroundColor = "gray";
    CH.style.color = "lightgray";
    CH.style.borderColor = "black";
    CM.style.backgroundColor = "gray";
    CM.style.color = "lightgray";
    CM.style.borderColor = "black";
    EA.style.backgroundColor = "gray";
    EA.style.color = "lightgray";
    EA.style.borderColor = "black";
  } else if (bmi >= 18.5 && bmi < 25) {
    EA.style.backgroundColor = "#35A29F";
    EA.style.borderColor = "#071952";
    EA.style.color = "black";
    EA.innerHTML = `<h2>ایده آل</h2> <h2>24.9 - 18.5</h2>`;
    EV.innerHTML = `<h2>اضافه وزن</h2>`;
    CM.innerHTML = `<h2>چاقی مفرط</h2>`;
    CH.innerHTML = `<h2>چاق</h2>`;
    CH.style.backgroundColor = "gray";
    CH.style.color = "lightgray";
    CH.style.borderColor = "black";
    CM.style.backgroundColor = "gray";
    CM.style.color = "lightgray";
    CM.style.borderColor = "black";
    EV.style.backgroundColor = "gray";
    EV.style.color = "lightgray";
    EV.style.borderColor = "black";
  } else {
    CM.style.backgroundColor = "gray";
    CM.style.borderColor = "black";
    CM.style.color = "lightgray";
    CM.innerHTML = `<h2>چاقی مفرط</h2>`;
    CH.innerHTML = `<h2>چاق</h2>`;
    EV.innerHTML = `<h2>اضافه وزن</h2>`;
    EA.innerHTML = `<h2>ایده آل</h2>`;
    CH.style.backgroundColor = "gray";
    CH.style.color = "lightgray";
    CH.style.borderColor = "black";
    EV.style.backgroundColor = "gray";
    EV.style.color = "lightgray";
    EV.style.borderColor = "black";
    EA.style.backgroundColor = "gray";
    EA.style.color = "lightgray";
    EA.style.borderColor = "black";
    alert("شاخص توده بدنی شما در کتگوری های موجود قرار نمی گیرد.");
  }

  let fn = name.value;
  let ln = lastName.value;
  info.innerHTML = `<h2>${fn} ${ln} عزیز شاخص توده بدنی شما به شکل زیر میباشد :</h2>`;
  let sen = new Date().getFullYear() - age.value;
  let qad = height.value;
  let vazn = weight.value;
  moreInfo.innerHTML = `<h2>سن شما : ${sen}</h2><h2>قد شما : ${qad} سانتی متر</h2><h2>وزن شما : ${vazn} کیلوگرم</h2>`;
});
