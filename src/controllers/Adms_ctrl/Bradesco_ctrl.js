import { default as Adms_model } from "../../models/administrators_model/index_adm.js";
const Bradesco = Adms_model.Bradesco;

class BradescoCtrl {
    async viewAllBradescoData(req, res) {
        try {
            const bradesco_data = await Bradesco.findAll();

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
    async viewOneBradescoData(req, res) {
        const { id } = req.params;

        try {
            const bradesco_data_finded = await Bradesco.findByPk(id);

            if(!bradesco_data_finded) {
                return res.status(404).json({
                    "response": "Dado não encontrado!",
                    "status_code": 404
                });
            }

            return res.status(200).json({
                "response": bradesco_data_finded,
                "status_code": 200
            });
        } catch(error) {
            console.log(error);

            return res.status(400).json({
                "response": "Bad request",
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
            const bradesco_data = await Bradesco.create(new_bradesco_data);

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
    async updateBradescoData(req, res) {
        const { id } = req.params;

        const {
            bradesco_group_code,
            bradesco_rate,
            bradesco_reserve_fund,
        } = req.body;

        const new_bradesco_data = {
            bradesco_group_code,
            bradesco_rate,
            bradesco_reserve_fund
        }

        try {
            const bradesco_data_founded = await Bradesco.findByPk(id);

            if(!bradesco_data_founded) {
                return res.status(404).json({
                    "response": "Dado não encontrado!",
                    "status_code": 404
                });
            }

            await bradesco_data_founded.set(new_bradesco_data);
            await bradesco_data_founded.save();

            return res.status(200).json({
                "response": "Dados atualizados com sucesso!",
                "new_data": bradesco_data_founded,
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
    async deleteBradescoData(req, res) {
        const { id } = req.params;

        try {
            const bradesco_data_founded = await Bradesco.findByPk(id);

            if(!bradesco_data_founded) {
                return res.status(404).json({
                    "response": "Dado não encontrado!",
                    "status_code": 404
                });
            }

            await Bradesco.destroy({ "where": { "bradesco_data_id": id } });

            return res.status(200).json({
                "response": "Informações deletadas com sucesso!",
                "status_code": 200
            });
        } catch(error) {
            console.log(error);

            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
}

export default BradescoCtrl;
