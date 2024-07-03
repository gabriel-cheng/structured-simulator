import { default as Adms_model } from "../../models/administrators_model/index_adm.js";
const Cnp = Adms_model.Cnp;

class CnpCtrl {
    async viewAllCnpData(req, res) {
        try {
            const cnp_data = await Cnp.findAll();

            return res.status(200).json({
                "response": cnp_data,
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
    async viewOneCnpData(req, res) {
        const { id } = req.params;

        try {
            const cnp_data_finded = await Cnp.findByPk(id);

            if(!cnp_data_finded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            return res.status(200).json({
                "response": cnp_data_finded,
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
    async addNewCnpData(req, res) {
        const data = req.body;

        const new_cnp_data = {
            cnp_group_code: data.cnp_group_code,
            cnp_rate: data.cnp_rate,
            cnp_reserve_fund: data.cnp_reserve_fund
        };

        try {
            await Cnp.create(new_cnp_data);

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
    async updateCnpData(req, res) {
        const { id } = req.params;

        const {
            cnp_group_code,
            cnp_rate,
            cnp_reserve_fund,
        } = req.body;

        const new_cnp_data = {
            cnp_group_code,
            cnp_rate,
            cnp_reserve_fund
        }

        try {
            const cnp_data_founded = await Cnp.findByPk(id);

            if(!cnp_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await cnp_data_founded.set(new_cnp_data);
            await cnp_data_founded.save();

            return res.status(200).json({
                "response": "Grupo atualizado com sucesso!",
                "new_data": cnp_data_founded,
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
    async deleteCnpData(req, res) {
        const { id } = req.params;

        try {
            const cnp_data_founded = await Cnp.findByPk(id);

            if(!cnp_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await Cnp.destroy({ "where": { "cnp_data_id": id } });

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

export default CnpCtrl;
