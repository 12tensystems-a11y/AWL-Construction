window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('on',scrollY>70));
function g(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target)}}),{threshold:0.07});
document.querySelectorAll('.R').forEach(el=>obs.observe(el));
function sub(){
  if(document.getElementById('fn').value.trim()&&document.getElementById('fe').value.trim()){
    document.getElementById('form-area').style.display='none';
    document.getElementById('fok').style.display='block';
  }
}
function toggleMenu(){
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('nav-r').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('burger').classList.remove('open');
  document.getElementById('nav-r').classList.remove('open');
}
document.addEventListener('click',function(e){
  var navR=document.getElementById('nav-r');
  var burger=document.getElementById('burger');
  if(navR&&navR.classList.contains('open')&&!navR.contains(e.target)&&!burger.contains(e.target)){closeMenu();}
});
