window.addEventListener("load", () => {
  // know jesus accordion and modal
  document.querySelector("#know-jesus").addEventListener("click", (e) => {
    document.querySelector("#content-trigger-jesus").click();
  });

  const knowJesusModalElement = document.querySelector("#knowJesusModal");
  const knowJesusModalOpenElements = document.querySelectorAll(
    "[data-modal-show='knowJesusModal']"
  );
  const knowJesusModalCloseElements = document.querySelectorAll(
    "[data-modal-hide='knowJesusModal']"
  );

  knowJesusModalCloseElements.forEach((el) => {
    el.addEventListener("click", (_) => {
      knowJesusModalElement.classList.add("hidden");
    });
  });

  knowJesusModalOpenElements.forEach((el) => {
    el.addEventListener("click", (_) => {
      knowJesusModalElement.classList.remove("hidden");
    });
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

  //Remove IG embbed ad
  const electricBlazeAnchors = document.querySelectorAll(
    'a[class^="electricblaze"]'
  );
  electricBlazeAnchors.forEach((el) => {
    el.remove();
  });
});
