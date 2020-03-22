import { DynamoDB } from 'aws-sdk';

type ScanResultAsParams = {
    TableName: string,
    Item:{
        senderDeviceId: string,
        seenDeviceId: string,
        timestamp: string
    }
}

export const CreateScan = async (scanResult: Scan) => {

    const docClient = new DynamoDB.DocumentClient();

    const scanType = scanResult.scanType === 'wifi' ? 'wifi' : 'bt';

    for(const seenDeviceId of scanResult.seenDeviceIds){
        const scanResultAsParams: ScanResultAsParams = {
            TableName: process.env.DYNAMODB_TABLE_NAME as string,
            Item: {
                senderDeviceId: `${scanType}_${scanResult.deviceId}`,
                seenDeviceId: `${scanType}_${seenDeviceId}`,
                timestamp: new Date().toISOString()
            }
        };
        await docClient.put(scanResultAsParams).promise();
    }
    return true
};

