import SystemGeneralLogicSv from "../services/System_general_logic_sv.js";
const system = new SystemGeneralLogicSv();

class SimulatorCtrl {
    index(req, res) {
        return res.render("simulator_view/simulator");
    }
    simulate(req, res) {
        try {
            const data = JSON.parse(JSON.stringify(req.body));

            const sim_grupos_sugeridos = data.sim_grupos_sugeridos;
            const sim_taxa_adm = data.sim_taxa_adm / 100;
            const sim_fundo_reserva = data.sim_fundo_reserva / 100;
            const sim_prazo = data.sim_prazo;
            const sim_cotas = data.sim_cotas;
            const sim_carta_credito_unitaria = data.sim_carta_credito_unitaria;
            const sim_lance_recu_prop_percent = data.sim_lance_recu_prop_percent / 100;
            const sim_lance_embutido_percent = data.sim_lance_embutido_percent / 100;

            const cartaCreditoTotal = system.cartaCreditoTotal(
                sim_carta_credito_unitaria, sim_cotas
            );

            const parcelaInicialUnitaria = Math.round(system.parcelaInicialUnitaria(
                sim_carta_credito_unitaria, sim_taxa_adm,
                sim_fundo_reserva, sim_prazo
            ));

            const valorParcelaComSeguro = Math.round(system.valorParcelaComSeguro(
                parcelaInicialUnitaria, sim_prazo
            ));

            const parcelaInicialTotal = system.parcelaInicialTotal(
                parcelaInicialUnitaria, sim_cotas
            );

            const parcelaComSeguroTotal = system.parcelaComSeguroTotal(
                valorParcelaComSeguro, sim_cotas
            );

            const lanceRecursosPropriosValorLanceLivre = Math.round(system.lanceRecursosPropriosValorLanceLivre(
                sim_lance_recu_prop_percent, sim_carta_credito_unitaria,
                sim_taxa_adm, sim_fundo_reserva
            ));

            const lanceRecursosPropriosValor = system.lanceRecursosPropriosValor(
                lanceRecursosPropriosValorLanceLivre, sim_cotas
            );

            const lanceEmbutidoValorLanceLivre = Math.floor(system.lanceEmbutidoValorLanceLivre(
                sim_lance_embutido_percent, sim_carta_credito_unitaria, sim_taxa_adm, sim_fundo_reserva
            ));

            const lanceEmbutidoValor = system.lanceEmbutidoValor(
                lanceEmbutidoValorLanceLivre, sim_cotas
            );

            const lanceTotal = system.lanceTotal(
                sim_lance_recu_prop_percent * 100, sim_lance_embutido_percent * 100
            );

            const creditoDisponivelTotal = system.creditoDisponivelTotal(
                cartaCreditoTotal, lanceEmbutidoValor
            );

            const parcelaPosContemplacaoSemSeguro = Math.round(system.parcelaPosContemplacaoSemSeguro(
                sim_carta_credito_unitaria, sim_taxa_adm, sim_fundo_reserva, lanceRecursosPropriosValorLanceLivre, lanceEmbutidoValorLanceLivre, parcelaInicialUnitaria, sim_prazo
            ));

            const parcelaPosContemplacaoComSeguro = Math.round(system.parcelaPosContemplacaoComSeguro(
                parcelaPosContemplacaoSemSeguro, sim_prazo
            ));

            const parcelaTotalPosContemplacao = system.parcelaTotalPosContemplacao(
                parcelaPosContemplacaoSemSeguro, sim_cotas
            );

            const simulation = {
                sim_grupos_sugeridos,
                sim_taxa_adm,
                sim_fundo_reserva,
                sim_prazo,
                sim_cotas,
                sim_carta_credito_unitaria,
                sim_lance_recu_prop_percent,
                sim_lance_embutido_percent,
                cartaCreditoTotal,
                parcelaInicialUnitaria,
                valorParcelaComSeguro,
                parcelaInicialTotal,
                parcelaComSeguroTotal,
                lanceRecursosPropriosValorLanceLivre,
                lanceRecursosPropriosValor,
                lanceEmbutidoValorLanceLivre,
                lanceEmbutidoValor,
                lanceTotal,
                creditoDisponivelTotal,
                parcelaPosContemplacaoSemSeguro,
                parcelaPosContemplacaoComSeguro,
                parcelaTotalPosContemplacao
            };

            return res.status(200).json({ "data": simulation });
        } catch(error) {
            console.log(error);

            return res.status(400).json({
                "message": "Bad request",
                "status_code": 400
            });
        }
    }
}

export default SimulatorCtrl;
