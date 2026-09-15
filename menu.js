const menuGrid = document.querySelector(".menu-grid");


function displayMenu(items) {

    menuGrid.innerHTML = "";

    for (const item of items) {

        const card = document.createElement("div");
        card.classList.add("menu-card");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        card.appendChild(img);

        const menuInfo = document.createElement("div");
        menuInfo.classList.add("menu-info");

        const title = document.createElement("h3");
        title.textContent = item.name;
        menuInfo.appendChild(title);

        const description = document.createElement("p");
        description.textContent = item.description;
        menuInfo.appendChild(description);

        const price = document.createElement("p");
        price.textContent = `₦${item.price.toLocaleString()}`;
        price.classList.add("price");
        menuInfo.appendChild(price);

        const button = document.createElement("button");
        button.classList.add("add-cart");
        button.textContent = "Add to cart";
        menuInfo.appendChild(button);

        card.appendChild(menuInfo);

        menuGrid.appendChild(card);
    }
}


// Display all items when page loads
displayMenu(menuItems);


// Search input
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    const filteredMenu = menuItems.filter(function (item) {

        return item.name.toLowerCase().includes(searchValue);

    });

    displayMenu(filteredMenu);
});