import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import products from "../../mocks/product.json";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "http://localhost:3000/products";
  constructor(private http: HttpClient) {}
}
