// Menambahkan event listener pada setiap link navbar untuk menandai yang aktif
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        // Hapus class 'active' dari semua link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

        // Tambahkan class 'active' ke link yang diklik
        this.classList.add('active');
    });
});

// Menambahkan efek scroll untuk navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



// Menambahkan highlight untuk link yang aktif sesuai dengan posisi halaman
const sections = document.querySelectorAll('.page');
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Agar sedikit scroll ke bawah sebelum menandai
        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Menangani pengiriman form Meal Planner
document.getElementById('meal-planner-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const condition = document.getElementById('condition').value;
    const hbLevel = document.getElementById('hb-level').value;

    const resultDiv = document.getElementById('meal-plan-result');

    // Menampilkan hasil perhitungan atau rekomendasi meal plan
    resultDiv.innerHTML = `
        <h3>Meal Plan Recommendation</h3>
        <p>Jenis Kelamin: ${gender === 'female' ? 'Perempuan' : 'Laki-Laki'}</p>
        <p>Kondisi: ${condition === 'pregnant' ? 'Hamil' : 'Tidak Hamil'}</p>
        <p>Kadar Hemoglobin (HB): ${hbLevel}</p>
        <p>Rekomendasi meal plan akan dihitung berdasarkan informasi di atas...</p>
    `;
});

document.getElementById('meal-planner-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const condition = document.getElementById('condition').value;
    const hemoglobin = document.getElementById('hemoglobin').value;

    // Dummy AI prediction
    const mealPlan = `Based on your input:
        - Gender: ${gender === "female" ? "Female" : "Male"}
        - Age: ${age}
        - Condition: ${condition === "pregnant" ? "Pregnant" : "Non-Pregnant"}
        - Hemoglobin Levels: ${hemoglobin} g/dL
        Suggested meal plan will be tailored to increase your iron intake.`;

    // Display Meal Plan Result
    const resultDiv = document.getElementById('meal-plan-result');
    resultDiv.innerHTML = `
        <h3>Meal Plan Recommendation</h3>
        <p>${mealPlan}</p>
    `;

    // Dummy Recipe Recommendations
    const recipes = [
        "Spinach and Chickpea Salad",
        "Grilled Salmon with Lemon",
        "Lentil Soup with Vegetables",
        "Beef Stir-Fry with Broccoli",
        "Iron-Fortified Breakfast Cereal with Milk"
    ];

    const recipeDiv = document.getElementById('recipe-recommendations');
    recipeDiv.innerHTML = `
        <h3>Recommended Recipes</h3>
        <ul>
            ${recipes.map(recipe => `<li>${recipe}</li>`).join('')}
        </ul>
    `;
});

// Menambahkan event listener untuk toggle menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    // Tambahkan atau hapus kelas 'active' untuk menampilkan/menyembunyikan menu
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});


// Menutup menu setelah item dipilih
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});


// Close the menu when a link is clicked
const menuLinks = document.querySelectorAll('#nav-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        // Add active class to the clicked link and remove from others
        menuLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Highlight the active link based on the page section
function highlightActivePage() {
    const currentPage = window.location.hash;
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the highlightActivePage function when the page loads or when hash changes
window.addEventListener('load', highlightActivePage);
window.addEventListener('hashchange', highlightActivePage);
// Fungsi untuk menandai link yang sedang aktif
function updateActiveLink() {
    // Ambil semua elemen link
    const links = document.querySelectorAll('.nav-link');

    // Ambil hash URL saat ini
    const currentHash = window.location.hash;

    // Periksa setiap link
    links.forEach(link => {
        // Jika href link cocok dengan hash halaman saat ini, tambahkan class 'active'
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Panggil fungsi untuk memperbarui status aktif saat halaman dimuat atau hash berubah
window.addEventListener('load', updateActiveLink);
window.addEventListener('hashchange', updateActiveLink);


// Fungsi untuk menghapus form
function clearForm() {
    // Mendapatkan form
    const form = document.getElementById("meal-planner-form");

    // Menghapus nilai semua input form
    form.reset();

    // Menghapus hasil meal plan yang ditampilkan sebelumnya (jika ada)
    const resultDiv = document.getElementById("meal-plan-result");
    resultDiv.innerHTML = '';
    // Menghapus resep yang ditampilkan
    const recipeDiv = document.getElementById("recipe-recommendations");
    recipeDiv.innerHTML = '';
}

// Menambahkan event listener untuk tombol reset
document.getElementById("reset-button").addEventListener("click", clearForm);



function generateAndShowResult() {
    // Proses untuk generate hasil meal plan
    // Misalnya, tampilkan hasil atau hitung hasilnya
    const mealPlanResult = document.getElementById('meal-plan-result');
    // Scroll ke bagian hasil
    mealPlanResult.scrollIntoView({ behavior: 'smooth' });
}

document
    .getElementById("meal-planner-form")
    .addEventListener("submit", async function (event) {
        event.preventDefault();

        const hemoglobin = document.getElementById("hemoglobin").value;

        // Simulasi Hasil dari AI
        const aiResult = {
            hemoglobin: hemoglobin,
            iron_need: 28,
            meal_plan: [
                { name: "Bayam", quantity: 120, image: "https://via.placeholder.com/70?text=Bayam" },
                { name: "Daging Sapi", quantity: 150, image: "https://via.placeholder.com/70?text=Daging+Sapi" },
                { name: "FerDelice", quantity: 2, image: "https://via.placeholder.com/70?text=FerDelice" },
            ],
        };

        const resultDiv = document.getElementById("meal-plan-result");

        // Render Hasil
        resultDiv.innerHTML = `
    <h3>Hasil</h3>
    <div class="meal-plan-summary">
      <div>
        <h5><strong>${aiResult.hemoglobin} </strong></h5>
        <p> g/dL </p>
        <p style="color: white ${aiResult.hemoglobin < 12 ? "red" : "green"};">
          ${aiResult.hemoglobin < 12 ? "RENDAH" : "NORMAL"}
        </p>
      </div>
      <div>
        <h5><strong>${aiResult.iron_need}</strong></h5>
        <p> mg/hari </p>
      </div>
    </div>
    <div class="meal-plan-items">
      ${aiResult.meal_plan
                .map(
                    (item) => `
        <div>
          <img src="${item.image}" alt="${item.name}" />
          <p>${item.name}</p>
          <p>${item.quantity} gram</p>
        </div>
      `
                )
                .join("")}
    </div>
    <p style="color: #721b1b;">Lihat Rekomendasi Resep dari Meal Planner Anda</p>
    <button onclick="showPage('recipes')">RESEP</button>
  `;

        // Scroll ke bagian hasil
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });

async function getAIRecommendation(input) {
    // Simulasi algoritma AI - Ganti dengan API yang terhubung dengan model AI Anda
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                hemoglobin: input.hemoglobin,
                iron_need: 18,
                meal_plan: [
                    { name: "Bayam", quantity: 120, image: "spinach.jpg" },
                    { name: "Daging Sapi", quantity: 150, image: "beef.jpg" },
                    { name: "FerDelice", quantity: 2, image: "ferdelice.jpg" },
                ],
            });
        }, 1000); // Simulasi waktu proses AI
    });
}

async function getAIRecommendation(input) {
    const response = await fetch("https://api-mealplanner.com/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
    });
    return response.json();
}

