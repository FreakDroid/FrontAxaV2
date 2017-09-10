import {GnomeModel} from "../../../core/models/impl/GnomeModel";

export class GnomePageComponent implements ng.IComponentOptions {
    public controller: any = GnomePageController;
    public template: string = `
        <gnome-detail></gnome-detail>
        <gnome-content></gnome-content>
    `;
}
export class GnomePageController {
    public static $inject: Array<string> = ["GnomeModel"];
    constructor(public gnomeModel: GnomeModel) {
    }
}