const tipcalcy = () => {
    let amount = document.getElementById('bill-amount').value;
    
    let perc = document.getElementById('tip-percentage').value;

    let tipPerc = amount * (perc / 100);

    let total = tipPerc + Number(amount);
    alert(total)

    document.getElementById("tip-amount").value = tipPerc;

    document.getElementById("total-billed").value = total;
}