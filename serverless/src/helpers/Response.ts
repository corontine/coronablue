export const BuildResponse = (statusCode: number, body: any) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body)
    };
};
