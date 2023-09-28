const fs= require("fs");
const data="Node. js is a popular programming environment that can be used for building high-scale applications that need to support multiple concurrent requests. Single-threaded non-blocking I/O makes it an excellent choice for both real-time and data streaming applications, too. Node js uses the Single Threaded Event Loop architecture to handle multiple concurrent clients. Node.js Processing Model is based on the JavaScript event-based model along with the JavaScript callback mechanism.";
 fs.writeFileSync("nodejs_architecture.txt", data);
 const newData= fs.readFileSync('nodejs_architecture.txt')

 console.log("Data:",newData.toString());
