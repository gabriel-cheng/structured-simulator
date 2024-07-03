import { default as Adms_model } from "../../models/administrators_model/index_adm.js";
const Gazin = Adms_model.Gazin;

class GazinCtrl {
    async viewAllGazinData(req, res) {
        try {
            const gazin_data = await Gazin.findAll();

            return res.status(200).json({
                "response": gazin_data,
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
    async viewOneGazinData(req, res) {
        const { id } = req.params;

        try {
            const gazin_data_finded = await Gazin.findByPk(id);

            if(!gazin_data_finded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            return res.status(200).json({
                "response": gazin_data_finded,
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
    async addNewGazinData(req, res) {
        const data = req.body;

        const new_gazin_data = {
            gazin_group_code: data.gazin_group_code,
            gazin_rate: data.gazin_rate,
            gazin_reserve_fund: data.gazin_reserve_fund
        };

        try {
            Gazin.create(new_gazin_data);

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
    async updateGazinData(req, res) {
        const { id } = req.params;

        const {
            gazin_group_code,
            gazin_rate,
            gazin_reserve_fund,
        } = req.body;

        const new_gazin_data = {
            gazin_group_code,
            gazin_rate,
            gazin_reserve_fund
        }

        try {
            const gazin_data_founded = await Gazin.findByPk(id);

            if(!gazin_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await gazin_data_founded.set(new_gazin_data);
            await gazin_data_founded.save();

            return res.status(200).json({
                "response": "Grupo atualizado com sucesso!",
                "new_data": gazin_data_founded,
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
    async deleteGazinData(req, res) {
        const { id } = req.params;

        try {
            const gazin_data_founded = await Gazin.findByPk(id);

            if(!gazin_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await Gazin.destroy({ "where": { "gazin_data_id": id } });

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

export default GazinCtrl;
