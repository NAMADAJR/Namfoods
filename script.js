document.addEventListener("DOMContentLoaded", () => {
  // URL of the API to fetch the menu items
  const apiUrl = "https://namfoods-mock-remote-backend.vercel.app/menu";

  // Fetching all menu items from the API when the page loads
  fetch(apiUrl)
    .then((res) => res.json())
    .then((photos) => photos.forEach((photo) => createPhoto(photo)));

  // Function to create a photo card for each menu item
  function createPhoto(photo) {
    const { id, title, imageUrl, price } = photo;

    // Get the menu wrapper element
    let wrapper = document.getElementById("menu-wrapper");

    // Create a new div element for the photo card
    const divCard = document.createElement("div");
    divCard.className = "photo";
    divCard.id = `photo-${id}`;

    // HTML structure for the photo card
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

    // Add event listener for the photo card to handle click events
    divCard.addEventListener("click", () => {
      bought(id, price, title);
    });
  }

  // Function to handle the purchase of a menu item
  function bought(id, price, title) {
    alert(`You have placed an order for ${title} at ${price}`);
  }

  // Get the feedback form element
  const form = document.querySelector("#form form");

  // Add event listener for form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the input values from the form
    const customerName = document.querySelector("#customer-name").value;
    const feedbackText = document.querySelector("#feedback-text").value;
    const rating = document.querySelector('input[name="rating"]:checked').value;

    // Display the entered feedback to the user
    alert(
      `Rating: ${rating}\nFeedback: ${feedbackText}\nThank you for your feedback, ${customerName}!`
    );

    // clears the form fields after submission
    form.reset();
  });
});
