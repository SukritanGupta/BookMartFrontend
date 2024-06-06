import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-get-all-component',
  templateUrl: './get-all-component.component.html',
  styleUrl: './get-all-component.component.scss'
})
export class GetAllComponentComponent implements OnInit,DoCheck{
  searchText:string="";
  bookList=[];
  ans:{}[];
  page: number = 1;
  pageSize: number = 5;
  messageOpen:boolean=false;
  messageType:string='success';
  message:string="";
  loadingMessage:string="";
  constructor(private http:HttpClient,private route:Router){

  }
  getAllBooks(){
    this.bookList=[];
    this.loadingMessage="Books fetches from server";
    this.http.get("http://localhost:8081/getAllBooks",{observe:'response'}).subscribe(response=>{
    for(let i in response.body){
      
      this.bookList.push(response.body[i]);
}
if(this.bookList.length==0){
  this.loadingMessage="No book found";
}

},error=>{
  this.loadingMessage="Sorry Server not found";
console.log("error comes");
})
  }
  ngOnInit(): void {
  this.getAllBooks();
  }
  ngDoCheck(): void {
    const regex = /^[a-zA-Z0-9]/;

    if(regex.test(this.searchText)){
      
   this.ans=   this.bookList.filter((data)=>{
        return data.bookName.toLowerCase().includes(this.searchText.toLowerCase());
      })
      if(this.ans.length==0){
         this.loadingMessage="Sorry no result found";
         
      }
    }
    else {
      this.ans=this.bookList;
    }
  }
  updateBook(id:number){
    // Now I want to redirect into updateBookDetails route with pathVariable {id}
    this.route.navigate(["/updateBookDetails",id]);
  }
async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 async deleteBook(ids:number){
    this.message="";
      // First delete the book 
     this.http.delete(`http://localhost:8081/deleteBook/${ids}`)
    .subscribe(()=>{
        this.messageOpen=true;
        this.messageType='success';
        this.message="book is Deleted successfully";
        this.bookList=this.ans.filter(item=>item['bookId']!=ids);
        this.ans=this.bookList;
        console.log(this.ans)
      },error=>{
        console.log("Error comes");
        this.messageOpen=true;
        this.messageType='danger'
    this.message=error['error']['message'];
      });
      // await  this.delay(1000);
      // this.getAllBooks();
  }
  removeMessage(){
    this.messageOpen=false;
   
  }
}
