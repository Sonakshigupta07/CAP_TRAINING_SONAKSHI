import { Request, test } from "@playwright/test";
// import { log } from "node:console";

test("Shopper stack",async({request})=>{

    // LOGIN
    let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
        data : {
            email : "sonakshigupta0710@gmail.com",
            password : "Sonakshi@0917",
            role : "SHOPPER"
        },ignoreHTTPSErrors:true
    })
    const body = await r1.json();
    // console.log(body);
    let token = body.data.jwtToken;
    console.log("Token : ",token);
    
    headers:{
        Authorization : `Bearer ${token}`
    }
    let userId = body.data.userId;
    console.log("UserId : ",userId);
    
    // PRODUCTS VIEW
    let viewProduct = await request.get("https://www.shoppersstack.com/shopping/products/alpha",{
        headers:{
        Authorization : `Bearer ${token}`
    },ignoreHTTPSErrors:true
    })

    let body5 = await viewProduct.json()
    let productId = await body5.data[0].productId;
    console.log("Product Id : ",productId);

    // WISHLIST
    let getProduct = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${userId}/wishlist`,{
        headers:{
            Authorization : `Bearer ${token}`
        },ignoreHTTPSErrors:true
    })

    let addProduct = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${userId}/wishlist`,{
        data:{
            productId : productId,
            quantity : 1
        },
         headers:{
            Authorization : `Bearer ${token}`
        },ignoreHTTPSErrors:true
    })

    // CART
    let addProductToCart = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${userId}/carts`,{
            data:{
              productId : productId,
              quantity : 1 
            },
            headers:{
            Authorization : `Bearer ${token}` 
        },ignoreHTTPSErrors: true
    })
    
    let CartProduct = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${userId}/carts`,{
        headers:{
            Authorization : `Bearer ${token}` 
        },ignoreHTTPSErrors: true
    })

    let body3 = await CartProduct.json()
    let itemId = body3.data[0].itemId;
    console.log("ItemId : ",itemId);

    // ADDRESS
     let addAddress1 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${userId}/address`,{
        data:{
       addressId: 0,
       buildingInfo: "Flat 103",
       city: "Jaipur",
       country: "India",
       landmark: "Near metro station",
       name: "sonakshi",
       phone: "8971258456",
       pincode: 432101,
       state: "Rajasthan",
       streetInfo: "Amer road",
       type: "HOME"
        },
        headers:{
            Authorization : `Bearer ${token}`
        },ignoreHTTPSErrors:true
    })

    let getAddress = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${userId}/address`,{
        headers:{
            Authorization : `Bearer ${token}`
        },ignoreHTTPSErrors:true
    })
    let body4 = await getAddress.json()
    // console.log(body4);
    let addressId = await body4.data[0].addressId;
    console.log("Address Id : ",addressId);

    let getParticularAddress = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${userId}/address/${addressId}`,{
        headers:{
            Authorization : `Bearer ${token}`
        },ignoreHTTPSErrors:true
    })
    console.log("Status checked", await getParticularAddress.status());

    // ORDER
    let postOrder = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${userId}/orders`,{
        data :{
  "address": {
    "addressId": addressId,
    "buildingInfo": "string",
    "city": "string",
    "country": "string",
    "landmark": "string",
    "name": "string",
    "phone": "string",
    pincode: 432101,
    "state": "string",
    "streetInfo": "string",
    "type": "string"
  },
  "paymentMode": "COD"
        },
        headers:{
            Authorization : `Bearer ${token}`
        },ignoreHTTPSErrors:true
    })
     console.log("Status checked", await postOrder.status());
     console.log(await postOrder.text());
})