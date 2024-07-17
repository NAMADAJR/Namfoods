document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://namfoods-mock-remote-backend.vercel.app/menu";

  // Getting All Resources
  fetch(apiUrl)
    .then((res) => res.json())
    .then((photos) => photos.forEach((photo) => createPhoto(photo)));

  function createPhoto(photo) {
    const { id, title, imageUrl, price } = photo;

    let wrapper = document.getElementById("menu-wrapper");

    const divCard = document.createElement("div");
    divCard.className = "photo";
    divCard.id = `photo-${id}`;

    const html = `
    <div>
      <h3>${title}</h3>
    </div>
    <div>
      <img src="${imageUrl}">
    </div>
    <div>
      <h3>Price: ${price}</h3>
    </div>
  `;

    divCard.innerHTML = html;
    wrapper.appendChild(divCard);

    // Add event listener for the photo div
    divCard.addEventListener("click", () => {
      bought(id, price, title);
    });
  }

  function bought(id, price, title) {
    alert(`You have placed an order for ${title} at ${price}`);
  }


  const form = document.querySelector("#form form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    const customerName = document.querySelector("#customer-name").value;
    const feedbackText = document.querySelector("#feedback-text").value;
    const rating = document.querySelector('input[name="rating"]:checked').value;

    // Display the entered feedback and rating
    alert(`Rating: ${rating}\nFeedback: ${feedbackText}\nThank you for your feedback, ${customerName}!`);

    // Optionally, you could clear the form fields after submission
    form.reset();
  });
});