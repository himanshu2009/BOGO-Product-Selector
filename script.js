
document.addEventListener("DOMContentLoaded", () => {
    const unitSelectors = document.querySelectorAll(".unit-selector");
    const radioButtons = document.querySelectorAll(
        'input[name="unitSelection"]'
    );
    const totalPriceElement=document.querySelector(".total-price")


    const priceMapping={
        1:10,
        2:18,
        3:24
    }

    radioButtons.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            // Removing expanded class from all sections
            unitSelectors.forEach((selector) => {
                selector.classList.remove("expanded");
               
            });

            // Getting the selected unit value
            const selectedValue = parseInt(e.target.value);


           

            // Expanding only the selected section
            const selectedSection = document.getElementById(
                `unit${selectedValue}`
            );
            selectedSection.classList.add("expanded");
             
            const totalPrice = priceMapping[selectedValue];
            
            totalPriceElement.textContent=`Total : ${totalPrice.toFixed(2)} USD`
            
        });
    });
});

