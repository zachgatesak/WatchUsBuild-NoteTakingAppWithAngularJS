angular.module('NoteWrangler').controller('UsersShowController', function(User, $scope, $routeParams){
  $scope.users = User.get({id: $routeParams.id});

});
