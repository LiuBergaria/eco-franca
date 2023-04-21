import OccurrenceTypes from 'src/enums/OccurrenceTypes';

interface IInformation {
  title: string;
  icon: string;
}

const getOccurrenceTypeInformation = (type: OccurrenceTypes): IInformation => {
  switch (type) {
    case OccurrenceTypes.DescarteIrregularDeResiduos:
      return { title: 'Descarte irregular de resíduos', icon: 'dumpster' };
    case OccurrenceTypes.Desmatamento:
      return { title: 'Desmatamento', icon: 'tree' };
    case OccurrenceTypes.LoteamentoIrregular:
      return { title: 'Loteamento irregular', icon: 'house-damage' };
    case OccurrenceTypes.UsoIndevidoDeAreaPublica:
      return {
        title: 'Uso indevido de área pública',
        icon: 'exclamation-triangle',
      };
    case OccurrenceTypes.MausTratosContraAnimais:
      return { title: 'Maus tratos contra animais', icon: 'dog' };
    case OccurrenceTypes.AbandonoDeAnimais:
      return { title: 'Abandono de animais', icon: 'horse' };
  }
};

export default getOccurrenceTypeInformation;
