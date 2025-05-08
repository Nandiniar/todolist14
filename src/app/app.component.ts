import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist14';
  task="";
  taskList:{id:number,task:string}[]=[]; // iske 2 property hai id jiska type number hai and dusra task jiska type string hoge
  addTask(){
this.taskList.push({id:this.taskList.length+1,task:this.task})
this.task=''
console.log(this.taskList)
  }
deleteb(id:number){
  this.taskList=this.taskList.filter((item)=>item.id!=id)
}
}
