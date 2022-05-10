import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class StateService {
   private state:any;
   notifyState: EventEmitter<any>;

   constructor(){
     this.notifyState = new EventEmitter<any>();
   }

   updateData(data: any){
     this.state = data;
     // Emit state with event raise
     this.notifyState.emit(this.state);
   }
}
