const form = document.querySelector(".form-container");
const diametroIn = document.querySelector("#diametro-ferramenta");
const numeroArestasIn = document.querySelector("#numero-arestas");
const materialSelect = document.querySelector("#material");
const resultadoH3 = document.querySelector("#resultado");

const url = "http://localhost:4000";


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const [diametro, nArestas, material] = [
        diametroIn.value,
        numeroArestasIn.value,
        materialSelect.value,
    ];

    const response = await fetch(`${url}/calcular`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ diametro, nArestas, material }),
    });

    const { n, vf } = await response.json();

    resultadoH3.innerText = `N: ${n} / VF: ${vf}`;
})