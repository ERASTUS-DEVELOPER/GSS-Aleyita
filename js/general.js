function animateOnLoad(){
  const anim = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // 🔥 only once
      }
    });
  },{threshold:0.3});

anim.forEach(el=>{observer.observe(el);
  });
}
animateOnLoad()


// const anim = document.querySelectorAll('.animate');
// const observer=new IntersectionObserver(entries=>{
//   entries.forEach(entry=>{
//     entry.target.classList.toggle('show',entry.isIntersecting);
//   });
// },{threshold:0.3});
// anim.forEach(el=>observer.observe(el));



// const darkContent = document.getElementById('darkContent');
// const darkMode = document.getElementById('darkMode');
// let isDark = false;

// darkMode.onclick = function(){
//     isDark = !isDark;
//     darkContent.textContent = isDark ? '⛅' : '🌙';
// }


