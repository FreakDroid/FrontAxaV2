import * as angular from "angular";

import {GnomeApplicationComponent} from "./components/gnomeApplication/GnomeApplicationComponent";
angular.module("app.application", [])
    .component("gnomeApplication", new GnomeApplicationComponent());