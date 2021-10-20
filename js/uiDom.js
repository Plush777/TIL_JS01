document.getElementById(''); // ID 찾기
document.getElementsByTagName(''); //태그로 찾기 (배열 리턴)
document.getElementsByClassName(''); // class로 찾기 (배열 리턴)'

document.querySelector(''); // css 셀렉터로 찾기 (첫번째 요소만)
//ex) ('li.nav-item');
document.querySelectorAll(''); // css 셀렉터로 찾기 (모든 요소,배열리턴)
element.style.property = ''; //요소의 css 속성값 수정
//ex) document.getElementById('myh1').style.color = 'red';

/* <p><a id="abc" href="#">CODING FACTORY</a></p> */

element.setAttribute('',''); //속성 정하기
//ex) document.getElementById( 'abc' ).setAttribute( 'href', 'https://www.codingfactory.net' );
// abc의 href 속성을 정함.

element.parentNode(''); //부모 요소
element.nextElementSibling(''); //현재요소의 다음 형제
element.previousElementSibling(''); //현재요소의 이전 형제
element.children(''); //자식 요소


/* 이벤트 */

/*load , resize , keydown , keyup , change , click , focus , mousedown , mouseout , mouseover ,
mousemove , mouseup , select*/