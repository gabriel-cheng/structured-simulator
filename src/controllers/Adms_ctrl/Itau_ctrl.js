import { default as Adms_model } from "../../models/administrators_model/index_adm.js";
const Itau = Adms_model.Itau;

class ItauCtrl {
    async viewAllItauData(req, res) {
        try {
            const itau_data = await Itau.findAll();

            return res.status(200).json({
                "response": itau_data,
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
    async viewOneItauData(req, res) {
        const { id } = req.params;

        try {
            const itau_data_finded = await Itau.findByPk(id);

            if(!itau_data_finded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            return res.status(200).json({
                "response": itau_data_finded,
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
    async addNewItauData(req, res) {
        const data = req.body;

        const new_itau_data = {
            itau_group_code: data.itau_group_code,
            itau_rate: data.itau_rate,
            itau_reserve_fund: data.itau_reserve_fund
        };

        try {
            await Itau.create(new_itau_data);

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
    async updateItauData(req, res) {
        const { id } = req.params;

        const {
            itau_group_code,
            itau_rate,
            itau_reserve_fund,
        } = req.body;

        const new_itau_data = {
            itau_group_code,
            itau_rate,
            itau_reserve_fund
        }

        try {
            const itau_data_founded = await Itau.findByPk(id);

            if(!itau_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await itau_data_founded.set(new_itau_data);
            await itau_data_founded.save();

            return res.status(200).json({
                "response": "Grupo atualizado com sucesso!",
                "new_data": itau_data_founded,
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
    async deleteItauData(req, res) {
        const { id } = req.params;

        try {
            const itau_data_founded = await Itau.findByPk(id);

            if(!itau_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await Itau.destroy({ "where": { "itau_data_id": id } });

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

export default ItauCtrl;
