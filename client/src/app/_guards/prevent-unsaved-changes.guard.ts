import { CanDeactivateFn } from '@angular/router';
import { Member } from '../_models/member';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { HostListener } from '@angular/core';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  if(component.editForm?.dirty){
    return confirm('Are you sure you want to leave?');
  }
  return true;
};
