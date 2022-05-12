// html: for HTML Template
//  css: for Styles
import {LitElement, html,css} from 'lit-element';
import {customElement, property} from 'lit/decorators.js';
import {Employee} from './../models/app.employee.model';

@customElement('static-dropdown')
export class StaticDropDown extends LitElement {

// define a style that will be applied on the HTML Template
 static override styles? = css `
      .select {
        display: block;
        width: 500px;
        font-size:20px;
      }
      .table, th, td {
        border:double;
      }

 `;

 // define properties, using the datatype, these are used by data binding w.r.t. the Container of LitElement
 @property({type:Object}) departments =['Information Technology', 'Mechanical', 'Civil', 'Electronics', 'Electrical', 'Computer'];
 @property({type:String}) strInfo='';
 // lets define an Array
//  @property({type:Object}) employees?:Array<Employee> = new Array<Employee>();

@property({type:Array}) employees? = [{
  EmpNo:0,
  EmpName:''
}];

@property({type:Object}) employee = {
  EmpNo:0,
  EmpName:''
};


   // a method that will be executed inside the LitElement
   private selectData():void{
     alert('data');
   }

   private selectDataWithParameter(data:any):void{
    // alert(`Data =  ${data}`)
     this.dispatchEvent(new CustomEvent<any>('change',{
       detail:data
     }));
   }

  // rendering of the template
  // return the 'html' that will be in Shadow DOM
   /* evt.target.value: The evt, the event object, evt.target, the element on which event is raised, evt.target.value, is the value selected */
  override render(){
    return html `
        <div>
           <strong>Waiting for the data from Parent Component</strong>
           <input type="text" value=${this.strInfo} class="select"/>
           <hr/>
           <select class="select" @change=${this.selectData}>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="SL">SL</option>
              <option value="TR">TR</option>
           </select>
           <br/>
           <div>
              <strong>
                 The Dropdown generated dynamically
              </strong>
              <br/>

              <select class="select" @change=${(evt:any)=>this.selectDataWithParameter(evt.target.value)}>
                ${
                  this.departments.map((dept,idx)=>{
                    return html `
                        <option value=${dept}>${dept}</option>
                    `
                  })
                }
              </select>
           </div>
           <hr/>
           <table class="table">
               <thead>
                  <tr>
                     <th>EmpNo</th>
                     <th>EmpName</th>
                  </tr>
               </thead>
               <tbody>
                  ${
                    this.employees?.map((emp,idx)=>{
                      return html `
                          <tr>
                             <td>${emp.EmpNo}</td>
                             <td>${emp.EmpName}</td>
                          </tr>
                      `
                    })
                  }
               </tbody>
           </table>
           <br/>

        </div>
    `;
  }
}
