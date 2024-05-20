class SystemGeneralLogicSv {
    __index__({
        sim_grupos_sugeridos_C9, sim_taxa_adm_D9, sim_fundo_reserva_E9, sim_prazo_F9,
        sim_cotas_G9, sim_carta_credito_unitaria_H9, sim_lance_recu_prop_percent_N9, sim_lance_embutido_percent_Q9
    }) {

    }
    cartaCreditoTotal(sim_carta_credito_unitaria_H9, sim_cotas_G9) {
        const total = sim_carta_credito_unitaria_H9 * sim_cotas_G9

        return total;
    }
    parcelaInicialUnitaria(
        sim_carta_credito_unitaria_H9, sim_taxa_adm_D9, sim_fundo_reserva_E9, sim_prazo_F9
    ) {
        try {
            const somaD_E = sim_taxa_adm_D9 + sim_fundo_reserva_E9;
            const multiplicador = 1 + somaD_E;
            const numerador = sim_carta_credito_unitaria_H9 * multiplicador;
            const resultado = numerador / sim_prazo_F9;

            if(!isFinite(resultado)) {
                throw new Error("Resultado não finito");
            }

            return resultado;
        } catch(error) {
            return "-";
        }


    }
    valorParcelaComSeguro(parcelaInicialUnitaria, sim_prazo_F9) {
        try {
            const soma = parcelaInicialUnitaria * (1 + sim_prazo_F9 * (0.0431 / 100));
            const resultado = soma;

            if(!isFinite(resultado)) {
                throw new Error("Resultado não finito");
            }

            return resultado;
        } catch(error) {
            return "-";
        }
    }
    parcelaInicialTotal(parcelaInicialUnitaria, sim_cotas_G9) {
        try {
            const resultado = parcelaInicialUnitaria * sim_cotas_G9;

            if(!isFinite(resultado)) {
                throw new Error("Resultado não finito");
            }

            return resultado;
        } catch(error) {
            return "-";
        }
    }
    parcelaComSeguroTotal(valorParcelaComSeguro, sim_cotas_G9) {
        try {
            const resultado = valorParcelaComSeguro * sim_cotas_G9;

            if(!isFinite(resultado)) {
                throw new Error("Resultado não finito");
            }

            return resultado;
        } catch(error) {
            return "-";
        }
    }
    lanceRecursosPropriosValorLanceLivre(sim_lance_recu_prop_percent_N9, sim_carta_credito_unitaria_H9, sim_taxa_adm_D9, sim_fundo_reserva_E9, Q1 = 0.952381423080109) {
        try {
            const soma_inicial = ((1 + sim_taxa_adm_D9) + sim_fundo_reserva_E9);
            const multiplicacao_secundaria = sim_carta_credito_unitaria_H9 * soma_inicial;
            const multiplicacao_terciaria = sim_lance_recu_prop_percent_N9 * multiplicacao_secundaria;
            const multiplicacao_final = multiplicacao_terciaria * Q1;

            const resultado = multiplicacao_final;

            if(!isFinite(resultado)) {
               throw new Error("resultado não finito");
            }

            return resultado;
        } catch(error) {
            return "-";
        }
    }
    lanceRecursosPropriosValor(lanceRecursosPropriosValorLanceLivre, sim_cotas_G9) {
        const soma = lanceRecursosPropriosValorLanceLivre * sim_cotas_G9;
        const resultado = soma;

        return soma;
    }
    lanceEmbutidoValorLanceLivre(sim_lance_embutido_percent_Q9, sim_carta_credito_unitaria_H9, sim_taxa_adm_D9, sim_fundo_reserva_E9, Q1 = 0.952381423080109) {
        try {
            const soma_inicial = ((1 + sim_taxa_adm_D9) + sim_fundo_reserva_E9);
            const multiplicacao_secundaria = sim_carta_credito_unitaria_H9 * soma_inicial;
            const multiplicacao_terciaria = sim_lance_embutido_percent_Q9 * multiplicacao_secundaria;
            const multiplicacao_final = multiplicacao_terciaria * Q1;

            const resultado = multiplicacao_final;

            if(!isFinite(resultado)) {
               throw new Error("resultado não finito");
            }

            return resultado;
        } catch(error) {
            return "-";
        }
    }
    lanceEmbutidoValor(lanceEmbutidoValorLanceLivre, sim_cotas_G9) {
        const soma = lanceEmbutidoValorLanceLivre * sim_cotas_G9;
        const resultado = soma;

        return resultado;
    }
    lanceTotal(sim_lance_recu_prop_percent_N9, sim_lance_embutido_percent_Q9) {
        const soma = sim_lance_recu_prop_percent_N9 + sim_lance_embutido_percent_Q9;
        const resultado = soma;

        return resultado;
    }
    creditoDisponivelTotal(cartaCreditoTotal, lanceEmbutidoValor) {
        const soma = cartaCreditoTotal - lanceEmbutidoValor;
        const resultado = soma;

        return resultado;
    }
    parcelaPosContemplacaoSemSeguro() {

    }
    parcelaPosContemplacaoComSeguro() {

    }
    parcelaTotalPosContemplacao(parcelaPosContemplacaoSemSeguro, sim_cotas_G9) {
        try {
            const soma = parcelaPosContemplacaoSemSeguro * sim_cotas_G9;
            const resultado = soma;

            return resultado;
        } catch(error) {
            return "-";
        }
    }
}

export default SystemGeneralLogicSv;
