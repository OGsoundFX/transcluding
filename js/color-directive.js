function colorRed() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            const element = $element;
            element.addClass('red');
        }
    };
};

function colorGreen() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            const element = $element;
            element.addClass('green');
        }
    };
};

function colorBlue() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            const element = $element;
            element.addClass('blue');
        }
    };
};

function colorPurple() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            const element = $element;
            element.addClass('purple');
        }
    };
};

angular
    .module('app')
    .directive('colorRed', colorRed)
    .directive('colorGreen', colorGreen)
    .directive('colorBlue', colorBlue)
    .directive('colorPurple', colorPurple);