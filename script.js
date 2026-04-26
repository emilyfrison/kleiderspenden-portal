const deliveryType = document.getElementById("deliveryType");
const addressFields = document.getElementById("addressFields");
const form = document.getElementById("donationForm");
const confirmation = document.getElementById("confirmation");

const officeZip = "12";

deliveryType.addEventListener("change", () => {
  if (deliveryType.value === "Abholung") {
    addressFields.style.display = "block";
  } else {
    addressFields.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const zip = document.getElementById("zipCode").value;

  if (deliveryType.value === "Abholung") {
    if (!zip.startsWith(officeZip)) {
      alert("PLZ nicht in der Nähe!");
      return;
    }
  }

  confirmation.style.display = "block";
  confirmation.innerHTML = "Erfolgreich registriert!";
});
