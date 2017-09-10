import "../../index";
import {} from "jasmine";
import * as angular from "angular";
import "angular-mocks";
import {ComponentTest} from "../../../../util/ComponentTest";
import "phantomjs-polyfill";
import {GnomeContentController} from "./GnomeContentComponent";
import {GnomeModel} from "../../../core/models/impl/GnomeModel";

describe("Component GnomeContentComponent", () => {
    var directiveTest: ComponentTest<GnomeContentController>;
    var contentModelMock: GnomeModel;

    beforeEach(angular.mock.module("app.gnomes", ($provide: any) => {
        contentModelMock = <GnomeModel>jasmine.createSpyObj("gnomeModel", ["ShowDetails", "GnomeDetails"]);
        // contentModelMock = <GnomeModel>{};
        $provide.service("GnomeModel", () =>  contentModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<GnomeContentController>("<gnome-content></gnome-content>", "gnomeContent");
    });

    it("should expose the GnomeModel", () => {
        var vm: GnomeContentController = directiveTest.createComponent({});
        expect(vm.model).toBe(contentModelMock);
    });


    // expect(directiveTest.element.find("i").hasClass("starred")).toBe(false);
    // vm.toggle();
    // directiveTest.scope.$digest();
    // expect(directiveTest.element.find("i").hasClass("starred")).toBe(true);

    describe("should be called the show details", () => {
        it("should call the event to fill the detail for any gnome", () => {
            var vm: GnomeContentController = directiveTest.createComponent({});
            vm.model.GnomeDetails(1);
            expect(vm.model.GnomeDetails).toHaveBeenCalled();
        });

        it("should show the detail for any gnome", () => {
            var vm: GnomeContentController = directiveTest.createComponent({});
            vm.model.ShowDetails();
            expect(vm.model.ShowDetails).toHaveBeenCalled();
        });
    });
});

