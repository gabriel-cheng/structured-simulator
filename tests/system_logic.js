import SystemGeneralLogicSv from "../src/services/System_general_logic_sv.js";
const system = new SystemGeneralLogicSv();

class SystemLogicTest {
    __init__() {
        const sim_grupos_sugeridos_C9 = 5025;
        const sim_taxa_adm_D9 = 13 / 100;
        const sim_fundo_reserva_E9 = 6 / 100;
        const sim_prazo_F9 = 70;
        const sim_cotas_G9 = 1;
        const sim_carta_credito_unitaria_H9 = 300000;
        const cartaCreditoTotal = 300000;
        const parcelaInicialUnitaria = 5100;
        const valorParcelaComSeguro = 5254;
        const sim_lance_recu_prop_percent_N9 = 10 / 100;
        const lanceRecursosPropriosValorLanceLivre = 34000;
        const sim_lance_embutido_percent_Q9 = 30 / 100;
        const lanceEmbutidoValorLanceLivre = 102000;
        const lanceEmbutidoValor = 102000;
        const parcelaPosContemplacaoSemSeguro = 3129;

        this.cartaCreditoTotal(
            sim_carta_credito_unitaria_H9, sim_cotas_G9
        );

        this.parcelaInicialUnitaria(
            sim_carta_credito_unitaria_H9, sim_taxa_adm_D9,
            sim_fundo_reserva_E9, sim_prazo_F9
        );

        this.valorParcelaComSeguro(
            parcelaInicialUnitaria, sim_prazo_F9
        );

        this.parcelaInicialTotal(
            parcelaInicialUnitaria, sim_cotas_G9
        );

        this.parcelaComSeguroTotal(
            valorParcelaComSeguro, sim_cotas_G9
        );

        this.lanceRecursosPropriosValorLanceLivre(
            sim_lance_recu_prop_percent_N9, sim_carta_credito_unitaria_H9,
            sim_taxa_adm_D9, sim_fundo_reserva_E9
        );

        this.lanceRecursosPropriosValor(
            lanceRecursosPropriosValorLanceLivre, sim_cotas_G9
        );

        this.lanceEmbutidoValorLanceLivre(
            sim_lance_embutido_percent_Q9, sim_carta_credito_unitaria_H9, sim_taxa_adm_D9, sim_fundo_reserva_E9
        );

        this.lanceEmbutidoValor(
            lanceEmbutidoValorLanceLivre, sim_cotas_G9
        );

        this.lanceTotal(
            sim_lance_recu_prop_percent_N9, sim_lance_embutido_percent_Q9
        );

        this.creditoDisponivelTotal(
            cartaCreditoTotal, lanceEmbutidoValor
        );

        this.parcelaTotalPosContemplacao(
            parcelaPosContemplacaoSemSeguro, sim_cotas_G9
        );
    }
    cartaCreditoTotal(sim_carta_credito_unitaria_H9, sim_cotas_G9) {
        const method = system.cartaCreditoTotal(sim_carta_credito_unitaria_H9, sim_cotas_G9);

        console.log(`Carta credito total: ${method}`);
    }
    parcelaInicialUnitaria(
        sim_carta_credito_unitaria_H9, sim_taxa_adm_D9, sim_fundo_reserva_E9, sim_prazo_F9
    ) {
        const method = system.parcelaInicialUnitaria(
            sim_carta_credito_unitaria_H9, sim_taxa_adm_D9, sim_fundo_reserva_E9, sim_prazo_F9
        );

        console.log(`Parcela inicial unitaria: ${method}`);
    }
    valorParcelaComSeguro(parcelaInicialUnitaria, sim_prazo_F9) {
        const method = system.valorParcelaComSeguro(
            parcelaInicialUnitaria, sim_prazo_F9
        );

        console.log(`Valor parcela c/ seguro: ${method}`);
    }
    parcelaInicialTotal(parcelaInicialUnitaria, sim_cotas_G9) {
        const method = system.parcelaInicialTotal(
            parcelaInicialUnitaria, sim_cotas_G9
        );

        console.log(`Parcela inicial total: ${method}`);
    }
    parcelaComSeguroTotal(valorParcelaComSeguro, sim_cotas_G9) {
        const method = system.parcelaComSeguroTotal(
            valorParcelaComSeguro, sim_cotas_G9
        );

        console.log(`Parcela com seguro total: ${method}`);
    }
    lanceRecursosPropriosValorLanceLivre(sim_lance_recu_prop_percent_N9, sim_carta_credito_unitaria_H9, sim_taxa_adm_D9, sim_fundo_reserva_E9) {
        const method = system.lanceRecursosPropriosValorLanceLivre(
            sim_lance_recu_prop_percent_N9, sim_carta_credito_unitaria_H9, sim_taxa_adm_D9,
            sim_fundo_reserva_E9
        );

        console.log(`Lance recursos proprios - valor lance livre: ${method}`);
    }
    lanceRecursosPropriosValor(lanceRecursosPropriosValorLanceLivre, sim_cotas_G9) {
        const method = system.lanceRecursosPropriosValor(
            lanceRecursosPropriosValorLanceLivre, sim_cotas_G9
        );

        console.log(`Lance recursos proprios - valor: ${method}`);
    }
    lanceEmbutidoValorLanceLivre(sim_lance_embutido_percent_Q9, sim_carta_credito_unitaria_H9, sim_taxa_adm_D9, sim_fundo_reserva_E9) {
        const method = system.lanceEmbutidoValorLanceLivre(
            sim_lance_embutido_percent_Q9, sim_carta_credito_unitaria_H9, sim_taxa_adm_D9,
            sim_fundo_reserva_E9
        );

        console.log(`Lance embutido - valor lance livre: ${method}`);
    }
    lanceEmbutidoValor(lanceEmbutidoValorLanceLivre, sim_cotas_G9) {
        const method = system.lanceEmbutidoValor(
            lanceEmbutidoValorLanceLivre, sim_cotas_G9
        );

        console.log(`Lance embutido - valor: ${method}`);
    }
    lanceTotal(sim_lance_recu_prop_percent_N9, sim_lance_embutido_percent_Q9) {
        const method = system.lanceTotal(
            sim_lance_recu_prop_percent_N9, sim_lance_embutido_percent_Q9
        );

        console.log(`Lance total: ${method}`);
    }
    creditoDisponivelTotal(cartaCreditoTotal, lanceEmbutidoValor) {
        const method = system.creditoDisponivelTotal(
            cartaCreditoTotal, lanceEmbutidoValor
        );

        console.log(`Credito disponivel total: ${method}`);
    }
    parcelaTotalPosContemplacao(parcelaPosContemplacaoSemSeguro, sim_cotas_G9) {
        const method = system.parcelaTotalPosContemplacao(
            parcelaPosContemplacaoSemSeguro, sim_cotas_G9
        );

        console.log(`Parcela total apos contemplacao: ${method}`);
    }
}

export default SystemLogicTest;
