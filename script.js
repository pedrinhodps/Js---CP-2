function pegarInfo(){
    const qtdVinhos = prompt("Digite o número de convidados: ")
    const qtdConsumo = prompt("Informe o consumo médio por convidado (ml): ")
 
   return { qtdVinhos, qtdConsumo }
}
 
function calcularGarrafas(){
    const {qtdConsumo, qtdVinhos} = pegarInfo()
    const precoPequeno = 150
    const precoGrande = 200
 
    const totalMl = (Number(qtdVinhos) * (Number(qtdConsumo) / 1000)).toFixed(1)
 
    const vinhoPequeno = Math.ceil(totalMl / 0.75)
    const vinhoGrande = Math.ceil(totalMl / 1.5)
 
 
    const totalPequeno = (precoPequeno * vinhoPequeno).toFixed(1)
    const totalGrande = (precoGrande * vinhoGrande).toFixed(1)
 
    const vinhoPequenoObj = {
        vinhoPequeno,
        totalPequeno
    }
 
    const vinhoGrandeObj = {
        vinhoGrande,
        totalGrande
    }
 
    output(vinhoPequenoObj, vinhoGrandeObj, totalMl)
 
}
 
function output(vinhoPequenoObj, vinhoGrandeObj, totalMl){
   const outputTag = document.querySelector(".output")
 
   outputTag.innerHTML = `Sua festa terá o consumo total de ${totalMl}L e será suprida por:<br>${vinhoPequenoObj.vinhoPequeno} garrafas de 750ml com o valor total de R$${vinhoPequenoObj.totalPequeno}
   <br>
    ou por ${vinhoGrandeObj.vinhoGrande} garrafas de 1.5L com o valor total de R$${vinhoGrandeObj.totalGrande}
   <br>
 
    `
}