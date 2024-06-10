import { default as adms } from "../../models/administrators_model/index_adm.js";
const bradesco = adms.bradesco;

class BradescoCtrl {
    async viewAllData(req, res) {
        try {
            const bradesco_data = await bradesco.findAll();

            return res.status(200).json({
                "response": bradesco_data,
                "status_code": 200
            });
        } catch(error) {
            console.log(error);

            return res.status(400).json({
                "response": error,
                "status_code": 400
            });
        }
    }
    async addNewBradescoData(req, res) {
        const data = req.body;

        const new_bradesco_data = {
            bradesco_group_code: data.bradesco_group_code,
            bradesco_rate: data.bradesco_rate,
            bradesco_reserve_fund: data.bradesco_reserve_fund
        };

        try {
            const bradesco_data = await bradesco.create(new_bradesco_data);

            return res.status(201).json({
                "response": bradesco_data,
                "status_code": 201
            });

        } catch(error) {
            console.log(error);

            return res.status(400).json({
                "response": error,
                "status_code": 400
            });
        }
    }
}

export default BradescoCtrl;
