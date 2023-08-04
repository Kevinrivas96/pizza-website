// Wait for the HTML content to be loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get all the checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="inp"]');

    // Get the total output element
    const totalOutput = document.getElementById('total');
    const subtotalOutput = document.getElementById('subtotal');
    const hstOutput = document.getElementById('hst');

    //get the elements to make the navigation bar responsive
    const toggleButton = document.getElementsByClassName('toggle-btn')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    //toggle class active to display the menu links when hamburger is clicked
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    // Add event listener to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {

            let subtotalValue = 0;
            let hstValue = 0;
            let totalValue = 0;

            //if checkbox is checked  add them together to get the subtotal
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    subtotalValue += parseFloat(checkbox.value);
                }
            });

            //get the tax value based on the subtotal
            hstValue = subtotalValue * 0.13;

            //get total by adding subtotal + taxes
            totalValue = subtotalValue + hstValue;

            // Update the Totals and display them in the form
            subtotalOutput.innerHTML = `$${subtotalValue.toFixed(2)}`;
            hstOutput.innerHTML = `$${hstValue.toFixed(2)}`;
            totalOutput.innerHTML = `<b>$${totalValue.toFixed(2)}</b>`;

        });
    });
});
