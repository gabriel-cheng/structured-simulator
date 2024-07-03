import { default as Adms_model } from "../../models/administrators_model/index_adm.js";
const Unicoob = Adms_model.Unicoob;

class UnicoobCtrl {
    async viewAllUnicoobData(req, res) {
        try {
            const unicoob_data = await Unicoob.findAll();

            return res.status(200).json({
                "response": unicoob_data,
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
    async viewOneUnicoobData(req, res) {
        const { id } = req.params;

        try {
            const unicoob_data_finded = await Unicoob.findByPk(id);

            if(!unicoob_data_finded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            return res.status(200).json({
                "response": unicoob_data_finded,
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
    async addNewUnicoobData(req, res) {
        const data = req.body;

        const new_unicoob_data = {
            unicoob_group_code: data.unicoob_group_code,
            unicoob_rate: data.unicoob_rate,
            unicoob_reserve_fund: data.unicoob_reserve_fund
        };

        try {
            await Unicoob.create(new_unicoob_data);

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
    async updateUnicoobData(req, res) {
        const { id } = req.params;

        const {
            unicoob_group_code,
            unicoob_rate,
            unicoob_reserve_fund,
        } = req.body;

        const new_unicoob_data = {
            unicoob_group_code,
            unicoob_rate,
            unicoob_reserve_fund
        }

        try {
            const unicoob_data_founded = await Unicoob.findByPk(id);

            if(!unicoob_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await unicoob_data_founded.set(new_unicoob_data);
            await unicoob_data_founded.save();

            return res.status(200).json({
                "response": "Grupo atualizado com sucesso!",
                "new_data": unicoob_data_founded,
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
    async deleteUnicoobData(req, res) {
        const { id } = req.params;

        try {
            const unicoob_data_founded = await Unicoob.findByPk(id);

            if(!unicoob_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await Unicoob.destroy({ "where": { "unicoob_data_id": id } });

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

export default UnicoobCtrl;
