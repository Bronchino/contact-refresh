

## Aggiunta pulsante "Cancella" al calcolatore

### Cosa cambia
Aggiungere un piccolo pulsante di reset (es. icona X o testo "Cancella") accanto al campo data o sotto i risultati, che riporta il calcolatore allo stato iniziale svuotando la data selezionata.

### Dettaglio tecnico
In `src/pages/blog/PrimaEcografia.tsx`:
- Aggiungere un pulsante visibile solo quando `lmpDate` è definita
- Al click, esegue `setLmpDate(undefined)` per ripulire data e risultati
- Posizionato accanto al selettore data, con stile discreto (es. variante `ghost` o `outline`)

