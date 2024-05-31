let cars = [
  {
    id: 1,
    brand: "BMW seria 5",
    price: "127000",
    productionDate: "2017",
    milage: "132000",
    horsepower: "252",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im83cmd6cHliNTc5OTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.C9j1Y0rkZu3gi3PPEstkbntjn7I6HrEcV9NAke-DTyg/image;s=0x450;q=70",
  },
  {
    id: 2,
    brand: "Abarth 595",
    price: "68000",
    productionDate: "2019",
    milage: "38000",
    horsepower: "165",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjZudjk5b215M3BrZDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.002XzCBZKbomI9mkX6Kw06fld496NDASG7Cg02bhKCs/image;s=0x450;q=70",
  },
  {
    id: 3,
    brand: "Audi A8",
    price: "254000",
    productionDate: "2019",
    milage: "107000",
    horsepower: "286",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijg4c295NXdqOTAzMTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.6IHhmQtdKSO0513BNiTZiWsY_R7BE89jy9BupoRSOOo/image;s=0x450;q=70",
  },
  {
    id: 4,
    brand: "Opel Astra IV",
    price: "125000",
    productionDate: "2024",
    milage: "30000",
    horsepower: "130",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im9wenVwZDhvMm96NjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.VZ71MnRHMf2qemQHn7mHnJKxkLaWmJypw5ZC2H4B3ZI/image;s=0x450;q=70",
  },
  {
    id: 5,
    brand: "Skoda Octavia",
    price: "72000",
    productionDate: "2020",
    milage: "94760",
    horsepower: "150",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjI1dTh3MXZycWN4by1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.2KP1aCDCb5roexL88raBCKVcEa4auo1MVrhYTx0HU0U/image;s=0x450;q=70",
  },
  {
    id: 6,
    brand: "Mercedes Benz GLC Coupe",
    price: "289000",
    productionDate: "2024",
    milage: "1",
    horsepower: "204",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imw0YjN3ZnFqenM1Ny1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.mQ6z-VXaKIbWxVeY0lmRzEujcq2jdEitJ7uueeFTD-U/image;s=0x450;q=70",
  },
];

function displayCars() {
  let carsHtml = "";

  let rowHtml = "";
  let count = 0;

  cars.forEach(function (car) {
    rowHtml += `
        <div class="col-4">
        <div class="card">
        <img
        src="${car.picture}"
        class="card-img-top"
        alt="..."
        />
        <div class="card-body">
        <h5 class="card-title">${car.brand}</h5>
        <p class="card-text">
        ${car.productionDate} • ${car.milage} km • ${car.horsepower} kM
        </p>
        <button type="button" class="btn btn-primary" onclick="chooseCar(${car.id})">Wybierz</button>
        </div>
        </div>
        </div>

        `;

    count++;

    if (count % 3 === 0 || count === cars.length) {
      carsHtml += `
            <div class="row car-offers-card">
            ${rowHtml}
            </div>
            `;
      rowHtml = "";
    }
  });

  let displayElement = document.querySelector("#cardDisplay");
  displayElement.innerHTML = carsHtml;
  if (displayElement) {
    displayElement.innerHTML = carsHtml;
  }
}

