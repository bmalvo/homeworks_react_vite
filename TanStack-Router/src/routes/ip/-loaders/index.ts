import { IpResponse } from "../../../types";

export const IpLoader = async () => {
        const response = await fetch('https://api.ipify.org?format=json');

        return response.json() as Promise<IpResponse>
    }