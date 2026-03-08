// ========== GALLERY DATA ==========
const galleryData = [
    {
        id: 1,
        title: 'Science Lab Discovery',
        description: 'Students exploring chemistry experiments in our laboratory',
        image: './asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg',
        category: 'academics',
        date: '2026-04-05'
    },
    {
        id: 2,
        title: 'Championship Game Victory',
        description: 'Our team celebrates their regional championship win',
        image: './asset/Casa_Para_Estudiantes_Atras_by_estevao.jpg',
        category: 'sports',
        date: '2026-04-03'
    },
    {
        id: 3,
        title: 'Spring Concert',
        description: 'Our music department performs at the annual spring concert',
        image: './asset/Exterior_Classic_house_by_GTOdesign.jpg',
        category: 'arts',
        date: '2026-03-30'
    },
    {
        id: 4,
        title: 'Field Day Fun',
        description: 'Students enjoying outdoor activities and team competitions',
        image: './asset/Casa_Para_Estudiantes_Atras_2_by_estevao.jpg',
        category: 'community',
        date: '2026-04-01'
    },
    {
        id: 5,
        title: 'Debate Team Success',
        description: 'Students working together on a group project during class',
        image: './asset/media page academics pictures/debate team 1.jpg',
        category: 'academics',
        date: '2026-04-02'
    },
    {
        id: 6,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/media page academics pictures/debate team 2.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 7,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/media page academics pictures/debate team 3.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 8,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/media page academics pictures/debate team 4.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 9,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/media page academics pictures/debate team 5.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 10,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/media page academics pictures/debate team 6.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 11,
        title: 'Collaborative Learning',
        description: 'Our debate team advances to the state tournament',
        image: './asset/media page academics pictures/debate team 7.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 12,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/Exterior_Classic_house_by_GTOdesign.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 13,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/Exterior_Classic_house_by_GTOdesign.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 14,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/Exterior_Classic_house_by_GTOdesign.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 6,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/Exterior_Classic_house_by_GTOdesign.jpg',
        category: 'academics',
        date: '2026-03-28'
    },
    {
        id: 15,
        title: 'Debate Team Success',
        description: 'Our debate team advances to the state tournament',
        image: './asset/Exterior_Classic_house_by_GTOdesign.jpg',
        category: 'academics',
        date: '2026-03-28'
    }
];

let currentCategory = 'all';
let currentLightboxIndex = 0;
let filteredItems = [...galleryData];

// ========== RENDER GALLERY ==========
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const emptyState = document.getElementById('emptyState');
    
    // Filter items
    filteredItems = currentCategory === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === currentCategory);

    // Clear grid
    galleryGrid.innerHTML = '';

    if (filteredItems.length === 0) {
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    // Render items
    filteredItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <div class="gallery-item-title">${item.title}</div>
                <span class="gallery-item-category">${item.category}</span>
            </div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

// ========== CATEGORY FILTERING ==========
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.dataset.category;
        renderGallery();
    });
});

// ========== LIGHTBOX FUNCTIONS ==========
function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateLightbox() {
    const item = filteredItems[currentLightboxIndex];
    document.getElementById('lightboxImage').src = item.image;
    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxDescription').textContent = item.description;
    document.getElementById('lightboxDate').textContent = new Date(item.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
    updateLightbox();
}

function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightbox();
}

// ========== LIGHTBOX EVENT LISTENERS ==========
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', nextImage);
document.getElementById('lightboxPrev').addEventListener('click', prevImage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Close lightbox on backdrop click
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

// ========== SLIDER FUNCTIONS ==========
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    return index;
}

let sliderIndex = 0;
document.querySelector('.prev').addEventListener('click', () => {
    sliderIndex = showSlide(--sliderIndex);
});
document.querySelector('.next').addEventListener('click', () => {
    sliderIndex = showSlide(++sliderIndex);
});

// ========== MENU TOGGLE ==========
// document.getElementById('menuToggle').addEventListener('click', () => {
//     document.getElementById('navLinks').classList.toggle('active');
// });


// ========== INITIALIZE ==========
renderGallery();