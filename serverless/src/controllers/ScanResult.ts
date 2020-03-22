import {CreateScan} from "../respositories/ScanResultsRepository";
import {BuildResponse} from "../helpers/Response";


export const CreateScanResult = async (event: any, context: any) => {
    const parsedBody = JSON.parse(event.body);
    const scanResult: Scan = parsedBody as Scan;
    const createScanResult = await CreateScan(scanResult);

    if(createScanResult){
        return BuildResponse(
            200,
            {'status':'message_accepted'}
        )
    }else{
        return BuildResponse(
            500,
            {'status':'message_rejected'}
        )
    }

};
