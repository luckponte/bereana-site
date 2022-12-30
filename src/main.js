window.addEventListener("load", () => {
  // know jesus
  document.querySelector("#know-jesus").addEventListener("click", (e) => {
    document.querySelector("#content-trigger-jesus").click();
  });

  // control mobile menu functions
  let menuOpen = false;
  const mobileMenu = document.querySelector("#navbar-default");

  document.querySelector("#burger-menu").addEventListener("click", (e) => {
    menuOpen = !menuOpen;

    if (menuOpen) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("block");
    } else {
      mobileMenu.classList.remove("block");
      mobileMenu.classList.add("hidden");
    }
  });

  document.querySelectorAll(".menu-option").forEach((el) => {
    el.addEventListener("click", (e) => {
      menuOpen = false;
      mobileMenu.classList.remove("block");
      mobileMenu.classList.add("hidden");
    });
  });

  // Contact formatting and send
  const form = document.querySelector("#contactForm");
  function handleContact() {
    const formData = new FormData(form);
    const body = `
  Informações de Contato
      
      Email:    ${formData.get("email")}
      Telefone: ${formData.get("phone")}
      Igreja:   ${formData.get("church")}
      Cidade:   ${formData.get("city")}
      
  Mensagem
      
      ${formData.get("message")}
    `;
    window.open(
      `mailto:luck.ponte.correia@gmail.com?subject=Contato Site - ${formData.get(
        "subject"
      )}&body=${encodeURI(body)}`,
      "_self"
    );
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleContact();
  });
});
