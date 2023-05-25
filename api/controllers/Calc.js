//objeto literal
const mat = {
    "p": {
        "vc": 190,
        "fz": 0.15,
    },

    "m": {
        "vc": 150,
        "fz": 0.12,
    }
}

const controllerCalculo = (req, res) => {
    const { diametro, nArestas, material } = req.body;

    const { vc, fz } = mat[material];

    const n = Math.round(vc * 1000 / (3.14 * diametro));
    const vf = Math.round(n * fz * nArestas);

    res.json({n, vf});
}

module.exports = controllerCalculo;