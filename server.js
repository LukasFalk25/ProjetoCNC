//objeto literal
const material = {
    "p": {
        "vc": 190,
        "fz": 0.15,
    },

    "m": {
        "vc": 150,
        "fz": 0.12,
    }
}
//ex:
//material.p.vc = 190

class Material {
    constructor(d,z) {
        this.d = d;
        this.z = z;
    }

    CalculaAv(mat) {
        const vc = material[mat].vc;
        const fz = material[mat].fz;

        const n = Math.round(vc * 1000 / (3.14 * this.d));
        const vf = Math.round(n * fz * this.z);

        return [n, vf];
    }
}

const test = new Material(10, 4);

console.log(test.CalculaAv("m"))