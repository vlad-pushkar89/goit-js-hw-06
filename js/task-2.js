class Storage {
    constructor(initialItems) {
        this._items = initialItems;
    }

    getItems() {
        return this._items;
    }

    addItem(newItem) {
        this._items.push(newItem);
    }

    removeItem(itemToRemove) {
        this._items = this._items.filter(item => item !== itemToRemove);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
