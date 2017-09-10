import {GnomeModel} from "../../../core/models/impl/GnomeModel";

export class GnomeContentComponent implements ng.IComponentOptions {
    public controller: any = GnomeContentController;
    public template: string = `
    <div>
        <section class="midScreen pull-left">
        <h1 class="title">Search your Gnome</h1>
        <table ng-table="$ctrl.model.tableParams" show-filter="true" class="table table-condensed table-bordered">
            <tr ng-repeat="gnome in $data">
                <td data-title="'View Detail'" header-class="'text-left'" class="title">
                    <input type="button" value="Show details" ng-click="$ctrl.model.GnomeDetails(gnome.id)"/>
                </td>
                    <td data-title="'Id'" header-class="'text-left'" sortable="'id'" 
                    filter="{ 'id': 'text' }" ng-bind="gnome.id" class="title"></td>
                    <td data-title="'Name'" header-class="'text-left'" sortable="'name'" 
                    filter="{ 'name': 'text' }" ng-bind="gnome.name" class="title"></td>
                </tr>
        </table>
        </div>
        </section>
        <section ng-show="GnomeDetails.showError" class="title error">
            <h1>{{$ctrl.model.errorMessage}}</h1>
        </section>
    </div>`;
}

export class GnomeContentController {
    public static $inject: Array<string> = ["GnomeModel"];
    constructor(public model: GnomeModel) {
    }
}