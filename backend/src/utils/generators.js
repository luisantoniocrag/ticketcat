

function generateUsername(qty=0) {
    const current = qty+1
    return `TicketCat #${current}`
}


module.exports = {
    generateUsername
}