function searchCar() {
  const brandInput = document.getElementById("brand");
  const brand = brandInput.value.toLowerCase();
  const carCards = document.querySelectorAll("#cardDisplay .card");

  carCards.forEach(function (carCard) {
    const carBrand = carCard
      .querySelector(".card-title")
      .textContent.toLowerCase();
    if (carBrand.includes(brand)) {
      carCard.style.display = "float";
      carCard.style.justifyContent = "flex-start";
    } else {
      carCard.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchCarBtn");
  searchBtn.addEventListener("click", searchCar);
});

function chooseCar(carId) {
  const chosenCar = cars.find((car) => car.id === carId);
  if (chosenCar) {
    const url = new URL("order.html", window.location.href);
    url.searchParams.set("carId", carId);
    url.searchParams.set("carBrand", chosenCar.brand);
    url.searchParams.set("carPrice", chosenCar.price);
    window.location.assign(url.toString());
  }
}

function getChosenCarId() {
  const url = new URL(window.location.href);
  return url.searchParams.get("carId");
}

function displayChosenCar() {
  const carId = getChosenCarId();
  const chosenCar = cars.find((car) => car.id === parseInt(carId));

  if (chosenCar) {
    const chosenCarCard = document.getElementById("chosen-car-card");
    const carImage = document.createElement("img");
    carImage.src = chosenCar.picture;
    carImage.alt = chosenCar.brand;
    carImage.classList.add("card-img-top");
    chosenCarCard.innerHTML = "";
    chosenCarCard.appendChild(carImage);
    const carTitle = document.createElement("h5");
    carTitle.textContent = chosenCar.brand;
    chosenCarCard.appendChild(carTitle);
    const carPrice = document.createElement("p");
    carPrice.textContent = `Cena samochodu: ${chosenCar.price} PLN`;
    chosenCarCard.appendChild(carPrice);
  } else {
    const chosenCarCard = document.getElementById("chosen-car-card");
    chosenCarCard.innerHTML = "Nie wybrano samochodu.";
  }
  getChosenCarId();
}

function selectDeliveryDate() {
  let currentTime = new Date();
  let deliveryDate = new Date(currentTime.getTime() + 14 * 24 * 60 * 60 * 1000);
  const deliveryDateElement = document.getElementById("delivery-date");
  deliveryDateElement.innerHTML = deliveryDate.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function addAccessory() {
  let accessories = [
    { name: "Powłoka ceramiczna", price: "35000" },
    { name: "Powłoka kwarcowa", price: "20000" },
    { name: "Niewidzialna wycieraczka", price: "4000" },
    { name: "Ceramiczne zabezpieczenie felg", price: "8000" },
    { name: "Folia PPF", price: "10000" },
  ];

  const accessoryList = document.getElementById("accessory-list");
  const displayAccessories = document.getElementById("display-accessories");
  const addAccessoryButton = document.getElementById("add-accessory");
  const totalCostElement = document.getElementById("total-cost");
  let total = 0;

  accessories.forEach((accessory) => {
    const option = document.createElement("option");
    option.value = accessory.name;
    option.textContent = accessory.name;
    accessoryList.appendChild(option);
  });

  addAccessoryButton.addEventListener("click", () => {
    const selectedAccessory = accessoryList.value;
    const selectedAccessoryObj = accessories.find(
      (accessory) => accessory.name === selectedAccessory
    );

    if (selectedAccessoryObj) {
      const accessoryParagraph = document.createElement("p");
      accessoryParagraph.textContent = `${selectedAccessory} (${selectedAccessoryObj.price} PLN)`;
      displayAccessories.appendChild(accessoryParagraph);
      total += parseInt(selectedAccessoryObj.price);
      totalCostElement.textContent = `${total} PLN`;
      displayTotalCost();
    }
  });
}

function deleteAccessory() {
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  const deleteBtn = document.getElementById("delete-accessory");
  deleteBtn.addEventListener("click", deleteAccessory);
});

function displayTotalCost() {
  const carId = getChosenCarId();
  const chosenCar = cars.find((car) => car.id === parseInt(carId));

  if (chosenCar) {
    const carPrice = parseInt(chosenCar.price);
    const accessories = document.querySelectorAll("#display-accessories p");
    let accessoriesPrice = 0;

    accessories.forEach((accessory) => {
      const priceString = accessory.textContent.match(/\d+/)[0]; // extract only the numeric part
      const price = parseInt(priceString);
      accessoriesPrice += price;
    });
    const totalCost = carPrice + accessoriesPrice;
    const totalCostElement = document.getElementById("car-total-cost");

    try {
      if (totalCostElement) {
        totalCostElement.textContent = `Całkowity koszt: ${totalCost} PLN`;
      }
    } catch (error) {
      console.error("Error setting total cost:", error);
    }
  } else {
    const totalCostElement = document.getElementById("car-total-cost");

    try {
      if (totalCostElement) {
        totalCostElement.textContent = "Nie wybrano samochodu.";
      }
    } catch (error) {
      console.error("Error setting total cost:", error);
    }
  }
}

async function displayCarsAfterLoad() {
  await new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", resolve);
  });
  displayCars();
}

async function displayDetailsAfterLoad() {
  await new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", resolve);
  });
  displayChosenCar();
  addAccessory();
  selectDeliveryDate();
}

