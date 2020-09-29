const ticketFilter = (changes, tickets, type) => {
    let filteredTickets;
    
    const activeTickets = tickets.filter((ticket) => {
        const [there, back] = ticket.segments;
        const thereStops = there.stops.length;
        const backStops = back.stops.length;
        
        if(changes.includes('all')) return ticket;
        if(changes.includes(thereStops) && changes.includes(backStops)) return ticket;
    });

    if(type === "price") {
        filteredTickets = activeTickets.sort((prev, next) => (prev.price - next.price));
        return filteredTickets;
    };

    filteredTickets = activeTickets.sort((prev, next) => {
        const [there, back] = prev.segments;
        const [from, to] = next.segments;

        return (there.duration + back.duration) - (from.duration + to.duration)
    });

    return filteredTickets
};

export {ticketFilter}; 