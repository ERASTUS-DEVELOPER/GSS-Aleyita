const prefects = [
      { name: "Gidoen Erastus Jesimiel", position: "Head-Boy", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Ukadike Chinecherem Rejoice", position: "Head-Girl", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Ibrahim Fawas", position: "Assistant Head-Boy", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Mairiga Aliyu Naimat", position: "Assistant Head-Girl", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Silas Wapnen Peter", position: "Labour Prefect", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Obialu Emmanuel", position: "Assistant Labour Prefect", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Abdulkarim Basit", position: "Social Prefect (Boys)", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Mike Faith", position: "Social Prefect (Girls)", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Victor Fumi Deborah", position: "Time Kepper", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Odey Sophia Ogeyi Onome", position: "Assistant Time Kepper", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Egbunu Aishat", position: "Health Prefect", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Olagunju Eunice Oluwadarasimi", position: "Assistant Health Prefect", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Samila Divine Zichat", position: "Assembly Prefect", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      { name: "Philibus Faith Godiya", position: "Assistant Assembly Prefect", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"},
      // { name: "Matthew Clark", position: "Intern", img: "./asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg"}
    ];

    const container = document.getElementById("prefect-container");
    const searchInput = document.getElementById("searchInput");

    function displayPrefect(list) {
      container.innerHTML = "";
      list.forEach(prefect => {
        const card = document.createElement("div");
        card.className = "prefect-card";
        card.setAttribute("tabindex", "0");

        card.innerHTML = `
          <img src="${prefect.img}" alt="${prefect.name}" class="prefect-img" />
          <div class="prefect-name">${prefect.name}</div>
          <div class="prefect-position">${prefect.position}</div>
        `;

        card.addEventListener("click", () => expandPrefect(index));
        container.appendChild(card);                           
        setTimeout(() => card.classList.add("show"), 50);
      });
    }

                     
    displayPrefect(prefects);

                   
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();
      const filtered = prefects.filter(prefect =>
        prefect.name.toLowerCase().includes(keyword) ||
        prefect.position.toLowerCase().includes(keyword)
      );
      displayPrefect(filtered);
    });

                                              
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      document.querySelectorAll(".prefect-card").forEach(card => {
        observer.observe(card);
      });
    }, 100);
