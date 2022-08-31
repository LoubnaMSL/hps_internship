import * as fs from "fs";
export function rdFile(name: string): any {
    return fs.readFile(`${name}.ts`, 'utf8', function (err, data) {
        if (err) throw err;
        console.log(String.raw`${data}`);
    });
}
export function createFile(name: string, resultat: string) {

    fs.writeFile(`${name}.json`, resultat, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("File created !");
    });
}
let payload = rdFile('incorr')
var payloadJson = JSON.stringify(payload);
console.log(payload)

setTimeout(function () { 
} , 3000); 
if (payloadJson.indexOf(`\\`) == - 1) {
    console.log("It's already a valid JSON format");
}
else {

    console.log("It's not a valid JSON format");
    console.log("The valid format in the created file..");
    payloadJson = payloadJson.replace(/\\/g, '');
    var newF = payloadJson.replace(/\,/g, ',\n');
    console.log(createFile('fichier', newF));
}

