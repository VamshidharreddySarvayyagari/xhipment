import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  select:false | undefined;
  item =[]
  allpackages!: any[];
  public totalItem : number = 0;
  public searchTerm !: string;
  products: any=[];
  subTotal: any;
  constructor(private sevice:ApiService , private catservice:CartService) { }

    ngOnInit() {
    // this.catservice.getAllProducts().subscribe({

    //   next: (res: any) => {
    //     console.log(res);
    //     this.allpackages = res;
    //   },
    //   error: (error) => {
    //     alert(error);
    //   },
    //   complete: () => {
    //     console.log('Request Completed');
    //   },
    // });

    // this.catservice.loadCart();
    // this.products = this.catservice.getProduct();
   this.sevice.getProduct().subscribe(res=>{
    this.allpackages=res;
   })
  }

  

  // search=()=>
  // {
  //   var input,npm,res,filter,td;
  //   let tr: any = [];
  //   input = document.getElementById("packageinput");
  //   filter = input?.getAttribute("input");
  //   npm = document.getElementById("npm");
  //   tr=npm?.getElementsByClassName("pn");
  //   for(let i=0;i<tr?.length;i++)
  //   {
  //      td=tr[i]
  //     if(td)
  //     {
  //     res= td.textContent || td.innerText
  //     if(res.indexof(filter)>-1) 
  //     {
  //        tr[i].style.display="";
  //     }
  //     else
  //     {
  //       tr[i].style.display="none";
  //     }
  //     }
  //   }
  // }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.catservice.search.next(this.searchTerm);
  }
 
  addtocart(item:any){
    this.catservice.addtoCart(item);
  }
  submitt()
  {
    this.addtocart;
  }
  // addToCart(product: any) {
  //   if (!this.catservice.productInCart(product)) {
  //     this.catservice.addToCart(product);
  //     this.products = [...this.catservice.getProduct()];
  //   }
  // }

}
