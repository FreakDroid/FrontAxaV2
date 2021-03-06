import * as angular from "angular";
import "./modules/application/angular/index";
import "./modules/gnomes/angular/index";


// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";

angular.module("app", ["app.application", "app.gnomes"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});