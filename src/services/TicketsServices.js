export default class TicketsServices {

    baseURL = "https://aviasales-test-api.java-mentor.com";

    static searchID;

    getData = async(url, obj = null) => {
        try {
            const res = await fetch(`${this.baseURL}${url}`, obj)
            if(!res.ok) {
                throw res.status;
            }        
            return res;
        } catch(err) {
            if(err === 500) throw err;
            throw new Error(`Could not fetch ${url}, error: ${err}`)
        }
        
    };

    getSearchId = async () => {        
        const res = (await this.getData("/search"));
        this.searchID = (await res.json()).searchId;

        return this.searchID;
    };

    getTickets = async () => {
        const token = await this.searchID;
        const response = await this.getData(`/tickets?searchId=${token}`);
        
        return response; 
    };
}

