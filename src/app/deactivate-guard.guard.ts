import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AboutComponent } from './about/about.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardGuard implements CanDeactivate<AboutComponent> {

  canDeactivate(component: AboutComponent) {
    return component.canDeactivate();
  }
}
