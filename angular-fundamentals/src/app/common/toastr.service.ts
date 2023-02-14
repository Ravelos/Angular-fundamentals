import { Injectable } from "@angular/core";

declare let toastr: any
@Injectable()
export class ToastrService{

  success(message:string, title?: string){
    toastr.success(message,title)
  }
  info(message:string, title?: string){
    toastr.info(message,title)
  }
  warning(message:string, title?: string){
    toastr.warning(message,title)
  }
  erro(message:string, title?: string){
    toastr.erro(message,title)
  }
}
