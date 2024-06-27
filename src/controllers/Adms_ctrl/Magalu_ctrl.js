import { default as Adms_model } from "../../models/administrators_model/index_adm.js";
const Magalu = Adms_model.Magalu;

class MagaluCtrl {
    async viewAllMagaluData(req, res) {
        try {
            const magalu_data = await Magalu.findAll();

            return res.status(200).json({
                "response": magalu_data,
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
    async viewOneMagaluData(req, res) {
        const { id } = req.params;

        try {
            const magalu_data_finded = await Magalu.findByPk(id);

            if(!magalu_data_finded) {
                return res.status(404).json({
                    "response": "Dado não encontrado!",
                    "status_code": 404
                });
            }

            return res.status(200).json({
                "response": magalu_data_finded,
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
    async addNewMagaluData(req, res) {
        const data = req.body;

        const new_magalu_data = {
            magalu_group_code: data.magalu_group_code,
            magalu_rate: data.magalu_rate,
            magalu_reserve_fund: data.magalu_reserve_fund
        };

        try {
            const magalu_data = await Magalu.create(new_magalu_data);

            return res.status(201).json({
                "response": magalu_data,
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
    async updateMagaluData(req, res) {
        const { id } = req.params;

        const {
            magalu_group_code,
            magalu_rate,
            magalu_reserve_fund,
        } = req.body;

        const new_magalu_data = {
            magalu_group_code,
            magalu_rate,
            magalu_reserve_fund
        }

        try {
            const magalu_data_founded = await Magalu.findByPk(id);

            if(!magalu_data_founded) {
                return res.status(404).json({
                    "response": "Dado não encontrado!",
                    "status_code": 404
                });
            }

            await magalu_data_founded.set(new_magalu_data);
            await magalu_data_founded.save();

            return res.status(200).json({
                "response": "Dados atualizados com sucesso!",
                "new_data": magalu_data_founded,
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
    async deleteMagaluData(req, res) {
        const { id } = req.params;

        try {
            const magalu_data_founded = await Magalu.findByPk(id);

            if(!magalu_data_founded) {
                return res.status(404).json({
                    "response": "Dado não encontrado!",
                    "status_code": 404
                });
            }

            await Magalu.destroy({ "where": { "magalu_data_id": id } });

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

export default MagaluCtrl;
