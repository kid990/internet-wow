const root = document.getElementById("root");

// Planes de Internet
const internetPlans = [
  {
    id: 1,
    title: "INTERNET",
    speed: "200Mbps",
    contractedSpeed: "100Mbps",
    priceRegular: "S/ 69.90",
    priceMain: "S/ 59.90",
    extraInfo: "x 6 meses de velocidad mejorada",
  },
  {
    id: 2,
    title: "INTERNET",
    speed: "500Mbps",
    contractedSpeed: "200Mbps",
    priceRegular: "S/ 74.90",
     priceMain: "S/ 69.90",
    priceMain: "S/ 69.90",
    extraInfo: "x 6 meses de velocidad mejorada",
  },
];

// Planes de DGO TV
const dgoTvPlans = [
  {
    id: 3,
    title: "DGO TV",
    speed: "200Mbps",
    contractedSpeed: "100Mbps",
    priceRegular: "S/ 69.90",
    priceMain: "S/ 64.90",
    channels: "+18 canales",
    extraInfo: "+ 6 meses de velocidad mejorada",
  },
  {
    id: 4,
    title: "DGO TV",
    speed: "400Mbps",
    contractedSpeed: "200Mbps",
    priceRegular: "S/ 74.90",
    priceMain: "S/ 69.90",
    channels: "+18 canales",
    extraInfo: "+ 6 meses de velocidad mejorada",
  },
  {
    id: 5,
    title: "DGO TV",
    speed: "1000Mbps",
    priceRegular: "S/ 79.90",
    priceMain: "S/ 74.90",
    channels: "+18 canales",
  },
];

// Planes extra (DGO BÁSICO y DGO FULL)
const extraPlans = [
  {
    id: 6,
    title: "DGO BÁSICO",
    speed: "1000Mbps",
    priceRegular: "S/ 133.90",
    priceMain: "S/ 109.90",
    channels: "+60 canales",
  },
  {
    id: 7,
    title: "DGO FULL",
    speed: "1000Mbps",
    priceRegular: "S/ 155.90",
    priceMain: "S/ 122.90",
    channels: "+80 canales",
  },
];

// Render de un plan
function renderPlan(plan) {
  const whatsappMessage = `Hola, estoy interesado en el plan de ${plan.speed} con un precio de ${plan.priceMain}. ¿Podrían darme más información?`;
  return `
    <div class="plan-card">
      ${plan.contractedSpeed ? `<div class="speed-contracted">Velocidad Contratada ${plan.contractedSpeed}</div>` : ""}
      <div class="speed-display">
        ${plan.speed}
        
      </div>
      ${plan.extraInfo ? `<div class="period-badge">${plan.extraInfo}</div>` : ""}
      <img src="images/dgo-logo.png" alt="DGO TV" class="dgo-logo" />
      <div class="channels-text">${plan.channels || ""}</div>
      ${plan.priceRegular ? `<div class="price-regular">Precio regular: ${plan.priceRegular}</div>` : ""}
      <div class="price-main">${plan.priceMain}</div>
      <div class="price-note">Precio con pago puntual</div>
      <a href="https://wa.me/51925969842?text=${encodeURIComponent(whatsappMessage)}" target="_blank" rel="noopener noreferrer">
        <button class="btn-want">Lo quiero</button>
      </a>
      <div class="contact-links">
        <a href="https://wa.me/51925969842?text=${encodeURIComponent(whatsappMessage)}" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
          <img src="images/whatsapp-icon.png" alt="WhatsApp" class="whatsapp-icon" />
        </a>
        <a href="tel:+51984889179" class="call-link">Llamar al 984889179</a>
      </div>
    </div>
  `;
}

// Render de una sección
function renderSection(title, plans) {
  return `
    <section class="section-container">
      <h2>${title}</h2>
      <div class="plans-grid">
        ${plans.map(renderPlan).join("")}
      </div>
    </section>
  `;
}

// Render principal
function renderApp() {
  root.innerHTML = `
    <div class="container">
      <h1>Descubre los planes WOW que tenemos para ti</h1>
      ${renderSection("Planes de INTERNET", internetPlans)}
      ${renderSection("Planes DGO TV", dgoTvPlans)}
      ${renderSection("Planes Extra", extraPlans)}
    </div>
  `;
}

// Inicializar la aplicación
renderApp();
