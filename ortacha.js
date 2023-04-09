const words = [
  {
    englishWord: "area",
    id: 1,
  },
  {
    englishWord: "around",
    id: 2,
  },
  {
    englishWord: "artict",
    id: 3,
  },
  {
    englishWord: "average",
    id: 4,
  },
  {
    englishWord: "people",
    id: 5,
  },
  {
    englishWord: "ant",
    id: 6,
  },
  {
    englishWord: "gun",
    id: 7,
  },
  {
    englishWord: "color",
    id: 8,
  },
  {
    englishWord: "car",
    id: 9,
  },
  {
    englishWord: "bad",
    id: 10,
  },
];
const uzWords = [
  {
    uzbWord: "hudud",
    id: 1,
  },
  {
    uzbWord: "atrofida",
    id: 2,
  },
  {
    uzbWord: "rassom",
    id: 3,
  },
  {
    uzbWord: "o'rtacha",
    id: 4,
  },
  {
    uzbWord: "odam",
    id: 5,
  },
  {
    uzbWord: "chumoli",
    id: 6,
  },
  {
    uzbWord: "qurol",
    id: 7,
  },
  {
    uzbWord: "rang",
    id: 8,
  },
  {
    uzbWord: "moshina",
    id: 9,
  },
  {
    uzbWord: "yomon",
    id: 10,
  },
];

for (var i = uzWords.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = uzWords[i];
  uzWords[i] = uzWords[j];
  uzWords[j] = temp;
}
const wordListLeft2 = document.querySelector(".wordListRight");
const natija2 = uzWords
  .map(
    (item) => `
<li class="wordItem1" key="${item.id}">
  
            <button class="btnItem">
           <label class="container">
  <input type="checkbox" class="checkbox1" value='${item.id}'>
  <p>${item.uzbWord}</p>
  <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path></g></g></svg>
</label>
            
              <div class="star-1">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-2">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-3">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-4">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-5">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-6">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </li>
`
  )
  .join("");
wordListLeft2.innerHTML = natija2;

// const checkbox1=document.querySelector(".checkbox1")
// const checkbox2 = document.querySelector(".checkbox2");
// const score = document.querySelector('.score')

// const checked = true
// if (checkbox1.checked ) {
//     score.innerHTML = `<p>${item.id}</p>`

// } else {
//     console.log("Checkboxlarning id sifati bir xil");console.log('djadjjbkb');
// }

for (var i = words.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = words[i];
  words[i] = words[j];
  words[j] = temp;
}
const wordListLeft = document.querySelector(".wordListLeft");
const natija = words
  .map(
    (item) => `
<li class="wordItem1" key="${item.id}">
  
            <button class="btnItem">
           <label class="container">
  <input type="checkbox" class="checkbox2" value="${item.id}">
  <p>${item.englishWord}</p>
  <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path></g></g></svg>
</label>
            
              <div class="star-1">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-2">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-3">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-4">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-5">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="star-6">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </li>
`
  )
  .join("");
wordListLeft.innerHTML = natija;
let bool1 = false;
let elem = undefined;
let items1 = document.getElementsByClassName("wordListLeft");
for (let i = 0; i < items1[0].children.length; i++) {
  items1[0].children[i].children[0].onclick = click1;
}
function click1(e) {
  let bbt = e.target;
  console.log(bbt);
  while (bbt.className != "btnItem") {
    bbt = bbt.parentNode;
  }
  console.log(bbt);
  if (bool1 == false) {
    elem = bbt;
    bool1 = true;
  }
}
let items2 = document.getElementsByClassName("wordListRight");
for (let i = 0; i < items2[0].children.length; i++) {
  items2[0].children[i].children[0].onclick = click2;
}
function click2(e) {
  let bbt = e.target;
  while (bbt.className != "btnItem") {
    bbt = bbt.parentNode;
  }
  if (bool1 == true) {
    console.log(elem.parentNode);
    if (
      elem.parentNode.getAttribute("key") == bbt.parentNode.getAttribute("key")
    ) {
      elem.parentNode.removeChild(elem);
      bbt.parentNode.removeChild(bbt);
      elem = undefined;
    } else {
      alert("Kechirasiz tanlagan so'zingiz tarjimasi xato");
    }
    bool1 = false;
  }
}
