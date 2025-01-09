let visitCount = 0;
let startTime;

if (!startTime) {
    startTime = new Date();
}

const getVisits = (req, res) => {
    visitCount++;
    res.json({ visits: visitCount });
};

const getUptime = (req, res) => {
    const currentTime = new Date();
    const uptime = Math.floor((currentTime - startTime) / 1000); // in seconds
    res.json({ uptime: uptime });
};

module.exports = {
    getVisits,
    getUptime
};
