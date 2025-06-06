let inventory = [];

function addSupply(supply) {
    inventory.push(supply);
    console.log(`${supply} added to inventory.`);
}

function removeSupply(supply) {
    const index = inventory.indexOf(supply);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log(`${supply} removed from inventory.`);
    } else {
        console.log(`${supply} not found in inventory.`);
    }
}

function displayInventory() {
    console.log("Office Supplies Inventory:");
    inventory.forEach((supply, index) => {
        console.log(`${index + 1}. ${supply}`);
    });
}


addSupply("Pens");
addSupply("Pencils");
addSupply("Paper");

displayInventory();

removeSupply("Pencils");

displayInventory();
