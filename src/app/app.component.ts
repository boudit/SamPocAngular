import { Component } from '@angular/core';
import { Message } from './message';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  
  title = 'SamPocAngular';

  msgs: Message[] = [];
    
  ngOnInit(): void {
     
    let hubC = $.hubConnection("http://localhost:51520/SignalR")

    hubC
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    hubC.received((message: Message) => {
      this.msgs.push(message);
    });
  }
}
