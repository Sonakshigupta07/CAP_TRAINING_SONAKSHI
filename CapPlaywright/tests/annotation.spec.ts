import {test} from "@playwright/test"

///! Annotations 
// ----> We are adding some extra label


/**
 * skip
 * only
 * fixme
 * fail
 * describe
 * slow
 * settimeout
 */

test("test1",async()=>{
    console.log("test1");
})

test("test2",async()=>{
   // test.slow()
   console.log("test2");
   
})

test("test3",async()=>{
   console.log("test3");
})


test("test4",async()=>{
   console.log("test4");
})


test("test5",async()=>{
   console.log("test5");
})


test.describe("test6",async()=>{
   console.log("test6");
   test("case 1",()=>{})
   test("case 2",()=>{})
   test("case 3",()=>{})
})

