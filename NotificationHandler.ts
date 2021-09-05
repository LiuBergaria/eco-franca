/* eslint-disable no-console */
import PushNotification, {
  PushNotificationObject,
  ReceivedNotification,
} from 'react-native-push-notification';

type TOnNotificationHandler = (
  notification: Omit<ReceivedNotification, 'userInfo'>,
) => void;

type TOnRegisterHandler = (token: { os: string; token: string }) => void;

class NotificationHandler {
  _onNotification?: TOnNotificationHandler;
  _onRegister?: TOnRegisterHandler;

  onNotification: TOnNotificationHandler = (notification) => {
    console.log('NotificationHandler:', notification);

    if (typeof this._onNotification === 'function') {
      this._onNotification(notification);
    }
  };

  onRegister: TOnRegisterHandler = (token) => {
    console.log('NotificationHandler:', token);

    if (typeof this._onRegister === 'function') {
      this._onRegister(token);
    }
  };

  onAction = (notification: ReceivedNotification): void => {
    console.log('Notification action received:');
    console.log(notification);

    PushNotification.invokeApp(notification as PushNotificationObject);
  };

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRegistrationError = (err: any): void => {
    console.log(err);
  };

  attachOnRegisterHandler(handler: TOnRegisterHandler): void {
    this._onRegister = handler;
  }

  attachOnNotificationHandler(handler: TOnNotificationHandler): void {
    this._onNotification = handler;
  }
}

const handler = new NotificationHandler();

PushNotification.configure({
  onRegister: handler.onRegister,
  onNotification: handler.onNotification,
  onAction: handler.onAction,
  onRegistrationError: handler.onRegistrationError,
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

export default handler;
