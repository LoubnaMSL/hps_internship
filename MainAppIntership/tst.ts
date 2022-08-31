import * as fs from "fs";
export function rdFile(name:string):any {
 return fs.readFile(`${name}.ts`, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(String.raw`${data}`);
  });
}
export function createFile(name:string,resultat: string) {

    fs.writeFile(`${name}.json`, resultat,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File created !");
    });
}
let payload =rdFile('incorr')
var payloadJson= JSON.stringify(payload);

setTimeout(function () { 
     } , 3000); 
function convertPayload( pay = "jj" , nameFile:string)
{
    console.log(pay);
    if (pay!=null && pay!=undefined){
   if(pay.indexOf(`\\`) == - 1) { 
        console.log("It's already a valid JSON format" );
     }
    else {
        
        console.log("It's not a valid JSON format" ); 
        console.log("The valid format in the created file..");
        pay=pay.replace(/\\/g,'');
        var newF=pay.replace(/\,/g,',\n');
        return createFile(nameFile,newF);
    }
}
}

convertPayload(payloadJson,'fichier');