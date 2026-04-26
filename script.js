const deliveryType = document.getElementById("deliveryType");
const addressFields = document.getElementById("addressFields");
const donationForm = document.getElementById("donationForm");
const confirmation = document.getElementById("confirmation");
const confirmationData = document.getElementById("confirmationData");

const officeZipCode = "12345";
const officeLocation = "Geschäftsstelle Kleiderspenden e.V., Musterstraße 1, 12345 Musterstadt";

deliveryType.addEventListener("change", function () {
  if (deliveryType.value === "Abholung") {
    addressFields.classList.remove("d-none");
  } else {
    addressFields.classList.add("d-none");
  }
});

donationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedDelivery = deliveryType.value;
  const clothingType = document.getElementById("clothingType").value;
  const crisisArea = document.getElementById("crisisArea").value;

  const now = new Date();
  const date = now.toLocaleDateString("de-DE");
  const time = now.toLocaleTimeString("de-DE");

  let location = officeLocation;

  if (selectedDelivery === "Abholung") {
    const name = document.getElementById("name").value;
    const street = document.getElementById("street").value;
    const houseNumber = document.getElementById("houseNumber").value;
    const zipCode = document.getElementById("zipCode").value;
    const city = document.getElementById("city").value;

    if (!name || !street || !houseNumber || !zipCode || !city) {
      alert("Bitte geben Sie die vollständige Abholadresse ein.");
      return;
    }

    if (zipCode.substring(0, 2) !== officeZipCode.substring(0, 2)) {
      alert("Die Abholadresse liegt leider nicht in der Nähe der Geschäftsstelle.");
      return;
    }

    location = `${name}, ${street} ${houseNumber}, ${zipCode} ${city}`;
  }

  confirmationData.innerHTML = `
    <p><strong>Art der Übergabe:</strong> ${selectedDelivery}</p>
    <p><strong>Art der Kleidung:</strong> ${clothingType}</p>
    <p><strong>Krisengebiet:</strong> ${crisisArea}</p>
    <p><strong>Datum:</strong> ${date}</p>
    <p><strong>Uhrzeit:</strong> ${time}</p>
    <p><strong>Ort:</strong> ${location}</p>
  `;

  confirmation.classList.remove("d-none");
  donationForm.reset();
  addressFields.classList.add("d-none");
  confirmation.scrollIntoView({ behavior: "smooth" });
});
