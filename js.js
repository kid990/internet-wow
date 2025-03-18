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
    promo: "x 6 meses pago puntual",
    extraInfo: "x 6 meses de velocidad mejorada",
  },
  {
    id: 2,
    title: "INTERNET",
    speed: "500Mbps",
    contractedSpeed: "200Mbps",
    priceRegular: "S/ 74.90",
    priceMain: "S/ 69.90",
    promo: "x 6 meses pago puntual",
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
    promo: "x 6 meses pago puntual",
    channels: "+ 25 canales",
    extraInfo: "+ 6 meses de velocidad mejorada",
  },
  {
    id: 4,
    title: "DGO TV",
    speed: "400Mbps",
    contractedSpeed: "200Mbps",
    priceRegular: "S/ 74.90",
    priceMain: "S/ 69.90",
    promo: "x 6 meses pago puntual",
    channels: "+ 25 canales",
    extraInfo: "+ 6 meses de velocidad mejorada",
  },
  {
    id: 5, // ESTE NO TIENE VELOCIDAD PROMOCIONAL
    title: "DGO TV",
    speed: "1000Mbps",
    priceRegular: "S/ 79.90",
    priceMain: "S/ 74.90",
    promo: "x 6 meses pago puntual",
    channels: "+ 25 canales",
  },
];

// Planes DGO + L1MAX
const dgoL1MaxPlans = [
  {
    id: 6,
    title: "DGO + L1MAX",
    speed: "400Mbps",
    contractedSpeed: "200Mbps",
    priceRegular: "S/ 123.90",
    priceMain: "S/ 94.90",
    promo: "x 6 meses pago puntual",
    channels: "+ 27 canales + L1MAX",
    extraInfo: "x 6 meses de velocidad mejorada",
  },
  {
    id: 7, // ESTE NO TIENE VELOCIDAD PROMOCIONAL
    title: "DGO + L1MAX",
    speed: "1000Mbps",
    priceRegular: "S/ 127.90",
    priceMain: "S/ 99.90",
    promo: "x 6 meses pago puntual",
    channels: "+ 27 canales + L1MAX",
  },
];

// Planes extra (DGO BÁSICO y DGO FULL)
const extraPlans = [
  {
    id: 8, // ESTE NO TIENE VELOCIDAD PROMOCIONAL
    title: "DGO BÁSICO",
    speed: "1000Mbps",
    priceRegular: "S/ 133.90",
    priceMain: "S/ 109.90",
    promo: "x 6 meses pago puntual",
    channels: "+ 70 canales",
  },
  {
    id: 9, // ESTE NO TIENE VELOCIDAD PROMOCIONAL
    title: "DGO FULL",
    speed: "1000Mbps",
    priceRegular: "S/ 155.90",
    priceMain: "S/ 122.90",
    promo: "x 6 meses pago puntual",
    channels: "+ 90 canales",
  },
];

// Función para obtener la categoría del plan
function getPlanCategory(plan) {
  if (internetPlans.includes(plan)) return "Solo INTERNET";
  if (dgoTvPlans.includes(plan)) return "INTERNET + DGO TV";
  if (dgoL1MaxPlans.includes(plan)) return "INTERNET + DGO + L1MAX";
  if (extraPlans.includes(plan)) return "Planes EXTRA";
  return "Plan desconocido";
}

// Generar mensaje de WhatsApp
// Función para generar el mensaje de WhatsApp
function generateWhatsAppMessage(plan) {
  const category = getPlanCategory(plan);
  const realSpeed = plan.contractedSpeed || plan.speed;
  const realPrice = plan.priceRegular;
  const promoSpeed = plan.contractedSpeed ? plan.speed : null;
  const promoPrice = plan.priceMain;

  let message = `Hola, estoy interesado en el plan *${category}*.
Plan real: ${realSpeed}${plan.channels ? "  " + plan.channels : ""} - ${realPrice}.`;

  if (promoSpeed) {
    message += `\nPlan promocional x 6 meses: ${promoSpeed}${plan.channels ? " + " + plan.channels : ""} - ${promoPrice} x 6 meses con pago puntual.`;
  } else {
    message += `\nPrecio promocional x 6 meses con pago puntual: ${promoPrice}.`;
  }

  message += "\nQuiero adquirir ese plan.";
  return message;
}

// Render de un plan
// Render de un plan
function renderPlan(plan) {
  const whatsappMessage = generateWhatsAppMessage(plan);
  const isInternetPlan = internetPlans.includes(plan);
  const planImage = isInternetPlan ? "images/wifi.png" : "images/dgo-logo.png";

  return `
    <div class="plan-card">
      ${plan.contractedSpeed ? `<div class="speed-contracted">Velocidad Contratada ${plan.contractedSpeed}</div>` : ""}
      <div class="speed-display">${plan.speed}</div>
      ${plan.extraInfo ? `<div class="period-badge">${plan.extraInfo}</div>` : ""}
      ${plan.promo ? `<div class="promo-badge">${plan.promo}</div>` : ""}
      <img src="${planImage}" alt="${plan.title}" class="plan-logo" />
      <div class="channels-text">${plan.channels || ""}</div>
      ${plan.priceRegular ? `<div class="price-regular">Precio regular: ${plan.priceRegular}</div>` : ""}
      <div class="price-main">${plan.priceMain}</div>
      <div class="price-note">X 6 meses con pago puntual</div>
      <a href="https://wa.me/51984889179?text=${encodeURIComponent(whatsappMessage)}" target="_blank" rel="noopener noreferrer">
        <button class="btn-want">Lo quiero</button>
      </a>
      <div class="contact-links">
        <a href="https://wa.me/51984889179?text=${encodeURIComponent(whatsappMessage)}" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
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
      ${renderSection("Planes INTERNET + DGO TV", dgoTvPlans)}
      ${renderSection("Planes INTERNET + DGO + L1MAX", dgoL1MaxPlans)}
      ${renderSection("Planes EXTRA", extraPlans)}
    </div>
  `;
}

// Inicializar la aplicación
renderApp();