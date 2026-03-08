// Excos data
const excos = [
  { name: "Mrs. Adebayo Johnson", role: "Chairperson", desc: "Leading with vision and dedication for over 5 years." },
  { name: "Mr. Chinedu Okafor", role: "Vice Chairperson", desc: "Passionate advocate for quality education and student welfare." },
  { name: "Mrs. Funke Adeyemi", role: "Secretary", desc: "Ensuring seamless communication between parents and the school." },
  { name: "Mr. Ibrahim Musa", role: "Treasurer", desc: "Managing funds with transparency and accountability." },
  { name: "Mrs. Grace Eze", role: "Welfare Officer", desc: "Championing the wellbeing of students and staff alike." },
  { name: "Mr. Tunde Bakare", role: "Public Relations Officer", desc: "Keeping the community informed and engaged." }
];

const excosGrid = document.getElementById("excos-grid");
excos.forEach(e => {
  excosGrid.innerHTML += `
    <div class="exco-card">
      <!-- <div class="exco-icon">${e.img}</div> -->
      <div class="exco-icon">👤</div>
      <h3>${e.name}</h3>
      <p class="role">${e.role}</p>
      <p class="desc">${e.desc}</p>
    </div>`;
});

// Achievements data
const achievements = [
  { icon: "🏆", title: "Best PTA Award 2024", desc: "Recognized as the most active PTA in the district for outstanding community involvement." },
  { icon: "📚", title: "Library Renovation", desc: "Successfully funded and completed a full renovation of the school library with over 2,000 new books." },
  { icon: "❤️", title: "Student Welfare Fund", desc: "Raised over ₦5 million to support underprivileged students with scholarships and supplies." },
  { icon: "⭐", title: "Annual Science Fair", desc: "Organized 3 consecutive award-winning science fairs, inspiring the next generation of innovators." },
];

const achievementsGrid = document.getElementById("achievements-grid");
achievements.forEach(a => {
  achievementsGrid.innerHTML += `
    <div class="achievement-card">
      <div class="achievement-icon">${a.icon}</div>
      <div>
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </div>
    </div>`;
});

// MINUTES DOWNLOAD
const select = document.getElementById('minutesSelect');
const btn = document.getElementById('downloadBtn');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

// Enable button only when a file is selected
select.addEventListener('change', function () {
  btn.disabled = !this.value;
});

// Download the selected file
btn.addEventListener('click', function () {
  if (!select.value) return;

  const link = document.createElement('a');
  link.href = select.value;
  link.download = '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Download started!');
});

// Show a brief toast message
function showToast(msg) {
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
