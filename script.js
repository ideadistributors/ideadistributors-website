const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const languageToggle = document.getElementById("languageToggle");
const quoteForm = document.getElementById("quoteForm");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const translations = {
  es: {
    topbar:"Abastecimiento mayorista y distribución de exportación desde EE. UU.",
    navCompany:"Empresa",navCategories:"Categorías",navMarkets:"Mercados",navProcess:"Cómo funciona",navContact:"Contacto",navQuote:"Solicitar cotización",
    heroBadge:"Abastecimiento mayorista desde Estados Unidos",heroTitle1:"Su socio confiable en EE. UU.",heroTitle2:"para mayoreo y exportación",
    heroLead:"IDEA Distributors ayuda a mayoristas, distribuidores, minoristas e importadores a obtener productos de calidad desde Estados Unidos con logística confiable, precios competitivos y apoyo personalizado para la exportación.",
    heroCta:"Solicitar cotización",heroSecondary:"Conocer IDEA",proof1:"Con sede en Florida",proof2:"Enfoque mayorista",proof3:"Mercados de exportación",
    float1Kicker:"Abastecimiento",float1Title:"Red de proveedores en EE. UU.",float2Kicker:"Enfoque exportador",float2Title:"Latinoamérica y el Caribe",
    strip1:"Abastecimiento en EE. UU.",strip2:"Pedidos mayoristas",strip3:"Coordinación de exportación",strip4:"Atención ágil",
    companyEyebrow:"SOBRE IDEA DISTRIBUTORS",companyTitle:"Un socio práctico para el comercio internacional.",
    companyText1:"Ayudamos a compradores comerciales a identificar oportunidades de suministro en EE. UU., evaluar disponibilidad y coordinar los detalles necesarios para comprar con confianza.",
    companyText2:"Nuestro enfoque es directo: entender la necesidad, abastecer responsablemente, comunicar con claridad y considerar el destino y la logística.",
    companyCardTitle:"Enfoque exportador",companyCardText:"Conectamos oferta estadounidense con compradores mayoristas internacionales",
    companyPoint1Title:"Enfoque comercial",companyPoint1Text:"Diseñado para solicitudes de mayoristas, distribuidores, minoristas e importadores.",
    companyPoint2Title:"Coordinación clara",companyPoint2Text:"Comunicación directa sobre productos, cantidades, tiempos y condiciones.",
    companyPoint3Title:"Perspectiva exportadora",companyPoint3Text:"Evaluamos oportunidades considerando destino y viabilidad logística.",
    companyLegal:"IDEA Distributors es una división de IDEA Investments LLC.",
    categoriesEyebrow:"CATEGORÍAS DE PRODUCTOS",categoriesTitle:"Bienes de consumo de EE. UU. seleccionados para oportunidades mayoristas.",
    categoriesIntro:"Nos especializamos en Cuidado Personal y abastecemos una gama más amplia de bienes de consumo. La disponibilidad, marcas, cantidades mínimas y elegibilidad de exportación varían según la solicitud y el destino.",
    specialty:"Especialidad",cat1Title:"Cuidado Personal",cat1Text:"Productos de higiene, aseo, belleza, baño, cuerpo y cuidado personal diario.",
    cat2Title:"Mercancía General",cat2Text:"Oportunidades adicionales de productos de consumo evaluadas según demanda y viabilidad comercial.",
    cat3Title:"Productos para el Hogar",cat3Text:"Limpieza, lavandería, almacenamiento y artículos prácticos para el hogar.",
    cat4Title:"Cocina y Comedor",cat4Text:"Utensilios, almacenamiento de alimentos, vajilla y accesorios prácticos de cocina.",
    cat5Title:"Productos para Bebé",cat5Text:"Productos seleccionados para baño, cuidado, higiene y consumo familiar.",
    catLink:"Consultas mayoristas →",
    valueEyebrow:"POR QUÉ IDEA DISTRIBUTORS",valueTitle:"Coordinación profesional desde la consulta hasta la oportunidad.",
    value1Title:"Abastecimiento confiable",value1Text:"Acceso a proveedores, distribuidores y canales mayoristas de EE. UU. para solicitudes comerciales calificadas.",
    value2Title:"Evaluación competitiva",value2Text:"Revisión de productos, cantidades y precios con viabilidad comercial en mente.",
    value3Title:"Coordinación de exportación",value3Text:"Apoyo para organizar la información y los detalles comerciales necesarios para envíos internacionales.",
    value4Title:"Comunicación ágil",value4Text:"Seguimiento claro, preguntas prácticas y actualizaciones oportunas durante el proceso.",
    marketsEyebrow:"MERCADOS DE EXPORTACIÓN",marketsTitle:"Conectamos la oferta de EE. UU. con compradores de Latinoamérica.",
    marketsText:"Nuestro enfoque inicial incluye Venezuela, Colombia y destinos seleccionados de Sudamérica y el Caribe. Cada solicitud se revisa según disponibilidad, requisitos del destino y viabilidad logística.",
    market3:"Sudamérica",market4:"Caribe",marketsCta:"Conversemos sobre su mercado →",marketOverlay:"Abastecimiento mayorista con coordinación orientada al destino",
    processEyebrow:"CÓMO FUNCIONA",processTitle:"Un proceso claro desde la consulta hasta la propuesta comercial.",
    process1Title:"Comparta su necesidad",process1Text:"Indique categoría, marcas preferidas, cantidades, destino y tiempos.",
    process2Title:"Evaluamos el abastecimiento",process2Text:"Revisamos disponibilidad, viabilidad comercial, cantidades mínimas y consideraciones de exportación.",
    process3Title:"Reciba los próximos pasos",process3Text:"Respondemos con información disponible, condiciones comerciales o preguntas específicas.",
    quoteEyebrow:"SOLICITAR COTIZACIÓN",quoteTitle:"Cuéntenos qué necesita su empresa.",quoteText:"Incluya la mayor cantidad de detalles posible para evaluar la solicitud eficientemente.",
    quoteDirect:"Contacto directo",formName:"Nombre",formCompany:"Empresa",formEmail:"Correo empresarial",formCountry:"País de destino",
    formRequest:"Productos, marcas, cantidades y detalles adicionales",formSubmit:"Preparar solicitud de cotización",
    formNote:"Se abrirá su aplicación de correo con la solicitud preparada para que pueda revisarla antes de enviarla.",
    contactEyebrow:"CONSULTAS COMERCIALES",contactTitle:"Conversemos sobre su próxima oportunidad mayorista.",contactCta:"Contactar a IDEA Distributors",
    footerTagline:"Abastecimiento mayorista y distribución de exportación desde Estados Unidos.",footerCompany:"Empresa",footerContact:"Contacto",footerLegal:"Legal",footerEntity:"Una división de IDEA Investments LLC"
  }
};

let language = "en";
languageToggle?.addEventListener("click", () => {
  language = language === "en" ? "es" : "en";
  document.documentElement.lang = language;
  languageToggle.textContent = language === "en" ? "ES" : "EN";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (!el.dataset.en) el.dataset.en = el.textContent.trim();
    const key = el.dataset.i18n;
    el.textContent = language === "es" && translations.es[key] ? translations.es[key] : el.dataset.en;
  });
});

quoteForm?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const subject = encodeURIComponent(`Wholesale Quote Request - ${data.get("company")}`);
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Company: ${data.get("company")}
Business email: ${data.get("email")}
Destination country: ${data.get("country")}

Products / brands / quantities:
${data.get("request")}`
  );
  window.location.href = `mailto:isaac@ideadistributors.com?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
