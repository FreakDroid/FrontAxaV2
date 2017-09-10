config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider.when("/", {
        template: "<gnome-page></gnome-page>"
    });
}