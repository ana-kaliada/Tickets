export default class TicketsServices {

    baseURL = "https://aviasales-test-api.java-mentor.com";

    getData = async(url, obj = null) => {        
        const res = await fetch(`${this.baseURL}${url}`, obj)
        if(!res.ok) {
            throw res.status;
        }        
        return res;                
    };

    getSearchId = async () => {        
        const res = await this.getData("/search");
        const result = (await res.json()).searchId;

        return result;
    };

    getTickets = async (token) => {
        const response = await this.getData(`/tickets?searchId=${token}`);
        
        return response; 
    };
}

