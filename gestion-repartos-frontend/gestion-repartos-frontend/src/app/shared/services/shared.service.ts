import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isCreate: string;
  isEdit: string;
  isView: string;

  constructor() {
    this.isCreate = 'create',
    this.isEdit = 'edit',
    this.isView = 'view'
   }

  getMode(url: string): string{
    if(url.includes('create')){
      return this.isCreate;
    } else if(url.includes('edit')){
      return this.isEdit;
    } else {
      return this.isView;
    }
  }

}
