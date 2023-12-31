import { Component, OnInit } from '@angular/core'; 
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http:HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
     this.http.post("https://ng-complete-guide-14706.firebaseio.com/posts.json",postData).
     subscribe(
       responseData=>{
         console.log(responseData);
       }
     )
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
  
}
