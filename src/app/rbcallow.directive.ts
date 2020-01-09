import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[rbacAllow]'
})
export class RbcallowDirective {

  allowedRoles: string[];
  user = {
    name: 'zakuan',
    roles: 'ADMIN'
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {
  }

  @Input()
  set rbacAllow(allowedRoles: string[]){
    console.log(allowedRoles)
    this.allowedRoles = allowedRoles;
    this.showIfUserAllowed();
  }

  showIfUserAllowed() {
    if (!this.allowedRoles || this.allowedRoles.length === 0 || !this.user) {
      this.viewContainer.clear();
      return;
    }

    const isUserAllowed = 
      _.intersection(this.allowedRoles, this.user.roles).length > 0;
    if (isUserAllowed) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
