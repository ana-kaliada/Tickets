export default class TicketsServices {

    baseURL = "https://aviasales-test-api.java-mentor.com";

    static searchID;

    getData = async(url, obj = null) => {
        const res = await fetch(`${this.baseURL}${url}`, obj)
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status} `);
        }
        const response = await res.json();
        return response;
    };

    getSearchId = async () => {
        this.searchID = (await this.getData("/search")).searchId;
        return this.searchID;
    };

    getTickets = async () => {
        const token = await this.getSearchId();
        const response = await this.getData(`/tickets?searchId=${token}`);
        
        return response; 
    };
}

