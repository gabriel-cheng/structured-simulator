import { default as Adms_model } from "../../models/administrators_model/index_adm.js";
const Embracon = Adms_model.Embracon;

class EmbraconCtrl {
    async viewAllEmbraconData(req, res) {
        try {
            const embracon_data = await Embracon.findAll();

            return res.status(200).json({
                "response": embracon_data,
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
    async viewOneEmbraconData(req, res) {
        const { id } = req.params;

        try {
            const embracon_data_finded = await Embracon.findByPk(id);

            if(!embracon_data_finded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            return res.status(200).json({
                "response": embracon_data_finded,
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
    async addNewEmbraconData(req, res) {
        const data = req.body;

        const new_embracon_data = {
            embracon_group_code: data.embracon_group_code,
            embracon_rate: data.embracon_rate,
            embracon_reserve_fund: data.embracon_reserve_fund
        };

        try {
            await Embracon.create(new_embracon_data);

            return res.status(201).json({
                "response": "Grupo adicionado com sucesso!",
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
    async updateEmbraconData(req, res) {
        const { id } = req.params;

        const {
            embracon_group_code,
            embracon_rate,
            embracon_reserve_fund,
        } = req.body;

        const new_embracon_data = {
            embracon_group_code,
            embracon_rate,
            embracon_reserve_fund
        }

        try {
            const embracon_data_founded = await Embracon.findByPk(id);

            if(!embracon_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await embracon_data_founded.set(new_embracon_data);
            await embracon_data_founded.save();

            return res.status(200).json({
                "response": "Grupo atualizado com sucesso!",
                "new_data": embracon_data_founded,
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
    async deleteEmbraconData(req, res) {
        const { id } = req.params;

        try {
            const embracon_data_founded = await Embracon.findByPk(id);

            if(!embracon_data_founded) {
                return res.status(404).json({
                    "response": "Grupos não encontrado!",
                    "status_code": 404
                });
            }

            await Embracon.destroy({ "where": { "embracon_data_id": id } });

            return res.status(200).json({
                "response": "Grupo deletado com sucesso!",
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

export default EmbraconCtrl;
