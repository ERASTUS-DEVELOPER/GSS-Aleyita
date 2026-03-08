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
