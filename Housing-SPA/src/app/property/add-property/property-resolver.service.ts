import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HousingService } from '../../services/housing.service';
import { Injectable } from '@angular/core';
import { Property } from './../../model/property';



@Injectable()
export class PropertyResolver implements Resolve<Property> {
    private property: Property;

    constructor(private housingServices: HousingService)
    {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property {
        this.housingServices.newPropertySubject.subscribe(
        data => this.property = data);
        return this.property;
    }
}
