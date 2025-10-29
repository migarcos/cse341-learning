const indexRoute = (req, res) => {
    res.send("Hello, This is the .: INDEX :. router with controller and routes");
};

const homeRoute = (req, res) => {
    res.send("Hello, This is the .: HOME :. router with controller and routes");
};

const dataRoute = (req, res) => {
    res.send("Hello, This is the .: DATA :. router with controller and routes");
}

module.exports = {
    indexRoute,
    homeRoute,
    dataRoute
};