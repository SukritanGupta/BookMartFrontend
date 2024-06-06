import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetJwtTokenServiceService } from '../get-jwt-token-service.service';
@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrl: './create-component.component.scss'
})
export class CreateComponentComponent{
@ViewChild("f") formData:NgForm;
messageOpen:boolean=false;
messageType:string='danger';
message:string="";
noError:boolean=true;
invalid:boolean=false;
constructor(private http:HttpClient){

}
onSubmit(){
  // TODO --> need to recheck the concept
  console.log("Name is :" ,this.formData.value.bookName);
  console.log("AuthorName is:",this.formData.value.authorName);
  console.log("Price is : ",this.formData.value.price);
  this.noError=true;

// Now CreateBook Details Api will call 
if(this.formData.value.bookName==null){
  this.formData.value.bookName="";
 }
 if(this.formData.value.authorName==null){
  this.formData.value.authorName="";
 }
 if(this.formData.value.price==null){
  this.formData.value.price="";
 }
  let createBookData={
    bookId:parseInt(((Math.random()*1000)+1).toString()),
    name:this.formData.value.bookName,
    authorName:this.formData.value.authorName,
    price:parseInt(this.formData.value.price)
   };
   this.message="";
   this.invalid=false;
  //  this.http.post("http://localhost:8081/createBookDetails",createBookData,{ headers: 
  //  { 'authorization': `Bearer ${this.token}`,'Content-Type': 'application/json','Accept': 'application/json'}, responseType: 'json' }).subscribe(response=>{
    
  this.http.post("http://localhost:8081/createBookDetails",createBookData).subscribe(response=>{console.log(response);
    this.messageOpen=true;
    this.messageType='success';
    this.message="book is created successfully";
    this.formData.reset();
   },error=>{
    console.log("Error comes",error['error']['message']);
        this.messageOpen=true;
        this.invalid=true;
        this.messageType='danger'
    this.message=error['error']['message'];
  if(this.message==undefined){
    this.message="Sorry Server not found Please try later";
  }
   })
}
removeMessage(){
  this.messageOpen=false;
}
}
