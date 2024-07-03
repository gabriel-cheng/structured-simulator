import { default as Adms_model } from "../../models/administrators_model/index_adm.js";
const Recon = Adms_model.Recon;

class ReconCtrl {
    async viewAllReconData(req, res) {
        try {
            const recon_data = await Recon.findAll();

            return res.status(200).json({
                "response": recon_data,
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
    async viewOneReconData(req, res) {
        const { id } = req.params;

        try {
            const recon_data_finded = await Recon.findByPk(id);

            if(!recon_data_finded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            return res.status(200).json({
                "response": recon_data_finded,
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
    async addNewReconData(req, res) {
        const data = req.body;

        const new_recon_data = {
            recon_group_code: data.recon_group_code,
            recon_rate: data.recon_rate,
            recon_reserve_fund: data.recon_reserve_fund
        };

        try {
            await Recon.create(new_recon_data);

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
    async updateReconData(req, res) {
        const { id } = req.params;

        const {
            recon_group_code,
            recon_rate,
            recon_reserve_fund,
        } = req.body;

        const new_recon_data = {
            recon_group_code,
            recon_rate,
            recon_reserve_fund
        }

        try {
            const recon_data_founded = await Recon.findByPk(id);

            if(!recon_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await recon_data_founded.set(new_recon_data);
            await recon_data_founded.save();

            return res.status(200).json({
                "response": "Grupo atualizado com sucesso!",
                "new_data": recon_data_founded,
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": "Bad request",
                "status_code": 400
            });
        }
    }
    async deleteReconData(req, res) {
        const { id } = req.params;

        try {
            const recon_data_founded = await Recon.findByPk(id);

            if(!recon_data_founded) {
                return res.status(404).json({
                    "response": "Grupo não encontrado!",
                    "status_code": 404
                });
            }

            await Recon.destroy({ "where": { "recon_data_id": id } });

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

export default ReconCtrl;
