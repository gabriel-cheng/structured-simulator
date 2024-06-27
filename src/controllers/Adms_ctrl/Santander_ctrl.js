import { default as Adms_model } from "../../models/administrators_model/index_adm.js";
const Santander = Adms_model.Santander;

class SantanderCtrl {
    async viewAllSantanderData(req, res) {
        try {
            const santander_data = await Santander.findAll();

            return res.status(200).json({
                "response": santander_data,
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
    async viewOneSantanderData(req, res) {
        const { id } = req.params;

        try {
            const santander_data_finded = await Santander.findByPk(id);

            if(!santander_data_finded) {
                return res.status(404).json({
                    "response": "Dado não encontrado!",
                    "status_code": 404
                });
            }

            return res.status(200).json({
                "response": santander_data_finded,
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
    async addNewSantanderData(req, res) {
        const data = req.body;

        const new_santander_data = {
            santander_group_code: data.santander_group_code,
            santander_rate: data.santander_rate,
            santander_reserve_fund: data.santander_reserve_fund
        };

        try {
            const santander_data = await Santander.create(new_santander_data);

            return res.status(201).json({
                "response": santander_data,
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
    async updateSantanderData(req, res) {
        const { id } = req.params;

        const {
            santander_group_code,
            santander_rate,
            santander_reserve_fund,
        } = req.body;

        const new_santander_data = {
            santander_group_code,
            santander_rate,
            santander_reserve_fund
        }

        try {
            const santander_data_founded = await Santander.findByPk(id);

            if(!santander_data_founded) {
                return res.status(404).json({
                    "response": "Dado não encontrado!",
                    "status_code": 404
                });
            }

            await santander_data_founded.set(new_santander_data);
            await santander_data_founded.save();

            return res.status(200).json({
                "response": "Dados atualizados com sucesso!",
                "new_data": santander_data_founded,
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
    async deleteSantanderData(req, res) {
        const { id } = req.params;

        try {
            const santander_data_founded = await Santander.findByPk(id);

            if(!santander_data_founded) {
                return res.status(404).json({
                    "response": "Dado não encontrado!",
                    "status_code": 404
                });
            }

            await Santander.destroy({ "where": { "santander_data_id": id } });

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

export default SantanderCtrl;
