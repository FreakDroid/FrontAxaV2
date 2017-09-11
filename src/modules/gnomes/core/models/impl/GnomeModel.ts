import {GnomesService} from "../../services/impl/GnomesService";
import "angular-mocks";
import { NgTableParams } from "ng-table";


/* tslint:disable:typedef */
export class GnomeModel {
    // dependencies
    public static $inject: Array<string> = ["GnomesService"];

    public gnomes: any;
    public getAll: void;
    public gnome: any;
    public showMe: boolean;
    public sex: string;
    public tableParams: any;
    public showError: boolean;
    public errorMessage: string;


    // constructor
    constructor (public gnomeService: GnomesService) {
        this.getAll = this.Load();

    }

    // load Method to get all Genomes
    public Load() {
        this.gnomeService.getAll().then( success => {
            this.gnomes = success.data.Brastlewark;

            this.tableParams = new NgTableParams<any>({}, {
                dataset: success.data.Brastlewark
            });
        }).catch( err => {
            this.showError = true;
            this.errorMessage = "Error loading gnomes";
        });
    }

    // show Details
    public GnomeDetails(id) {

        this.ShowDetails();

        // initi the set to avoid isolate
        let sexNumber = 0;
        sexNumber = Math.floor(Math.random() * 6) + 1 ;
        this.sex = (sexNumber > 5) ? "Female" : "Male";

        let gnomeFiltered = this.gnomes.filter(gnome => {
            return gnome.id === id;
         });
        this.gnome = gnomeFiltered[0];
    }

    public ShowDetails() {
        this.showMe = !this.showMe ;
    }

    public HideDetails() {
        this.showMe = !this.showMe ;
    }
}
/* tslint:enable:typedef */