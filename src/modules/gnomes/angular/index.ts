import * as angular from "angular";
import "angular-route";
import {GnomeContentComponent} from "./components/gnomes/GnomeContentComponent";
import {GnomesService} from "../core/services/impl/GnomesService";
import {config as routesConfig} from "./configs/routes";
import {GnomeModel} from "../core/models/impl/GnomeModel";
import {GnomeDetailComponent} from "./components/gnomesDetail/GnomeDetailComponent";
import {GnomePageComponent} from "./components/gnomePage/GnomePageComponent";


import { ngTableModule } from "ng-table";

// import { DataTablesModule } from 'angular-data-table';


angular.module("app.gnomes", [ngTableModule.name, "ngRoute"])
    .component("gnomeContent", new GnomeContentComponent())
    .component("gnomeDetail", new GnomeDetailComponent())
    .component("gnomePage", new GnomePageComponent())
    .service("GnomeModel", GnomeModel)
    .service("GnomesService", GnomesService)
    .config(routesConfig);