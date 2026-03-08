/* =====================
   STAFF DATA
===================== */

const staffs = Array.from({length:15}, (_,i)=>({
  name:["Mrs. Tonte",
    "Mr. Mallam",
    "Mr. Paul",
    "Mrs. Bursar",
    "Mrs. Inedia",
    "Mrs. Vivian"
  ][i%6],

  position:["Director Principal",
    "Vice Principal Admin.",
    "Vice Principal Acad.",
    "Bursar",
    "Exam Officer/Math Teacher",
    "School Shop Vendor/History Teacher",
    "******",
    "tailor",
    "*****",
    "Accountant",
    "****",
    "***",
    "****",
    "****",
    "********"
  ][i%15],

  image:[`./asset/Staffs/main staffs/principal.jpg`,
    './asset/Staffs/main staffs/vice prinpal admin..jpg',
    './asset/Staffs/main staffs/vice principal acad..jpg',
    './asset/Staffs/main staffs/mrs. burser.jpg',
    './asset/Staffs/main staffs/mrs. inedia.jpg',
    './asset/Staffs/main staffs/mrs. vivan.jpg',
  ][i%6],
  history:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iusto adipisci dolores, maiores blanditiis deleniti at ratione optio reiciendis, explicabo nam delectus, sunt quo exercitationem quisquam ut aperiam labore quidem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iusto adipisci dolores, maiores blanditiis deleniti at ratione optio reiciendis, explicabo nam delectus, sunt quo exercitationem quisquam ut aperiam labore quidem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iusto adipisci dolores, maiores blanditiis deleniti at ratione optio reiciendis, explicabo nam delectus, sunt quo exercitationem quisquam ut aperiam labore quidem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. This staff member has years of professional experience contributing to organizational growth and innovation."
}));

/* =====================
   RENDER STAFFS
===================== */

const staffList = document.getElementById("staffList");

function renderStaff(list){
  staffList.innerHTML="";

  list.forEach(staff=>{
    const div=document.createElement("div");
    div.className="staff";

    div.innerHTML=`
      <img src="${staff.image}">
      <div class="info">
        <div class="name">${staff.name}</div>
        <div class="position">${staff.position}</div>
        <div class="history" hidden>${staff.history}</div>
      </div>
      <div class='toggle-icon'>+</div>
    `;

    addExpandBehaviour(div);
    staffList.appendChild(div);
  });

  observeScroll();
}

renderStaff(staffs);

/* =====================
   EXPAND / COLLAPSE
===================== */

function addExpandBehaviour(card){

  card.addEventListener("click",()=>{

    const expanded=document.querySelector(".staff.expanded");

    if(expanded && expanded!==card){
      collapse(expanded);
    }

    card.classList.toggle("expanded");

    const history=card.querySelector(".history");
    history.hidden=!card.classList.contains("expanded");
  });
}

function collapse(card){
  card.classList.remove("expanded");
  card.querySelector(".history").hidden=true;
}

/* =====================
   SEARCH FILTER
===================== */

document.getElementById("search-boxs")
.addEventListener("input",(e)=>{

  const value=e.target.value.toLowerCase();

  const filtered=staffs.filter(s =>
    s.name.toLowerCase().includes(value) ||
    s.position.toLowerCase().includes(value)
  );

  renderStaff(filtered);
});

/* =====================
   SCROLL FADE-IN
===================== */

function observeScroll(){

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{threshold:.2});

  document.querySelectorAll(".staff")
    .forEach(el=>observer.observe(el));
}

function addExpand(card){
  card.addEventListener("click",()=>{
    const openCard = document.querySelector(".staff.expanded");
    const icon = card.querySelector(".toggle-icon");

    // Close any other open card first
    if(openCard && openCard !== card){
      openCard.classList.remove("expanded");
      openCard.querySelector(".history").hidden = true;
      openCard.querySelector(".toggle-icon").classList.replace('-', '+');
    }

    // Toggle current card
    const isExpanding = card.classList.toggle("expanded");
    card.querySelector(".history").hidden = !isExpanding;

    // Toggle Icon Class
    if(isExpanding) {
      icon.classList.replace('+', '-');
    } else {
      icon.classList.replace('-', '+');
    }
  });
}
