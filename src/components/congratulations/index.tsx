import { useNavigate } from 'react-router-dom';
import Button from '../button';

interface CongratulationsProps {
  turns: number;
}

export const Congratulations = ({ turns }: CongratulationsProps) => {
  const nav = useNavigate();

  return (
    <section className="congratulations">
      <p className="congratulations__title">Felicitationes!</p>
      <span className="congratulations__subtitle">Terminaste el juego en {turns} turnos</span>
      <div className="congratulations__actions">
        <Button value="Repetir" onClick={() => nav(0)} />
        <Button value="Inicio" onClick={() => nav('/')} variant="secondary" />
      </div>
    </section>
  );
};

export default Congratulations;
