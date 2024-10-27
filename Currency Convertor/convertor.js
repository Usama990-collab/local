let base_URL = "https://v6.exchangerate-api.com/v6/0fcc21fce905d467e3744c67/latest/"; // Corrected base URL
let apiKey = "0fcc21fce905d467e3744c67"; // API key
let dropdowns = document.querySelectorAll("#convertorcontainer select");
let btn = document.querySelector("#btn");
let fromCurr = document.querySelector("#from select");
let toCurr = document.querySelector("#to select");
let msg = document.querySelector("#msg");

// Populate the dropdowns with currency codes
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    });
}

// Function to update country flags
let updateflag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Function to fetch exchange rate and calculate
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amt = document.querySelector("#input input");
    let amtvalue = amt.value;

    if (amtvalue === "" || amtvalue < 1) {
        amtvalue = 1;
        amt.value = "1";
    }

    // Construct the API URL with the selected 'from' currency
    let URL = `${base_URL}${fromCurr.value}`;
    
    try {
        let response = await fetch(URL);
        let data = await response.json();

        // Check if the conversion_rates object exists
        if (data.conversion_rates) {
            let rate = data.conversion_rates[toCurr.value];

            // Handle case where rate is undefined
            if (rate) {
                let finalAmount = amtvalue * rate;
                msg.innerText = `${amtvalue} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
            } else {
                msg.innerText = "Conversion rate not available for the selected currencies.";
            }
        } else {
            msg.innerText = "Error fetching the exchange rate.";
        }
    } catch (error) {
        console.error("Error fetching the data:", error);
        msg.innerText = "Error fetching the exchange rate.";
    }
});
