import style from './card.module.css';
import PropTypes from 'prop-types';


export function Card({tarea}) {
  return (
    <li className={style.taskCard}>
        {tarea}
    </li>
    )
};

Card.propTypes = {
    tarea: PropTypes.string.isRequired,
};