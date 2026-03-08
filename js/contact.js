// Contact info data
const infoData = [
  { icon: "📞", label: "Phone", value: "+234 801 234 5678", href: "tel:+2348012345678" },
  { icon: "✉️", label: "Email", value: "pta@schoolname.edu.ng", href: "mailto:pta@schoolname.edu.ng" },
  { icon: "📌", label: "Address", value: "12 School Road, Lagos, Nigeria" },
  { icon: "🕐", label: "Office School Hours", value: "Mon – Thu: 7:30 AM – 2:00 PM Fri: 7:30 AM – 12:40 PM" }
];

const grid = document.getElementById("infoGrid");
infoData.forEach(item => {
  const card = document.createElement("div");
  card.className = "info-card";
  const valHTML = item.href
    ? `<a href="${item.href}">${item.value}</a>`
    : `<p>${item.value}</p>`;
  card.innerHTML = `
    <div class="info-icon">${item.icon}</div>
    <h3>${item.label}</h3>
    ${valHTML}`;
  grid.appendChild(card);
});