import { Component, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { Member } from '../../_models/member';
import { AccountService } from '../../_services/account.service';
import { MembersService } from '../../_services/members.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [TabsModule,FormsModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit{
  @ViewChild('editForm') editForm?:NgForm;


  @HostListener('window:beforeunload',['$event']) notify($event:any){
    if(this.editForm?.dirty){
      $event.returnValue=true;
    }
  }

  member?:Member;
  accountservice=inject(AccountService);
  memberservice=inject(MembersService);
  private toastr=inject(ToastrService)

  ngOnInit(): void {
    this.loadmember();
  }

  loadmember() {
    const user=this.accountservice.currentUser();
    if(!user) return;
    this.memberservice.getMember(user.username).subscribe({
      next:member => this.member =member
    })
  }

  updatememer(){
    this.memberservice.updateMember(this.editForm?.value).subscribe({
      next:_=>{
        this.toastr.success("profile updated successfully");
        this.editForm?.reset(this.member);
      }
    })
  }
}