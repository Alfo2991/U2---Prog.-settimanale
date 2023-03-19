const url = "https://striveschool-api.herokuapp.com/api/product/"
window.onload = async ()=> {
    const url = "https://striveschool-api.herokuapp.com/api/product/";
    const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0N2RkZmY4MWI0MjAwMTM5YjJjMmEiLCJpYXQiOjE2NzkwNjQ3ODgsImV4cCI6MTY4MDI3NDM4OH0.CPrXtCQ0ixdGKs4yPeL83Ayb9gPUCOLWzEnGs-Zv2JE ",
      };

      let myProduct = {
        
        name: document.querySelector("#productname"),
        description: document.querySelector("#productdescription"),
        brand: document.querySelector("#productbrand"),
        imageUrl: document.querySelector("#productimg"),
        price: document.querySelector("#productprice"),
      };
const searchParams = new URLSearchParams(window.location.search);
const itemId = searchParams.get('id');
      try {
    
        let response = await fetch(url + itemId, { headers });
        let product = await response.json();
        console.log(product)
        myProduct.name.value = product.name;
        myProduct.description.value = product.description;
        myProduct.brand.value = product.brand;
        myProduct.imageUrl.value = product.imageUrl;
        myProduct.price.value = product.price;
        
      }
      catch(exception){
        console.log('error');
      }
}



    
async function modify() {
    let myProduct = {
      name: document.querySelector("#productname").value,
      description: document.querySelector("#productdescription").value,
      brand: document.querySelector("#productbrand").value,
      imageUrl: document.querySelector("#productimg").value,
      price: document.querySelector("#productprice").value,
    };
    const searchParams = new URLSearchParams(window.location.search);
    const itemId = searchParams.get('id');
    try {
      let response = await fetch(url + itemId, {
        method: "PUT",
        body: JSON.stringify(myProduct),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0N2RkZmY4MWI0MjAwMTM5YjJjMmEiLCJpYXQiOjE2NzkwNjQ3ODgsImV4cCI6MTY4MDI3NDM4OH0.CPrXtCQ0ixdGKs4yPeL83Ayb9gPUCOLWzEnGs-Zv2JE",
        }),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      location.reload();
    } catch (error) {
      console.log(error);
    } 
  }
  
      async function deleteProduct() {
        const url = "https://striveschool-api.herokuapp.com/api/product/";
        const headers = {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0N2RkZmY4MWI0MjAwMTM5YjJjMmEiLCJpYXQiOjE2NzkwNjQ3ODgsImV4cCI6MTY4MDI3NDM4OH0.CPrXtCQ0ixdGKs4yPeL83Ayb9gPUCOLWzEnGs-Zv2JE",
        };
      
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get("id");
      
        try {
          const response = await fetch(url + id, {
            method: "DELETE",
            headers: headers,
          });
      
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
      
          console.log("Product deleted successfully");
        } catch (error) {
          console.log(error);
        }
        function deleteProduct() {
            window.location.assign(`index.html`);
          }
      }
   
