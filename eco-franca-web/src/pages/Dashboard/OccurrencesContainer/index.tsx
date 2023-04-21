import { IOccurrence } from '..';
import OccurrenceCard from '../../../components/OccurrenceCard';
import { Container, Content, NoOccurrencesMessage } from './styles';

interface IProps {
  occurrences: IOccurrence[];
}

const OccurrencesContainer = ({ occurrences }: IProps): JSX.Element => {
  return (
    <Container>
      <Content>
        {occurrences.map(occurrence => (
          <OccurrenceCard key={occurrence.id} data={occurrence} />
        ))}
      </Content>

      {occurrences.length === 0 && (
        <NoOccurrencesMessage>
          Nenhuma ocorrência encontrada com os parâmetros selecionados
        </NoOccurrencesMessage>
      )}
    </Container>
  );
};

export default OccurrencesContainer;