// document.addEventListener("DOMContentLoaded", function () {
//   function storeOrderData() {
//     const nameInput = document.getElementById("firstName");
//     const surnameInput = document.getElementById("surname");
//     const deliveryDateInput = document.getElementById("delivery-date");
//     const totalCostElement = document.getElementById("car-total-cost");

//     const name = nameInput.value;
//     const surname = surnameInput.value;
//     const deliveryDate = deliveryDateInput.textContent;
//     const totalCost = totalCostElement.textContent.replace(" PLN", "");

//     const orderData = {
//       name,
//       surname,
//       deliveryDate,
//       totalCost,
//     };

//     localStorage.setItem("orderData", JSON.stringify(orderData));}

//   function displayOrderData() {
//     const nameElement = document.querySelector("#name");
//     const deliveryDateElement = document.getElementById("deliveryDate");
//     const orderSumFinalElement = document.getElementById("orderSumFinal");

//     const storedOrderData = localStorage.getItem("orderData");
//     if (storedOrderData) {
//       const orderData = JSON.parse(storedOrderData);
//       nameElement.textContent = orderData.name;
//       deliveryDateElement.textContent = orderData.deliveryDate;
//       orderSumFinalElement.textContent = orderData.totalCost + " PLN";

//     } else {
//       console.log("No order data found in localStorage");
//     }
//   }

//   const init = function () {
//     if (document.URL.includes("order.html")) {
//       const finalizeBtn = document.getElementById("finalize-btn");
//       finalizeBtn.addEventListener("click", function () {
//         storeOrderData();
//         window.location.href = "final.html";
//       });
//     } else if (document.URL.includes("final.html")) {
//       displayOrderData();
//     }
//   };

//   init();
// });

document.addEventListener("DOMContentLoaded", function () {
  function storeOrderData() {
    const nameInput = document.getElementById("firstName");
    const surnameInput = document.getElementById("surname");
    const deliveryDateInput = document.getElementById("delivery-date");
    const totalCostElement = document.getElementById("car-total-cost");
    const paymentMethodInput = document.querySelector(
      'input[name="payment"]:checked'
    );
    const carImageElement = document.getElementById("chosen-car-picture");

    const name = nameInput.value;
    const surname = surnameInput.value;
    const deliveryDate = deliveryDateInput.textContent;
    const totalCost = totalCostElement.textContent.replace(" PLN", "");
    const paymentMethod = paymentMethodInput.value;

    let carImageUrl;
    if (carImageElement) {
      carImageUrl = carImageElement.src;
    } else {
      carImageUrl = "";
    }

    const orderData = {
      name,
      surname,
      deliveryDate,
      totalCost,
      paymentMethod,
      carImageUrl,
    };

    localStorage.setItem("orderData", JSON.stringify(orderData));
  }

  function displayOrderData() {
    const nameElement = document.querySelector("#name");
    const deliveryDateElement = document.getElementById("deliveryDate");
    const orderSumFinalElement = document.getElementById("orderSumFinal");
    const paymentMethodElement = document.getElementById("payment-method");
    const carImageElement = document.getElementById("final-car-display");

    const storedOrderData = localStorage.getItem("orderData");
    if (storedOrderData) {
      const orderData = JSON.parse(storedOrderData);
      nameElement.textContent = orderData.name;
      deliveryDateElement.textContent = orderData.deliveryDate;
      orderSumFinalElement.textContent = orderData.totalCost + " PLN";
      paymentMethodElement.textContent =
        "Metoda płatności: " + orderData.paymentMethod;
      if (orderData.carImageUrl) {
        carImageElement.src = window.location.origin + orderData.carImageUrl;
        carImageElement.style.display = "block";
      } else {
        carImageElement.style.display = "none";
      }
    } else {
      console.log("No order data found in localStorage");
    }
  }

  const init = function () {
    if (document.URL.includes("order.html")) {
      const finalizeBtn = document.getElementById("finalize-btn");
      finalizeBtn.addEventListener("click", function () {
        storeOrderData();
        window.location.href = "final.html";
      });
    } else if (document.URL.includes("final.html")) {
      setTimeout(displayOrderData, 100);
    }
  };

  init();
});

displayCarsAfterLoad();
displayDetailsAfterLoad();
