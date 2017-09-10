import {GnomeModel} from "../impl/GnomeModel";
import {GnomesService} from "../../services/impl/GnomesService";
import "angular-mocks";
/* tslint:disable:typedef */
describe("model: GnomeModel", () => {

    describe("on initialization", () => {
        let service,
            mockedService,
            gnomeModel,
            $h;

        const getAllResult: Array<any> = [ {
                "id" : 0,
                "name" : "Tobus Quickwhistle",
                "thumbnail" : "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
                "age" : 306,
                "weight" : 39.065952,
                "height" : 107.75835,
                "hair_color" : "Pink",
                "professions" : [ "Metalworker"],
                "friends" : [ "Cogwitz Chillwidget", "Tinadette Chillbuster" ]
            } ];
        
        beforeEach(inject($http => {
            $h = $http;
            mockedService = {};
            service = new GnomesService($http);
            gnomeModel = new GnomeModel(service);    
            gnomeModel.showMe = false;
        }));        

        it("should be available and executed the load", () => {
            mockedService.getAll = jasmine.createSpy("getAll").and.callFake((data) => {
                return data;
            });
            gnomeModel.Load = jasmine.createSpy("Load").and.callFake(mockedService.getAll);
            gnomeModel.Load();
            expect(gnomeModel.Load).toHaveBeenCalled(); 
        });

        it("should be data loaded", () => { 
            mockedService.getAll = jasmine.createSpy("getAll").and.returnValue(getAllResult);
            gnomeModel.testMessage = mockedService.getAll();
            expect(gnomeModel.testMessage).toBe(getAllResult);
        });

        it("should be fire the clicked Function", () => { 
            gnomeModel.GnomeDetails = jasmine.createSpy("GnomeDetails").and.callFake((id) => {
                gnomeModel.showMe = true;
            });
            gnomeModel.GnomeDetails(0);
            expect(gnomeModel.GnomeDetails).toHaveBeenCalled(); 
            expect(gnomeModel.showMe).toBe(true);
        });
    });
});