// this file is releted to the build in modules

// let os=require("os")

// console.log(os.userInfo())

 
// console.log(`the system is started ${os.uptime()} seconds brfore`)

// let obj={
//     type:os.type(),
//     release:os.release(),
//     total:os.totalmem(),
//     free:os.freemem()
// }

// console.log(obj)

// let path=require("path")
// console.log(path.sep)


// let pathha=path.join('/content','test')
// console.log(pathha)
// console.log(path.basename(pathha))

// console.log(path.resolve(__dirname,"/content","test"))

// the below is the fs module
// give the correct directory name
// the flag method will append the both if we run it 2 times it will append 2 times






// the code is executing the lione by line
// which we actually do not need
// let fs=require('fs')
// console.log("starting the task")
// console.log(fs.readFileSync("./content/first.txt","utf8"))
// console.log(fs.readFileSync("./content/second.txt","utf8"))

// console.log("middle of the task")

// fs.writeFileSync("./content/makingfile","this file will be created ang this will be the text in it",{flag:'a'})

// console.log("ending the task")







// the asynchonous method
// the below is the call back hell
// but the code is not executing line by the line is good for us but we use promises or the async await instead of the call back


// console.log("starting the work")
// fs.readFile("./content/first.txt",'utf8',(err,result)=>{
//     if(err){
//         // console.log("the error has occured")
//         console.log(err)
//         return
//     }

//     let first=result

//     fs.readFile("./content/second.txt","utf8",(err,result2)=>{
//         if(err){
//             console.log(err)
//             return
//         }

//         let second=result2
//           fs.writeFile("./content/file2created",`the first: ${first} amd the second:${second}`,(err,result3)=>{
//               if(err){

//                   console.log(err)
//                   return
//                 }
//                 // console.log(result3)
//                 console.log("in the middle of the work")
//             })
           
//     })

// })

// console.log("we have just completed th ework")




// the below is the http module

let http=require("http")

// let webpage=http.createServer((request,response)=>{
//     response.write("this is the first website of my node")
//     response.end()
// })

// webpage.listen(1234)

// making the pages

// let website=http.createServer((req,res)=>{
//     console.log(req)
//     if(req.url==="/"){
//         res.end(`<h1>This si the home page<h1/>`)
//     }
//     if(req.url==="/about"){
//         res.end("this is the about page")
//     }
    
//     res.end(`<h1>The page is not availabe soory!!<h1/>
//           <a href="/">Go back to the home<a/>`)
    
// })
// website.listen(5555)


// npmjs.com


// we install the dependencies like loash or the bootstrap then we refresh the vscode then there will be node_modules and we see the dependencies we install it with the npm i bootstrap,lodash and and also the dependencies they will use like the bootstrap uses the popperjs this will get into the modules

// bootstrap lodash are the packages modules that are the external and http path fs the y are build in modules and the packages we need to install them by npm install ... they are put in the dependencies and the node_module folder is created


// using the lodash
// _ has all the methods in it this is for the external modules
let _=require("lodash")
let arr=[12,[12,[12,[12,22,22]]]]

console.log(_.flattenDeep(arr))