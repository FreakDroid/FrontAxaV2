// import {SidebarModel} from "../../../core/models/impl/SidebarModel";
import {GnomeModel} from "../../../core/models/impl/GnomeModel";
export class GnomeDetailComponent implements ng.IComponentOptions {
    public template: string = `
        <section class="pull-right marginMe" ng-show="$ctrl.gnomeModel.showMe">
        <div class=" card">
            <h1 class="title">The gnome selected</h1>
                <div class="container">
                  <img ng-src="{{$ctrl.gnomeModel.gnome.thumbnail}}" alt="myPhoto"  class="img"/>  
                  <h4><b>{{$ctrl.gnomeModel.gnome.name}}</b></h4> 
                  <p>Age: {{$ctrl.gnomeModel.gnome.age}}</p>
                  <p>Weight: {{$ctrl.gnomeModel.gnome.weight}}</p>
                  <p>Height: {{$ctrl.gnomeModel.gnome.height}}</p>
                  <p>Hair color: {{$ctrl.gnomeModel.gnome.hair_color}}</p>
                  <p>Sex: {{$ctrl.gnomeModel.sex}}</p>
                  <p>Profesions:</p>
                  <ul>
                      <li ng-repeat="gnomeProfesions in $ctrl.gnomeModel.gnome.professions">
                          {{gnomeProfesions}}
                      </li>
                  </ul>
                  <p>Friends: <span ng-if="$ctrl.gnomeModel.gnome.friends.length == 0">I'm forever alone, I don't have friends</span></p>
                    <ul>
                        <li ng-repeat="gnomeFriends in $ctrl.gnomeModel.gnome.friends">
                            {{gnomeFriends}}
                        </li>
                    </ul>
                </div>
                <div class="button-right">
                        <input type="button" value="Close" ng-click="$ctrl.gnomeModel.HideDetails()"/>
                </div>
        </div>
        </section>
        <section ng-show="GnomeDetails.showError" class="title error">
            <h1>{{$ctrl.gnomeMode.errorMessage}}</h1>
        </section>
    `;
    public controller: any = GnomeDetailController;
}
export class GnomeDetailController {
    public static $inject: Array<string> = ["GnomeModel"];

    constructor(public gnomeModel: GnomeModel) {
    }

}
