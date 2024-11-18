var fw_spread = 250; // 입자가 퍼지는 너비
var fw_scale = 3; // 입자의 크기
var fw_launch_rate = 250; // 발사 간격


// 사용할 색상 배열
var colors = ['#ff0031', '#d04993', '#4fbad1', '#fde656'];

function createFirework(e) {  
  var f = document.createElement('div'); // 불꽃놀이를 위한 div 생성
  f.className = 'firework'; // 클래스 이름 설정
  f.style.width = '3px'; // 너비 설정
  f.style.height = '3px'; // 높이 설정
  f.style.position = 'absolute'; // 절대 위치 설정
  f.style.left = Math.random() * (1920 - 550) + 33 + 'px'; // 33px ~ 1887px 사이의 랜덤한 x 좌표
  f.style.top = '100%'; // 화면 하단에 위치

  f.style.transition = Math.random() < .5 ? 'ease-out ' + 3 + 's' : 'ease-in ' + 2.5 + 's'; // 랜덤한 전환 효과 설정

  document.body.appendChild(f); // 불꽃놀이 div를 body에 추가

  // 입자를 생성하여 불꽃놀이에 추가 (입자 수를 50개로 증가)
  for (var i = 0; i < 50; i++) { // 입자 수 조정
    var p = document.createElement('div');
    p.className = 'particle'; // 입자의 클래스 이름 설정
    p.style.width = '100%'; // 입자 너비
    p.style.height = '100%'; // 입자 높이
    p.style.position = 'absolute'; // 절대 위치 설정
    p.style.left = '0'; // 왼쪽 위치
    p.style.top = '0'; // 위쪽 위치
    p.style.transition = '.5s'; // 전환 시간 설정
    p.style.borderRadius = '50%'; // 둥근 모양으로 설정

    // 두 가지 색상 랜덤 선택
    var color1 = colors[Math.floor(Math.random() * colors.length)];
    var color2 = colors[Math.floor(Math.random() * colors.length)];
    p.style.background = `linear-gradient(${color1}, ${color2})`; // 그라데이션 색상 설정

    f.appendChild(p); // 입자를 불꽃놀이 div에 추가
  }

  setTimeout(function() {
    f.style.top = Math.random() * 50 + 5 + '%'; // 랜덤한 높이로 이동

    f.ontransitionend = function() { // 전환이 끝났을 때
      var p = this.querySelectorAll('.particle'); // 생성된 모든 입자를 선택
      p.forEach(function(elm) {
        var x = Math.random() < .5 ? Math.random() * fw_spread : (-1) * Math.random() * fw_spread; // 랜덤 x 이동
        var y = Math.random() < .5 ? Math.random() * fw_spread : (-1) * Math.random() * fw_spread; // 랜덤 y 이동
        elm.style.left = x + 'px'; // x 좌표 설정
        elm.style.top = y + 'px'; // y 좌표 설정
        elm.style.opacity = '0'; // 투명도 설정
        elm.style.transform = 'scale(' + fw_scale + ')'; // 크기 조정
        elm.ontransitionend = function() {
          this.remove(); // 전환이 끝난 후 입자를 제거
        }
      });
      setTimeout(function() {
        f.remove(); // 불꽃놀이 div 제거
      }, 1000);
    }
  }, 100);  

  setTimeout(createFirework, fw_launch_rate); // 다음 불꽃놀이 생성
}

// 초기 불꽃놀이 생성
createFirework(); 




