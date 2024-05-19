let cars = [
  {
    brand: "BMW seria 5",
    price: "127000",
    productionDate: "2017",
    milage: "132000",
    horsepower: "252",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im83cmd6cHliNTc5OTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.C9j1Y0rkZu3gi3PPEstkbntjn7I6HrEcV9NAke-DTyg/image;s=0x450;q=70",
  },
  {
    brand: "Abarth 595",
    price: "68000",
    productionDate: "2019",
    milage: "38000",
    horsepower: "165",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjZudjk5b215M3BrZDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.002XzCBZKbomI9mkX6Kw06fld496NDASG7Cg02bhKCs/image;s=0x450;q=70",
  },
  {
    brand: "Audi A8",
    price: "254000",
    productionDate: "2019",
    milage: "107000",
    horsepower: "286",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijg4c295NXdqOTAzMTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.6IHhmQtdKSO0513BNiTZiWsY_R7BE89jy9BupoRSOOo/image;s=0x450;q=70",
  },
  {
    brand: "Opel Astra IV",
    price: "125000",
    productionDate: "2024",
    milage: "30000",
    horsepower: "130",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im9wenVwZDhvMm96NjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.VZ71MnRHMf2qemQHn7mHnJKxkLaWmJypw5ZC2H4B3ZI/image;s=0x450;q=70",
  },
  {
    brand: "Skoda Octavia",
    price: "72000",
    productionDate: "2020",
    milage: "94760",
    horsepower: "150",
    picture:
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjI1dTh3MXZycWN4by1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.2KP1aCDCb5roexL88raBCKVcEa4auo1MVrhYTx0HU0U/image;s=0x450;q=70",
  },
  {
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
            <a href="#" class="btn btn-primary btn-warning">Go somewhere</a>
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
}

async function displayCarsAfterLoad() {
  await new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", resolve);
  });
  displayCars();
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
    }
  });
}

displayCarsAfterLoad();
window.onload=addAccessory;


