import {request, test} from "@playwright/test"

test("",async({request})=>{
     // let apicontext = await request.newContext()

     let r1 = await request.post("https://petstore3.swagger.io/api/v3/pet",{
          data:{
               id : 51,
               name : "dog",
               status : "available"
          }
     })
    console.log(r1);
// console.log((await r1.json()).data.name);
// const responseBody = await r1.json();
// console.log(responseBody.name);

   let r2 = await request.get("https://petstore3.swagger.io/api/v3/pet/51")
   console.log("GET : ", await r2.json());

   let r3 = await request.put("https://petstore3.swagger.io/api/v3/pet",{
     data : {
          id : 51,
          name : "cat",
          status : "available"
     }
   })
   console.log(await r3.json());
   
   let r4 = await request.delete("https://petstore3.swagger.io/api/v3/pet/51")
   console.log('DELETE DONE');
   

})

