angular.module('NoteWrangler').directive("nwCategorySelector", function(Category){
  return {
    replace: true,
    restrict: 'E',
    templateUrl: '/assets/templates/directives/nwCategorySelector.html',
    link: function(scope, element, attrs){
        var activeCategory = {};
        scope.categories = Category.query()
        scope.isActive = function(category){
          return activeCategory.id === category.id;
        }
        scope.toggleCategory = function(category){
          if(category === activeCategory){
            activeCategory = {};
          }
          else {
          activeCategory = category;
          }
      }
    }
  };

});
