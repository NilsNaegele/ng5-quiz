import { Directive, Input, OnInit,
         TemplateRef, ViewContainerRef } from '@angular/core';

import { UserService } from './user.service';

@Directive({ selector: '[appShowAuthenticated]'})
export class ShowAuthenticatedDirective implements OnInit {
  @Input() set appShowAuthenticated(condition: boolean) {
    this.condition = condition;
  }
  condition: boolean;


  constructor(private templateRef: TemplateRef<any>,
              private userService: UserService,
              private viewContainerRef: ViewContainerRef) { }

    ngOnInit() {
      const authenticated = this.userService.getAuthenticated();
      console.log(authenticated, this.condition);
      if (authenticated && this.condition || !authenticated && !this.condition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    }

}
