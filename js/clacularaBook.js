var total_items = 2;
function CalculateItemsValue() {
    var total = 0;
    for (i=1; i<=total_items; i++) {
        itemID = document.getElementById("per_"+i);
        if (typeof itemID === 'undefined' || itemID === null) {
            alert("No such item - " + "per_"+i);
        } else {
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
		
    }
    document.getElementById("ItemsTotal").innerHTML = "$" + total;
}