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
}
