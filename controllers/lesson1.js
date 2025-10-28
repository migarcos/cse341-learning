const indexRoute = (req, res) => {
    res.send("Hello, This is the .: INDEX :. router");
};

const homeRoute = (req, res) => {
    res.send("Hello, This is the .: HOME :. router");
};

const dataRoute = (req, res) => {
    res.send("Hello, This is the .: DATA :. router");
}

module.exports = {
    indexRoute,
    homeRoute,
    dataRoute
};