import Axios, { AxiosError, AxiosInstance } from 'axios'

export class CatApi {
    private static BaseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL as string;
    private static ApiKey: string = process.env.NEXT_PUBLIC_API_KEY as string;
    private static Instance: AxiosInstance = this.CreateInstace();

    //PUBLIC METHODS
    static GetCats = async () => {
        try {
            const result = await this.Instance.get("/breeds");

            return {
                data: result.data,
                status: result.status
            };
        } catch(e) {
            console.error(e)
        }
    }

    //PRIVATE METHODS
    private static CreateInstace(): AxiosInstance {
        return Axios.create({
            baseURL: this.BaseUrl,
            headers: {
                'x-api-key': this.ApiKey 
            }
        });
    }
}