let target = document.querySelector("#dynamic");


// 커서 깜빡임 효과
function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);

// 타이핑 리셋
function resetTyping(){
  target.textContent = "";
  dynamic(randomString());
}

function randomString(){
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to Python", "Learn to React"];
  let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

// 한 글자씩 텍스트 출력
function dynamic(randomArr){
  if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(() => {
      dynamic(randomArr);
    }, 80);
  }
  else{
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());