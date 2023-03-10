import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={css.notif}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
