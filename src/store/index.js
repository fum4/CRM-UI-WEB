import store from './store';
import {
  appointmentsSlice,
  fetchAppointments,
  insertAppointment,
  editAppointment,
  removeAppointment
} from './appointmentsSlice';
import {
  clientsSlice,
  fetchClients,
  insertClient,
  editClient,
  removeClient
} from './clientsSlice';
import {
  notificationsSlice,
  addNotification
} from './notificationsSlice';
import {
  useClients,
  useAppointments,
} from './selectors';

export {
  store,
  notificationsSlice,
  appointmentsSlice,
  clientsSlice,
  fetchAppointments,
  fetchClients,
  insertAppointment,
  insertClient,
  editAppointment,
  editClient,
  removeAppointment,
  removeClient,
  addNotification,
  useClients,
  useAppointments
};
