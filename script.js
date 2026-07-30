
const translations = {
  es: {
    topbar:"Abastecimiento mayorista y distribución de exportación desde EE. UU.",
    navCompany:"Empresa", navCategories:"Categorías", navMarkets:"Mercados", navProcess:"Cómo funciona", navContact:"Contacto", navQuote:"Solicitar cotización",
    heroBadge:"Abastecimiento mayorista desde Estados Unidos",
    heroTitle1:"Distribución mayorista confiable",
    heroTitle2:"en todo el continente americano.",
    heroLead:"IDEA Distributors conecta compradores comerciales de América Latina con productos de consumo de Estados Unidos, abastecimiento ágil y apoyo orientado a la exportación.",
    heroCta:"Solicitar cotización", heroSecondary:"Conocer IDEA",
    proof1:"Con sede en Florida", proof2:"Enfoque mayorista", proof3:"Mercados de exportación",
    float1Kicker:"Abastecimiento", float1Title:"Red de proveedores en EE. UU.", float2Kicker:"Mercados", float2Title:"América Latina",
    strip1:"Bienes de consumo", strip2:"Pedidos mayoristas", strip3:"Coordinación de exportación", strip4:"Comunicación ágil",
    trustIntro:"Creada para mayoristas, minoristas y compradores comerciales que buscan suministro confiable desde EE. UU.",
    companyEyebrow:"SOBRE IDEA DISTRIBUTORS", companyTitle:"Un socio práctico para el comercio internacional.",
    companyText1:"Ayudamos a compradores empresariales a identificar oportunidades adecuadas de suministro en EE. UU., evaluar la disponibilidad y coordinar requisitos comerciales mediante una comunicación clara y ágil.",
    companyText2:"Nuestro enfoque es directo: comprender la necesidad, abastecer responsablemente y proporcionar la información necesaria para tomar decisiones de compra con confianza.",
    companyCardTitle:"Con sede en Florida", companyCardText:"Atendiendo oportunidades mayoristas internacionales",
    companyPoint1Title:"Enfoque comercial", companyPoint1Text:"Diseñada específicamente para solicitudes mayoristas B2B.",
    companyPoint2Title:"Coordinación clara", companyPoint2Text:"Comunicación directa sobre productos, cantidades y condiciones.",
    companyPoint3Title:"Perspectiva exportadora", companyPoint3Text:"Oportunidades evaluadas considerando destino y logística.",
    companyLegal:"IDEA Distributors es una división de IDEA Investments LLC.",
    categoriesEyebrow:"CATEGORÍAS DE PRODUCTOS", categoriesTitle:"Categorías de consumo seleccionadas para oportunidades mayoristas.",
    categoriesIntro:"La disponibilidad, las marcas, cantidades mínimas y elegibilidad de exportación varían según la solicitud y el destino.",
    cat1Title:"Cuidado personal", cat1Text:"Productos de higiene, aseo y cuidado personal cotidiano.",
    cat2Title:"Productos para el hogar", cat2Text:"Artículos de limpieza, lavandería y uso doméstico.",
    cat3Title:"Alimentos y bebidas", cat3Text:"Oportunidades seleccionadas en alimentos empacados y bebidas.",
    cat4Title:"Salud y bienestar", cat4Text:"Categorías seleccionadas de bienestar y venta libre.",
    cat5Title:"Bebé y familia", cat5Text:"Bienes de consumo familiares y productos seleccionados para bebés.",
    cat6Title:"Mercancía general", cat6Text:"Otras oportunidades evaluadas caso por caso.",
    catLink:"Consultas mayoristas →",
    valueEyebrow:"POR QUÉ IDEA DISTRIBUTORS", valueTitle:"Coordinación profesional desde la consulta hasta la oportunidad.",
    value1Title:"Abastecimiento en EE. UU.", value1Text:"Acceso a canales de proveedores y mayoristas en Estados Unidos.",
    value2Title:"Claridad comercial", value2Text:"Comunicación clara sobre disponibilidad, cantidades y próximos pasos.",
    value3Title:"Evaluación flexible", value3Text:"Solicitudes consideradas según categoría, destino y viabilidad comercial.",
    value4Title:"Apoyo orientado a exportación", value4Text:"Un modelo de negocio creado para oportunidades mayoristas internacionales.",
    marketsEyebrow:"MERCADOS DE EXPORTACIÓN", marketsTitle:"Conectamos el suministro estadounidense con compradores de América Latina.",
    marketsText:"Nuestro enfoque inicial incluye Venezuela, Colombia y destinos seleccionados de América del Sur y el Caribe. Cada solicitud se revisa según disponibilidad, requisitos del destino y viabilidad logística.",
    market3:"América del Sur", market4:"Caribe", marketsCta:"Conversemos sobre tu mercado →",
    processEyebrow:"CÓMO FUNCIONA", processTitle:"Un proceso claro desde la consulta hasta la propuesta comercial.",
    process1Title:"Comparte tu necesidad", process1Text:"Indica la categoría, marcas preferidas, cantidades y destino.",
    process2Title:"Evaluamos el abastecimiento", process2Text:"Revisamos disponibilidad, viabilidad comercial y consideraciones de exportación.",
    process3Title:"Recibe los próximos pasos", process3Text:"Respondemos con información disponible, condiciones o preguntas de seguimiento.",
    quoteEyebrow:"SOLICITAR COTIZACIÓN", quoteTitle:"Cuéntanos qué necesita tu empresa.",
    quoteText:"Proporciona tantos detalles como sea posible para evaluar la solicitud eficientemente.", quoteDirect:"Contacto directo",
    formName:"Nombre", formCompany:"Empresa", formEmail:"Correo empresarial", formCountry:"País de destino",
    formRequest:"Productos, marcas, cantidades y detalles adicionales", formSubmit:"Preparar solicitud de cotización",
    formNote:"Se abrirá tu aplicación de correo con la solicitud preparada para que la revises antes de enviarla.",
    contactEyebrow:"CONSULTAS COMERCIALES", contactTitle:"Conversemos sobre tu próxima oportunidad mayorista.", contactCta:"Contactar a IDEA Distributors",
    footerTagline:"Abastecimiento mayorista y distribución de exportación desde Estados Unidos.", footerCompany:"Empresa", footerContact:"Contacto", footerLegal:"Legal", footerEntity:"Una división de IDEA Investments LLC"
  }
};
let language="en";
const languageToggle=document.getElementById("languageToggle");
languageToggle.addEventListener("click",()=>{
  language=language==="en"?"es":"en";
  document.documentElement.lang=language;
  languageToggle.textContent=language==="en"?"ES":"EN";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(language==="es"&&translations.es[key]){
      if(!el.dataset.original) el.dataset.original=el.innerHTML;
      el.innerHTML=translations.es[key];
    } else if(language==="en"&&el.dataset.original){
      el.innerHTML=el.dataset.original;
    }
  });
});
const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{
  const open=mainNav.classList.toggle("open");
  document.body.classList.toggle("menu-open",open);
  menuToggle.setAttribute("aria-expanded",String(open));
});
mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  mainNav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded","false");
}));
document.getElementById("quoteForm").addEventListener("submit",event=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const subject=language==="es"?`Solicitud de cotización - ${data.get("company")}`:`Quote Request - ${data.get("company")}`;
  const body=language==="es"
    ?`Nombre: ${data.get("name")}\nEmpresa: ${data.get("company")}\nCorreo empresarial: ${data.get("email")}\nPaís de destino: ${data.get("country")}\n\nProductos, marcas, cantidades y detalles:\n${data.get("request")}`
    :`Name: ${data.get("name")}\nCompany: ${data.get("company")}\nBusiness email: ${data.get("email")}\nDestination country: ${data.get("country")}\n\nProducts, brands, quantities and details:\n${data.get("request")}`;
  window.location.href=`mailto:isaac@ideadistributors.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
