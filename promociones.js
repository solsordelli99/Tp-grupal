const promos = [
  {
    nombre: "ManuComics",
    tipo: "comiqueria",
    oferta: "Llevas 2 y obtené 50% OFF en la 2da unidad",
    descripcion: "Todos los clásicos de Marvel con descuento",
    imagen: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    enlace: "https://manubogliani.github.io/manucomics.galeria/promociones.html",
    badge: "DESCUENTO"
  },
  {
    nombre: "Lily Bookstore",
    tipo: "libreria",
    oferta: "Llevá 3 libros, pagá 2",
    descripcion: "Promoción en toda la sección de novelas",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elcronista/EBC5FDSBUVA5TK7BID2W6VEDK4.png",
    enlace: "https://deoliva-13.github.io/TP-LocalComercial-SegundaEntrega/promociones.html",
    badge: "3x2"
  },
  {
    nombre: "Pandora Argentina",
    tipo: "accesorios",
    oferta: "Tu compra de Pulsera + collar por tan solo $299.999",
    descripcion: "Joyas únicas que celebran tus momentos más especiales.",
    imagen: "https://st2.depositphotos.com/11698096/49956/i/450/depositphotos_499567032-stock-photo-soest-germany-august-2021-pandora.jpg",
    enlace: "https://solsordelli99.github.io/Trabajo-obligatorio-Local-comercial/promociones.html",
    badge: "OFERTA"
  },
  {
    nombre: "Power Red Helmet Store",
    tipo: "jugueteria",
    oferta: "Compra 2, lleva 3",
    descripcion: "Los mejores cascos para tus aventuras",
    imagen: "https://i.pinimg.com/736x/e6/62/87/e66287f766d396443577303e7e4500ee.jpg",
    enlace: "https://poweredhelmetstore.vercel.app/pages/promociones.html",
    badge: "2x3"
  },
  {
    nombre: "ManuComics",
    tipo: "comiqueria",
    oferta: "10% OFF en Compras superiores a $30.000",
    descripcion: "Válido en toda nuestra tienda",
    imagen: "https://figurasaescala.wordpress.com/wp-content/uploads/2015/01/wpid-img_236646838378868.jpeg",
    enlace: "https://manubogliani.github.io/manucomics.galeria/promociones.html",
    badge: "EXCLUSIVO"
  },
  {
    nombre: "Lily Bookstore",
    tipo: "libreria",
    oferta: "20% OFF en Compras superiores a %30.000",
    descripcion: "Sumérgete en nuevos mundo de fantasía",
    imagen: "https://m.media-amazon.com/images/I/51ewXPe3gyL.jpg",
    enlace: "https://deoliva-13.github.io/TP-LocalComercial-SegundaEntrega/promociones.html",
    badge: "OFERTA"
  },
  {
    nombre: "Pandora Argentina",
    tipo: "accesorios",
    oferta: "Con tu compra de 3 anillos accede a un 10% de descuento",
    descripcion: "Diseños exclusivos para todos los gustos",
    imagen: "https://pandoraar.vtexassets.com/arquivos/ids/383424/183021C01_4.png?v=638866549810900000",
    enlace: "https://solsordelli99.github.io/Trabajo-obligatorio-Local-comercial/promociones.html",
    badge: "OFERTA"
  },
  {
    nombre: "Power Red Helmet Store",
    tipo: "jugueteria",
    oferta: "20% de descuento por compras superiores a $50.000",
    descripcion: "",
    imagen: "https://atomix.blob.core.windows.net/images/uploads/2020/02/power-ranger--focus-0-0-1200-600.webp",
    enlace: "https://poweredhelmetstore.vercel.app/pages/promociones.html",
    badge: "2x3"
  },
  {
    nombre: "",
    tipo: "jugueteria",
    oferta: "Compra 2, lleva 3",
    descripcion: "",
    imagen: "https://via.placeholder.com/300x200?text=Mundo+Juguetero",
    enlace: "#jugueteria-promo",
    badge: "2x3"
  },
  {
    nombre: "",
    tipo: "jugueteria",
    oferta: "Compra 2, lleva 3",
    descripcion: "",
    imagen: "https://via.placeholder.com/300x200?text=Mundo+Juguetero",
    enlace: "#jugueteria-promo",
    badge: "2x3"
  }
];

const container = document.getElementById("promos-container");
const storeFilter = document.getElementById("store-filter");

function renderPromos(tipo = "") {
  container.innerHTML = "";

  promos
    .filter(p => !tipo || p.tipo === tipo)
    .forEach(promo => {
      const card = document.createElement("div");
      card.className = "promo-card";
      card.innerHTML = `
        <div class="promo-badge">${promo.badge}</div>
        <img src="${promo.imagen}" alt="${promo.nombre}" class="promo-img">
        <div class="promo-content">
          <h3 class="promo-store">${promo.nombre}</h3>
          <p class="promo-offer">${promo.oferta}</p>
          <p class="promo-text">${promo.descripcion}</p>
          <a href="${promo.enlace}" class="promo-link">Ver detalles →</a>
        </div>
      `;
      container.appendChild(card);
    });
}

storeFilter.addEventListener("change", e => renderPromos(e.target.value));

// Cargar todas al inicio
renderPromos();
