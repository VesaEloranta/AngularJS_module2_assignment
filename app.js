(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.getToBuyItems();
  list1.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.addAlreadyBoughtItem(list1.items[itemIndex].name, list1.items[itemIndex].quantity);
      ShoppingListCheckOffService.removeToBuyItem(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping to buy items
  var toBuyItems = [
    { name: "carrots", quantity: 10 },
    { name: "apples", quantity: 5 },
    { name: "salads", quantity: 2 },
    { name: "bananas", quantity: 10 },
    { name: "oranges", quantity: 4 }
  ];

  var alreadyBoughtItems = [];

  service.addAlreadyBoughtItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    alreadyBoughtItems.push(item);
  };

  service.removeToBuyItem = function (itemIdex) {
    toBuyItems.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
