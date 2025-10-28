const indexRoute = (req, res) => {
    res.send("Hello, This is the .: INDEX :. router with controller");
};

const homeRoute = (req, res) => {
    res.send("Hello, This is the .: HOME :. router with controller");
};

const dataRoute = (req, res) => {
    res.send("Hello, This is the .: DATA :. router with controller");
}

module.exports = {
    indexRoute,
    homeRoute,
    dataRoute
};