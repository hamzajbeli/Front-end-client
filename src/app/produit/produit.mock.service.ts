import{ Injectable } from "@angular/core";
import { Produit } from "../shared/produit";
@Injectable({
    providedIn: "root"
})
export class ProduitMockService {
    private PRODUITS: Produit[] = [];

    constructor() {
        let p1 = new Produit("livre", 10, 100);
        let p2 = new Produit("cahier", 20, 200);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
    }
    public getProduits(): Produit[] {
        return this.PRODUITS;
    }
}