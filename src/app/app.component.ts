import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string
  teams: string[][] = []
  errorMessage!: string
  number!: number
  members: string[] = [];
 

  onGenerate(){

    this.teams = []
    const allMembers = [...this.members]
    if(this.members.length < this.number ){
      this.errorMessage = "The members are too small"
      return
    }else{
      while(allMembers.length){
        for(let i = 0; i < this.number; i++){
          const randomIndex = Math.floor(Math.random() * allMembers.length);
          const member = allMembers.splice(randomIndex, 1)[0];
          if(!member)break
          if (this.teams[i]) {
            this.teams[i].push(member);
          } else {
            this.teams[i] = [member];
          }
        }
      }
    }

    this.members = []
    this.number = 0
    
    
  }

  onClick(){
   if(!this.name){
    this.errorMessage = "Pls fill in a name thank you"
    return
   }

   this.members.push(this.name)
   this.name = ""
   this.errorMessage = ""
  }
  
}
