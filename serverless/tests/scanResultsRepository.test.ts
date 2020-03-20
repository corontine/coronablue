import {CreateScanResult} from "../src/respositories/ScanResultsRepository";

test('can create scan results', async () => {
    const testParams = {
        scanType: "123123",
        deviceId: "34454545",
        seenDeviceIds: ["234234234","1231231","23424234"],
        timestamp: new Date()
    };

    const scanResult = await CreateScanResult(testParams);
    console.log(scanResult);
});
