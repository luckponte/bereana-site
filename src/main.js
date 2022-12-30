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
    window.open(
      `mailto:luck.ponte.correia@gmail.com?subject=${formData.get("subject")}`,
      "_self"
    );
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleContact();
  });
});
