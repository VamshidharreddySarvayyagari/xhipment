import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  removeCartItem(item: any) {
    throw new Error('Method not implemented.');
  }

  public cartItemList : any =[]
  public packagelist = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  products: any[] = [];
  constructor(private http: HttpClient) { }
  getProducts(){
    return this.packagelist.asObservable();
  }
 
  addtoCart(product: { name: any; }){
    this.cartItemList.push(product.name);
    this.packagelist.next(this.cartItemList);
    console.log(this.cartItemList)
  }

  RemoveCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.name=== a.name){
        this.cartItemList.splice(index,1);
      }
    })
    this.packagelist.next(this.cartItemList);
  }
}