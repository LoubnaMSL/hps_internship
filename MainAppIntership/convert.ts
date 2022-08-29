import * as fs from "fs";

//let payload =String.raw`[{\"acquirer_bank_code\":\"UK0001\",\"linkup_code\":\"MTRA20200103\",\"batch_number\":\"65022830\",\"remittance_sequence\":\"1\",\"voucher_sequence\":\"1\",\"remittance_type\":\"S\",\"remittance_number\":\"65022830\",\"merchant_number\":\"0012481973UK\",\"outlet_number\":\"826261801\",\"mcc\":\"5541\",\"merchant_id_7\":\"MTRA20191223\",\"card_number\":\"700205*********3788\",\"network_code\":\"09\",\"network_card_type\":\"FN\",\"processing_code\":\"000000\",\"transaction_code\":\"01\",\"capture_reason_code\":\"MH\",\"transaction_sign\":\"D\",\"merchant_transaction_sign\":\"C\",\"reversal_flag\":\"N\",\"pos_data\":\"000000000000\",\"transaction_date\":\"2019-12-23 23:59:59.000\",\"batch_date\":\"2020-01-03 00:00:00.000\",\"remittance_date\":\"2019-12-23 00:00:00.000\",\"transaction_amount\":109,\"transaction_currency\":\"826\",\"billing_amount\":109.0,\"billing_currency\":\"826\",\"autho_flag\":\"Y\",\"authorization_code\":\"0 \",\"original_reference\":\"001263\",\"issuer_corporate_id\":\"MAN_TRX\",\"private_tlv_data\":\"0021Z060010Z200010Z150010\",\"external_reference_id\":\"001263\",\"private_data_1\":\"PHSGAB\",\"private_data_2\":\"N\",\"private_data_5\":\"1\",\"private_data_6\":64.54,\"page\":0,\"pageSize\":0,\"totalPages\":0,\"card_numberObj\":{\"cryptedValue\":\"0937c955adf536124d24878a8f149e3c0d9006aba6a22b4dae4bf3a7f8f95262\",\"maskedValue\":\"700205*********3788\"}}]`;


export function createFile(name:String,resultat: string) {

    fs.writeFile(`${name}.json`, resultat,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File created !");
    });
}
export function convertPayload(payload: String,nameFile:string)
{   
    if (payload.includes(`\\`) == false ) { 
        console.log("It's already a valid JSON format" );
     }
    else {
        
        console.log("It's not a valid JSON format" ); 
        console.log("The valid format in the created file..");
        payload=payload.replace(/\\/g,'');
        var newF=payload.replace(/\,/g,',\n');
        return createFile(nameFile,newF);
    }
    


}
//console.log(convertPayload(payload,'rien'));