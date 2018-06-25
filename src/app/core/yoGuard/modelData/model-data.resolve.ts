import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ProjectModel } from '../../../model/project-model';

@Injectable()
export class ModelDataResolve implements Resolve<any> {
    constructor(private _pm: ProjectModel) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const urlPath: string = route.routeConfig.path.split('-')[0];
        let listOption: any = {};

        listOption = Object.assign(listOption, route.queryParams);
        listOption['searchObj'] = this._pm.getSearchObj(
            urlPath,
            listOption.type ? listOption.type : urlPath
        );
        listOption['columnDefs'] = this._pm.getColumDef(
            urlPath,
            listOption.type ? listOption.type : urlPath
        );
        listOption['titles'] = this._pm.getTitle(
            urlPath,
            listOption.type ? listOption.type : urlPath
        );

        return of(listOption);
    }
}
