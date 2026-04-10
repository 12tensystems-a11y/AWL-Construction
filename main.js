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
