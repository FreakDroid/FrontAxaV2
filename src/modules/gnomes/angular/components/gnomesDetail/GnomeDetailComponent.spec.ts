import * as angular from "angular";
import {} from "jasmine";
import "angular-mocks";
import "../../index";
import {ComponentTest} from "../../../../util/ComponentTest";
import "phantomjs-polyfill";
import {GnomeDetailController} from "./GnomeDetailComponent";
import {GnomeModel} from "../../../core/models/impl/GnomeModel";

describe("Component GnomeDetailComponent", () => {
    var directiveTest: ComponentTest<GnomeDetailController>;
    var contentModelMock: GnomeModel;
    beforeEach(angular.mock.module("app.gnomes", ($provide: any) => {
        contentModelMock = <GnomeModel>jasmine.createSpyObj("gnomeModel", ["HideDetails"]);
        $provide.service("GnomeModel", () =>  contentModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<GnomeDetailController>("<gnome-detail></gnome-detail>", "gnomeDetail");
    });

    it("should expose the GnomeModel", () => {
        var vm: GnomeDetailController = directiveTest.createComponent({});
        expect(vm.gnomeModel).toBe(contentModelMock);
    });

    describe("on HideDetails", () => {
        it("should HideDetails", () => {
            var vm: GnomeDetailController = directiveTest.createComponent({});
            vm.gnomeModel.HideDetails();
            expect(vm.gnomeModel.HideDetails).toHaveBeenCalled();
        });
    });
});