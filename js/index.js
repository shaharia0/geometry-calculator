// validation function
// function validate(evt){
//   evt.value = evt.value.replace(/[^0-9]/g,"");
// }
// function isInputNumber(evt){
//   var ch = String.fromCharCode(evt.which);
//   if(!(/[0-9]/.test(ch))){
//     evt.preventDefault();
//   }
// }
let serialNo = 0;
// traingle part 
document.getElementById('traingle-btn').addEventListener('click', function(){
  
  const elementTitle = document.getElementById('triangle-title').innerText;
  const elementTriangleBase = document.getElementById('triangle-base').value;
  const elementTriangleHeight = document.getElementById('triangle-height').value;
   if(elementTriangleBase=='' || elementTriangleHeight=='' || elementTriangleBase <=0 || elementTriangleHeight<=0 || isNaN(elementTriangleBase) || isNaN(elementTriangleHeight 
    || !elementTriangleBase.match('/^\d+/') || !elementTriangleHeight.match('/^\d+/'))){
    return alert ('please provide a valid number (0-9)');
   }
  
  const totalValue = 0.5 *  elementTriangleBase * elementTriangleHeight;
  getValue(elementTitle, elementTriangleBase, elementTriangleHeight, totalValue.toFixed(2));
  serialNo += 1;
  })
// Rectangle part 
document.getElementById('rectangle-btn').addEventListener('click', function(){
  const elementTitle = document.getElementById('triangle-title').innerText;
  const elementRectangleWide = document.getElementById('rectangle-wide').value;
  const elementRectangleLength = document.getElementById('rectangle-length').value;
   if(elementRectangleWide=='' || elementRectangleLength=='' || elementRectangleWide <=0 || elementRectangleLength<=0 || isNaN(elementRectangleWide || elementRectangleLength)){
    return alert ('please provide valid number');
   }
  // const totalValue = parseFloat(elementTriangleBase) * parseFloat(elementTriangleHeight);
  const totalValue = elementRectangleWide * elementRectangleLength;
  getValue(elementTitle, elementRectangleWide, elementRectangleLength, totalValue.toFixed(2));
  serialNo += 1;
  })
// Parallelogram Part
document.getElementById('parallelogram-btn').addEventListener('click', function(){
  serialNo += 1;
  const elementTitle = document.getElementById('parallelogram-title').innerText;
  const elementBValue = document.getElementById('parallelogram-b-value').innerText;
  const elementHValue = document.getElementById('parallelogram-h-value').innerText;
  const totalValue = parseInt(elementBValue) * parseInt(elementHValue);
  getValue(elementTitle, elementBValue, elementHValue, totalValue);
})
// Rhombus part
document.getElementById('rhombus-btn').addEventListener('click', function(){
  serialNo+=1;
  const elementTitle = document.getElementById('rhombus-title').innerText;
  const elementD1Value = document.getElementById('rhombus-d1-value').innerText;
  const elementD2Value = document.getElementById('rhombus-d2-value').innerText;
  const totalValue = 0.5 * parseInt(elementD1Value) * parseInt(elementD2Value);
  getValue(elementTitle,elementD1Value,elementD2Value,totalValue);
})
// Pentagon part
document.getElementById('pentagon-btn').addEventListener('click', function(){
  serialNo+=1;
  const elementTitle = document.getElementById('pentagon-title').innerText;
  const elementPValue = document.getElementById('pentagon-p-value').innerText;
  const elementBValue = document.getElementById('pentagon-b-value').innerText;
  const totalValue = 0.5 * parseInt(elementPValue) * parseInt(elementBValue);
  getValue(elementTitle,elementPValue,elementBValue,totalValue);
})
// Ellipse part
document.getElementById('ellipse-btn').addEventListener('click', function(){
  serialNo+=1;
  const elementTitle = document.getElementById('ellipse-title').innerText;
  const elementAValue = document.getElementById('ellipse-a-value').innerText;
  const elementBValue = document.getElementById('ellipse-b-value').innerText;
  const totalValue = 3.14 * parseInt(elementAValue) * parseInt(elementBValue);
  getValue(elementTitle,elementAValue,elementBValue,totalValue.toFixed(2));
})
// function
function getValue(elementTitle, elementBValue, elementHValue, totalValue){
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');

  tr.innerHTML= `
  <td>${serialNo}</td>
  <td>${elementTitle}</td>
  <td>${totalValue}cm<sup>2</sup></td>
  <td><button class="bg-sky-600 w-full p-2 font-bold text-white rounded">Convert to m<sup>2</sup></button></td>
  `;
  container.appendChild(tr);
}
// random color function 
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 
//card1 color
document.getElementById('triangle-color').addEventListener("mouseover", function(){
      document.getElementById("triangle-color").style.backgroundColor = randomColor();

  
});

//card2 color
document.getElementById('rectangle-color').addEventListener("mouseover", function(){
  document.getElementById("rectangle-color").style.backgroundColor = randomColor();


});
//card3 color
document.getElementById('parallelogram-color').addEventListener("mouseover", function(){
  document.getElementById("parallelogram-color").style.backgroundColor = randomColor();


});
//card4 color
document.getElementById('rhombus-color').addEventListener("mouseover", function(){
  document.getElementById("rhombus-color").style.backgroundColor = randomColor();


});
//card5 color
document.getElementById('pentagon-color').addEventListener("mouseover", function(){
  document.getElementById("pentagon-color").style.backgroundColor = randomColor();


});
//card6 color
document.getElementById('ellipse-color').addEventListener("mouseover", function(){
  document.getElementById("ellipse-color").style.backgroundColor = randomColor();


});

//
// random color function test
// function randomColor() {
//   let color = [];
//   for (let i = 0; i < 3; i++) {
//     color.push(Math.floor(Math.random() * 256));
//   }
//   return 'rgb(' + color.join(', ') + ')';
// } 
// document.addEventListener("mouseover", function(){
//   document.getElementById('triangle-color').style.backgroundColor = randomColor();
//   document.getElementById('rectangle-color').style.backgroundColor = randomColor();
//   document.getElementById('parallelogram-color').style.backgroundColor = randomColor();
//   document.getElementById('rhombus-color').style.backgroundColor = randomColor();
//   document.getElementById('pentagon-color').style.backgroundColor = randomColor();
//   document.getElementById('ellipse-color').style.backgroundColor = randomColor();
// });