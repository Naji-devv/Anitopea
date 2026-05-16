const animeData = [
    { title: "One Piece", desc: "Luffy and his crew sail the seas in search of the legendary treasure.", img: "onepiece.jpg", video: "onepiece_preview.mp4" },
    { title: "Naruto Shippuden", desc: "Naruto’s journey continues as he faces Akatsuki and seeks peace.", img: "naruto.jpg", video: "naruto_preview.mp4" },
    { title: "Jujutsu Kaisen", desc: "Yuji Itadori battles curses alongside sorcerers in a dark world.", img: "jujutsu.jpg", video: "jujutsu_preview.mp4" },
    { title: "Attack on Titan", desc: "Humanity fights for survival against giant Titans.", img: "aot.jpg", video: "aot_preview.mp4" },
    { title: "Bleach", desc: "Ichigo Kurosaki becomes a Soul Reaper to protect the living and the dead.", img: "bleach.jpg", video: "bleach_preview.mp4" },
    { title: "Solo Leveling", desc: "Sung Jin-Woo evolves from weakest hunter to unstoppable force.", img: "sololeveling.jpg", video: "sololeveling_preview.mp4" },
    { title: "Black Clover", desc: "Asta, born without magic, strives to become the Wizard King.", img: "blackclover.jpg", video: "blackclover_preview.mp4" }
];

// Navigation system
function navigate(page) {
    const content = document.getElementById("content");
    content.innerHTML = "";

    if (page === "home") {
        content.innerHTML = `
      <section class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1>Welcome to Anitopia</h1>
          <p>Your gateway to anime streaming, discussions, and fan art.</p>
          <button onclick="navigate('catalog')" class="cta-btn">Explore Catalog</button>
        </div>
      </section>
    `;
    }

    if (page === "catalog") {
        const grid = document.createElement("div");
        grid.className = "anime-grid";

        animeData.forEach(anime => {
                    const card = document.createElement("div");
                    card.className = "anime-card";
                    card.innerHTML = `
        <video src="${anime.video}" poster="${anime.img}" muted loop></video>
        <h3>${anime.title}</h3>
        <p>${anime.desc}</p>
      `;
                    grid.appendChild(card);

                    // Play video on hover