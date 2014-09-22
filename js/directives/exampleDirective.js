angular.module('angularLab')
    .directive('exampleDirective', function() {

        return {
            restrict: 'E', // only available as element ( eg <foo></foo> )
            templateUrl: '/templates/example-template.html',
            link: function(scope, elem, attrs) {
                elem.css("color", "green");
            }
        };
    });