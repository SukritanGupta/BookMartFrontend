import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrl: './update-component.component.scss'
})
export class UpdateComponentComponent implements OnInit {
  @ViewChild("f") formData:NgForm;
  messageOpen:boolean=false;
  messageType:string='danger';
  message:string="";
  noError:boolean=true;
  invalid:boolean=false;
  bookName:string;
  bookAuthorName:string;
  bookPrice:string;
  bookId:number;
  constructor(private http:HttpClient,private route:ActivatedRoute){
  
  }
  ngOnInit(): void {
      this.route.paramMap.subscribe(response=>{
            this.bookId=parseInt( response.get('id'));
            console.log("BookId is :",this.bookId);
      });
      // Now make getBookDetailsCall
      this.http.get(`http://localhost:8081/getBookDetails/${this.bookId}`,{observe:'response'}).subscribe(response=>{
        console.log(response.body['name']);
        this.bookName=response.body['name'];
        this.bookAuthorName=response.body['authorName']
        this.bookPrice=response.body['price'];
      })
        }
  onSubmit(){
    console.log("Name is :" ,this.bookName);
    console.log("AuthorName is:",this.bookAuthorName);
    console.log("Price is : ",this.bookPrice);
    this.noError=true;
    let updateBookData={
      // bookId:this.bookId,
      name:this.bookName,
      authorName:this.bookAuthorName,
      price:parseInt(this.bookPrice)
     };
     this.message="";
     this.invalid=false;
    this.http.put(`http://localhost:8081/updateBook/${this.bookId}`,updateBookData).subscribe(response=>{console.log(response);
      this.messageOpen=true;
      this.messageType='success';
      this.message="book is updated successfully";
      // this.formData.reset();
     },error=>{
      console.log("Error comes",error['error']['message']);
          this.messageOpen=true;
          this.invalid=true;
          this.messageType='danger'
         
         
            error=(error['error']['message']).split(":");
            if(error.length==2){
              this.message=error[1];
            }
            else{
              this.message=error[0]
            }
          
         
         
     })
  }
  removeMessage(){
    this.messageOpen=false;
  }
}
