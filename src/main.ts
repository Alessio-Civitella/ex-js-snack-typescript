function stampaValore(dato: any): void {
  if (typeof dato === "string") {
    console.log(dato.toUpperCase());
  } else if (typeof dato === "number") {
    console.log(dato * 2);
  } else if (typeof dato === "boolean") {
    console.log(dato ? "Sì" : "No");
  } else {
    console.log("Tipo non supportato");
  }
};

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
};


const mario: Dipendente = {
  nome: "Mario",
  cognome: "Rossi",
  annoNascita: 1985,
  sesso: "m",
  anniDiServizio: [2014, 2015, 2017, 2018]
};

console.log(mario);

type Developer = Dipendente & {
  ruolo: "Developer";
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  linguaggi?: string[]; // opzionale
  certificazioni: string[];
};

type ProjectManager = Dipendente & {
  ruolo: "ProjectManager";
  teamSize: number | null;
  budgetGestito?: number; // opzionale
  stakeholderPrincipali: string[];
};

const dev1: Developer = {
  ruolo: "Developer",
  nome: "Luca",
  cognome: "Bianchi",
  annoNascita: 1990,
  sesso: "m",
  anniDiServizio: [2020, 2021, 2022],
  livelloEsperienza: "Mid",
  linguaggi: ["TypeScript", "Python"],
  certificazioni: ["AWS Certified Developer"]
};

const pm1: ProjectManager = {
  ruolo: "ProjectManager",
  nome: "Sara",
  cognome: "Verdi",
  annoNascita: 1982,
  sesso: "f",
  anniDiServizio: [2015, 2016, 2017, 2018, 2019],
  teamSize: null,
  stakeholderPrincipali: []
};

console.log(dev1);
console.log(pm1);

