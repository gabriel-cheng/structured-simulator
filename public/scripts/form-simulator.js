const form = document.querySelector("#simulator-form");
const simulations_arr = [];

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const table_subcontainer = document.querySelector("#table-subcontainer");
    const form_target = event.target;
    const formData = new FormData(form_target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    const request = await fetch("/simulator/simulate", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    }).then(e => e.json());

    simulations_arr.push(request.data);
    console.log(simulations_arr);

    const table_element = document.createElement("table");
    table_element.className = "mb-3 table table-striped table-bordered";
    table_element.style.boxShadow = "1px 1px 5px black";
    const h4 = document.createElement("h4");

    for(let i = 0; i < simulations_arr.length; i++) {
        h4.innerText = `Simulação ${i + 1}`;

        table_subcontainer.appendChild(h4);

        table_element.innerHTML = `
            <thead>
                <tr>
                    <th rowspan="2">Grupos sugeridos</th>
                    <th rowspan="2">Taxa de ADM</th>
                    <th rowspan="2">Fundo de reserva</th>
                    <th rowspan="2">Prazo</th>
                    <th rowspan="2">Qtde. cotas</th>
                    <th colspan="2">Carta de crédito</th>
                    <th rowspan="2">Parcela inicial unitária</th>
                    <th rowspan="2">Valor da parcela c/ seguro</th>
                    <th rowspan="2">Parcela inicial total</th>
                    <th rowspan="2">Parcela c/ seguro total</th>
                    <th colspan="3">Lance recursos próprios</th>
                    <th colspan="3">Lance embutido</th>
                    <th rowspan="2">Lance total</th>
                    <th rowspan="2">Crédito disponível total</th>
                    <th rowspan="2">Parcela pós contemplação s/ seguro</th>
                    <th rowspan="2">Parcela pós contemplação c/ seguro</th>
                    <th rowspan="2">Parcela total pós contemplação</th>
                </tr>
                <tr>
                    <td>Unitária</td>
                    <td>Total</td>
                    <td>%</td>
                    <td>Lance livre</td>
                    <td>Valor</td>
                    <td>%</td>
                    <td>Lance livre</td>
                    <td>Valor</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${simulations_arr[i].sim_grupos_sugeridos}</td>
                    <td>${simulations_arr[i].sim_taxa_adm * 100}%</td>
                    <td>${simulations_arr[i].sim_fundo_reserva * 100}%</td>
                    <td>${simulations_arr[i].sim_prazo}</td>
                    <td>${simulations_arr[i].sim_cotas}</td>
                    <td>${simulations_arr[i].sim_carta_credito_unitaria}</td>
                    <td>${simulations_arr[i].cartaCreditoTotal}</td>
                    <td>${simulations_arr[i].parcelaInicialUnitaria}</td>
                    <td>${simulations_arr[i].valorParcelaComSeguro}</td>
                    <td>${simulations_arr[i].parcelaInicialTotal}</td>
                    <td>${simulations_arr[i].parcelaComSeguroTotal}</td>
                    <td>${simulations_arr[i].sim_lance_recu_prop_percent * 100}%</td>
                    <td>${simulations_arr[i].lanceRecursosPropriosValorLanceLivre}</td>
                    <td>${simulations_arr[i].lanceRecursosPropriosValor}</td>
                    <td>${simulations_arr[i].sim_lance_embutido_percent * 100}%</td>
                    <td>${simulations_arr[i].lanceEmbutidoValorLanceLivre}</td>
                    <td>${simulations_arr[i].lanceEmbutidoValor}</td>
                    <td>${simulations_arr[i].lanceTotal}%</td>
                    <td>${simulations_arr[i].creditoDisponivelTotal}</td>
                    <td>${simulations_arr[i].parcelaPosContemplacaoSemSeguro}</td>
                    <td>${simulations_arr[i].parcelaPosContemplacaoComSeguro}</td>
                    <td>${simulations_arr[i].parcelaTotalPosContemplacao}</td>
                </tr>
            </tbody>
        `;


        table_subcontainer.appendChild(table_element);
        console.log(table_element);
    }
});
