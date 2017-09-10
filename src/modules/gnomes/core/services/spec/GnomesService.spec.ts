import {GnomesService} from "../impl/GnomesService";

/* tslint:disable:typedef */
describe("Service GnomesService", () => {
        it("should be available", inject(function($http: ng.IHttpService) {
            const gnomesService: GnomesService = new GnomesService($http);
            gnomesService.getAll().then(success  => {
                    expect(success.data.Brastlewark).toBe("array");
            });
        }));
});
/* tslint:enable:typedef */