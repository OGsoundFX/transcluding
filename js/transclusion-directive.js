function transclusion() {
    return {
        transclude: true,
        template: `
        <div>
            <h5 color-red>Alert</h5>
            <div ng-transclude></div>
            <p>I am just testing the transclusion</p>
        </div>
        `
    }
};

angular
    .module('app')
    .directive('transclusion', transclusion);