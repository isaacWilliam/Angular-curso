import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, map, Observable, switchMap, take, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit{

  queryField: FormControl = new FormControl();
  field = 'filename,description,version,github';

  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  result$: Observable<any> = new Observable<any>();

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {

    // this.result$ = this.http.get(this.SEARCH_URL + '?search=vue&fields=filename,description,version,github').pipe(
    //   map((res: any) => res.results)
    // );

    this.result$ = this.queryField.valueChanges.pipe(
      //todo Remove os espaços em brancos
      map(value => value.trim()),
      //todo filtra valores para rodar somente acima de dois caracteres
      filter(value => value.length > 2),
      //todo um delay para não fazer uma requisição á cada letra digitada
      debounceTime(200),
      /*todo fazer uma chamada somente se os valores mudarem
       exemplo: quando digita espaçoes várias vezes */
      distinctUntilChanged(),
      switchMap(value => this.http.get(this.SEARCH_URL, {
        params: {search: value, fields: this.field}
      })),
      map((res: any) => res.results)
    );
  }

  onSearch(){
    // let field = 'filename,description,version,github';
    // let valor = this.queryField.value;
    // if(valor && (valor = valor.trim()) != ''){
    //
    //   // const params1 = {
    //   //   search: valor,
    //   //   fields: field
    //   // }
    //
    //   let params = new HttpParams();
    //   /* todo Nesse caso do HttpParams, da prá fazer tanto pelo Set quanto pelo append  */
    //   params = params.set('search', valor).append('fields', this.field);
    //   // params = params.set('fields', field);
    //
    //
    //   this.result$ = this.http.get(this.SEARCH_URL, {params: params}).pipe(
    //     map((res: any) => res.results)
    //   );
    // }
  }

  // productDialog: boolean = false;
  //
  // products!: Product[];
  //
  // product!: Product;
  //
  // selectedProducts!: Product[] | null;
  //
  // submitted: boolean = false;
  //
  // statuses!: any[];
  //
  // constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) {}
  //
  // ngOnInit() {
  //   this.productService.getProducts().then((data) => (this.products = data));
  //
  //   this.statuses = [
  //     { label: 'INSTOCK', value: 'instock' },
  //     { label: 'LOWSTOCK', value: 'lowstock' },
  //     { label: 'OUTOFSTOCK', value: 'outofstock' }
  //   ];
  // }
  //
  // openNew() {
  //   this.product = {};
  //   this.submitted = false;
  //   this.productDialog = true;
  // }
  //
  // deleteSelectedProducts() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete the selected products?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
  //       this.selectedProducts = null;
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
  //     }
  //   });
  // }
  //
  // editProduct(product: Product) {
  //   this.product = { ...product };
  //   this.productDialog = true;
  // }
  //
  // deleteProduct(product: Product) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + product.name + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.products = this.products.filter((val) => val.id !== product.id);
  //       this.product = {};
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  //     }
  //   });
  // }
  //
  // hideDialog() {
  //   this.productDialog = false;
  //   this.submitted = false;
  // }
  //
  // saveProduct() {
  //   this.submitted = true;
  //
  //   if (this.product.name?.trim()) {
  //     if (this.product.id) {
  //       this.products[this.findIndexById(this.product.id)] = this.product;
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
  //     } else {
  //       this.product.id = this.createId();
  //       this.product.image = 'product-placeholder.svg';
  //       this.products.push(this.product);
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
  //     }
  //
  //     this.products = [...this.products];
  //     this.productDialog = false;
  //     this.product = {};
  //   }
  // }
  //
  // findIndexById(id: string): number {
  //   let index = -1;
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id === id) {
  //       index = i;
  //       break;
  //     }
  //   }
  //
  //   return index;
  // }
  //
  // createId(): string {
  //   let id = '';
  //   var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (var i = 0; i < 5; i++) {
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return id;
  // }
  //
  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //
  //     default: '';
  //       return '';
  //   }
  // }
}
