import { DynamoDB } from 'aws-sdk';

type ScanResult = {
    scanType: string,
    deviceId: string,
    seenDeviceIds: Array<string>,
    timestamp: Date
};

type ScanResultAsParams = {
    TableName: string,
    Item:{
        senderDeviceId: string,
        seenDeviceId: string,
        timeStamp: Date
    }
}

export const CreateScanResult = async (scanResult: ScanResult) => {

    const docClient = new DynamoDB.DocumentClient();

    const scanType = scanResult.scanType === 'wifi' ? 'wifi' : 'bt';

    for(const seenDeviceId of scanResult.seenDeviceIds){
        const scanResultAsParams: ScanResultAsParams = {
            TableName: process.env.DYNAMODB_TABLE_NAME as string,
            Item: {
                senderDeviceId: `${scanType}_${scanResult.deviceId}`,
                seenDeviceId: `${scanType}_${seenDeviceId}`,
                timeStamp: scanResult.timestamp
            }
        };
        const putResult = await docClient.put(scanResultAsParams).promise();
        console.log(putResult);
    }
};

