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

