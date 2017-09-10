import "../../index";
import {} from "jasmine";
import * as angular from "angular";
import "angular-mocks";
import {ComponentTest} from "../../../../util/ComponentTest";
import "phantomjs-polyfill";
import {GnomePageController} from "./GnomePageComponent";
import {GnomeModel} from "../../../core/models/impl/GnomeModel";

describe("Component PageGnomeController", () => {
    var directiveTest: ComponentTest<GnomePageController>;
    var contentModelMock: GnomeModel;
    beforeEach(angular.mock.module("app.gnomes", ($provide: any) => {
        contentModelMock = <GnomeModel>{};
        $provide.service("GnomeModel", () =>  contentModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<GnomePageController>("<gnome-page></gnome-page>", "gnomePage");
    });

    it("should expose the sharedModel", () => {
        var vm: GnomePageController = directiveTest.createComponent({});
        expect(vm.gnomeModel).toBe(contentModelMock);
    });
});