import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  messageDelay:number = 3000;
  
  add(message: string, delay: boolean = false) {
    this.messages.push(message);
    
    if(delay){
      setTimeout(() =>this.remove(this.messages.length-1), 3000);
    }
  }
 
  remove(index: number) {
    this.messages.splice(index, 1)
  }
  
  clear() {
    this.messages = [];
  }
}