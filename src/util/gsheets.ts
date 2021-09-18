import axios from "axios";
import { env } from "./env";

interface SheetsResponse {
    range: string;
    majorDimension: string,
    values: string[][];
}

interface AxiosResponse {
    readonly status: number;
    readonly data: SheetsResponse;
}

//https://stackoverflow.com/questions/38949318/google-sheets-api-returns-the-caller-does-not-have-permission-when-using-serve
async function getOptions(game: string): Promise<string[]> {
    const requestUrl: string = env().optionsUrl.replaceAll("${COLUMN}", env().gameColumn[game]);
    const response: AxiosResponse = await axios.get(requestUrl, {timeout: 5000});
    const result: string[] = [];
    for (let row of response.data.values) {
        result.push(row[0]);
    }
    return result;
}

export {getOptions};