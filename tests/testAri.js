const fs = require('fs');

class ProductManager{
   
    constructor(fileName){
        if(fs.existsSync(fileName)){
            this.path = fileName;
            this.products = JSON.parse(fs.readFileSync(fileName), 'utf-8');
        }else{
            this.path = fileName;
            this.products = [];
        }
    };

    async addProduct(title, description, price, thumbnail, code, stock){
        if(title != "" && description != "" && price != null && thumbnail != "" && code != ""){
            let product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock, 
            };

            //console.log(this.products.length);

            if (this.products.length === 0) {
                product['id'] = 1;
                this.products.push(product);
                await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'));
            }else{
                let codeValues = this.products.find(product => product['code'] === code);
                if(!codeValues){
                    product['id'] = this.products[this.products.length - 1]['id'] + 1;
                    this.products.push(product);
                    await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'));
                }
                else{
                    console.log("producto repetido");
                }
            
            }

        };
    };

     getProducts(){
        return this.products
  };

    async getProductById(id){
        let product = await this.products.find(product => product['id'] === id);
        if (product != null){
            console.log(product);
            return product;
        }else{
            console.log("Product not found");
            return null;
        }
    };

    async updateProduct(id, title, description, price, thumbnail, code, stock){
        let product = await this.getProductById(id);
        if(product!= null){
            product.title = title;
            product.description = description;
            product.price = price;
            product.thumbnail = thumbnail;
            product.code = code;
            product.stock = stock;
        }
    };

    async deleteProduct(id){
        let product = await this.getProductById(id);
        if(product!= null){
            this.products.splice(this.products.indexOf(product), 1);
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'));
        }
    }
};


//Prueba
 

let fileName = "./Products3.JSON";
let productos = new ProductManager(fileName);
productos.getProducts()
productos.addProduct('test2', 'escrition2', 300, 'sin imagen', 'a33', 20)
productos.addProduct('test2', 'descrition2', 300, 'sin imagen', 'a35', 20)
productos.deleteProduct(2)
console.log('Final de test\n')
console.log(productos.getProducts())
