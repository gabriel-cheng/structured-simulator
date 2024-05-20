class SimulatorCtrl {
    index(req, res) {
        return res.render("simulator_view/simulator");
    }
    simulatorSend(req, res) {
        const data = req.body;
        const hand_variables = {
            "data": data
        }

        console.log(data);
        return res.render("simulator_view/simulator_send", {"data": JSON.stringify(hand_variables)});
    }
}

export default SimulatorCtrl;
