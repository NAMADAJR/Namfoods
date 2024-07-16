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
  divCard.addEventListener('click', () => {
    bought(id, price, title);
  });
}

function bought(id, price, title) {
  alert(`You have placed an order for ${title} at ${price}`);
}
