const myApp = angular.module('MyApp', []);

myApp.controller('ListController', function ($http) {

    const vm = this;

    // will hold the todolist data in the client
    vm.toDoList = [];



    // will update the todo list with whatever is new.
    vm.appendList = function () {
        $http({
            method: 'GET',
            url: '/todolist'
        }).then(function (response) {
            console.log('found list', response.data);
            vm.toDoList = response.data.reverse();
        }).catch(function (error) {
            alert('Error in appendList GET', error);
        })
    }



    // will add new item to the top of list
    // update list on dom
    vm.newTaskIn = function () {

        // Package input to send to server
        let itemToSend = {
            detail: vm.taskInputIn
        }

        vm.taskInputIn = undefined;

        $http({
            method: 'post',
            url: '/todolist',
            data: itemToSend
        }).then(function (response) {
            console.log('in newTaskIn Post', response.data);
            vm.appendList();
        }).catch(function (error) {
            alert('error in newTaskin post', error)
        })
    } // end itemToSend function

    // will add new item to the top of list
    // update list on dom
    vm.deleteTask = function (id) {

        console.log('delete task with id:', id);

        swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {

                    $http({
                        method: 'DELETE',
                        url: 'todolist/delete/' + id
                    }).then(function (response) {
                        vm.appendList();
                    }).catch(function (error) {
                        alert('Unable to delete task', error)
                    })

                    swal("Item Deleted", {
                        icon: "success",
                    });
                } else {
                    swal("Delete Canceled!");
                }
            });


        
       
    } // end deleteTask function

    vm.changeStatus = function (id) {
        console.log('in changeStatus with item:', id);
        $http({
            method: 'PUT',
            url: 'todolist/changeStatus/' + id
        }).then(function (response) {
            vm.appendList();
        }).catch(function (error) {
            alert('unable to change status', error)
        })

    }

    vm.appendList();
})