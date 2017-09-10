
export class GnomesService {
    public static $inject: Array<string> = ["$http"];
    constructor(private $http: ng.IHttpService) {
    }
    public getAll(): ng.IHttpPromise<any> {
        return this.$http.get<any>("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");
    }
}