import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from './product';
import { Table} from 'primeng/table';
import { SelectItem, MessageService, ConfirmationService} from 'primeng/api';
import FileSaver from 'file-saver';
import { ProductService } from '../../services/product.service';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-extended-tables',
  templateUrl: './extended-tables.component.html',
  styleUrls: ['./extended-tables.component.css'],
  providers: [ProductService, MessageService, ConfirmationService]
})
export class ExtendedTablesComponent implements OnInit{
  productData!: Product[];
  product!: Product;
  selectedProducts!: Product;
  statuses!: SelectItem[];
  categories!: SelectItem[];
  clonedProducts: { [s: string]: Product } = {};
  cols!: Column[];
  exportColumns!: ExportColumn[];
  submitted: boolean = false;
  productDialog: boolean = false;

  ngOnInit() {
    this._productService.getProducts().then((data) => (this.productData = data));
    this.statuses = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];
    this.categories = [
      {label: 'Clothes', value: 'Clothes'},
      {label: 'Accessories', value: 'Accessories'},
    ];
    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'image', header: 'Image'},
      {field: 'price', header: 'Price'},
      {field: 'category', header: 'Category'},
      {field: 'rating', header: 'Reviews'},
      {field: 'inventoryStatus', header: 'Status'},
    ];
    this.exportColumns = this.cols.map((col) => ({title: col.header, dataKey: col.field}));
  }

  constructor (private _productService: ProductService, private _confirmationService: ConfirmationService, private _messageService: MessageService) { }

  @ViewChild('products') productTable!: Table;


  clear(table: Table){
    table.clear();
  }

  getSeverity(status: string){
    switch(status){
      case 'INSTOCK': 
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }

  exportPdf() {
    import('jspdf').then((jsPDF) => {
        import('jspdf-autotable').then((x) => {
            const doc = new jsPDF.default('p', 'px', 'a4');
            (doc as any).autoTable(this.exportColumns, this.productData);
            doc.save('products.pdf');
        });
    });
  }

  exportExcel() {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(this.productData);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, 'products');
      });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }

  exportCSV() {
    const separator = ',';
    
    // Extraer headers a partir del primer item
    const keys = Object.keys(this.productData[0]);
  
    // Contenido del CSV
    const csvContent =
      keys.join(separator) +
      '\n' +
      this.productData.map((item) => {
        return keys.map((key) => {
          return item[key as keyof Product];
        }).join(separator);
      }).join('\n');
  
    // Blob y guardar
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    FileSaver.saveAs(blob, 'products.csv');
  }

  applyGlobalFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.productTable.filterGlobal(filterValue, 'contains');
  } 

  deleteProduct(product: Product){
    this._confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      key: 'deleteProduct',
      icon: 'bi bi-exclamation-triangle',
      accept: () => {
        this.productData = this.productData.filter((val) => val.id !== product.id);
        this.product = {};
        this._messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  openNew(){
    this.product = {}
    this.submitted = false;
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct(){
    this.submitted = true;
    if (this.product.name?.trim()){
      if(this.product.id) {
        this.productData[this.findIndexById(this.product.id.toString())] = this.product;
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        this.product.id = this.createId();
        this.product.imageUrl = 'product-placeholder.svg';
        this.productData.push(this.product);
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }
      this.productData = [...this.productData];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.productData.length; i++) {
        if (this.productData[i].id?.toString() === id) {
            index = i;
            break;
        }
    }
    return index;
  }

  createId(): number {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return parseInt(id);
  }
  
  editProduct(product: Product){
    this.product = { ...product};
    this.productDialog = true;
  }
}
