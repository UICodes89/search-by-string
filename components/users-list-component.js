"use strict";
app.component('userList', {
  templateUrl: 'components/users-list-component.html',
  bindings: {
    list : "<"
  },
  controller: function($scope) {
   var vm = this;
    vm.$onChanges = function($event) {
      vm.users = $event.list.currentValue;
    }
  }
});