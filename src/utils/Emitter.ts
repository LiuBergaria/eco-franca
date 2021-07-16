import EventEmitter from 'eventemitter3';

export enum EventTypes {
  BackgroundAnim = 'BackgroundAnim',
  Placeholder = 'Placeholder',
}

export type EventPayload = {
  [EventTypes.BackgroundAnim]: {
    type: 'in' | 'out' | 'outIn';
  };
  [EventTypes.Placeholder]: undefined;
};

type EventEmit<T extends EventTypes> = (
  event: T,
  payload: EventPayload[T],
) => void;

export type EventsEmit = EventEmit<EventTypes.BackgroundAnim> &
  EventEmit<EventTypes.Placeholder>;

type EventHandler<T extends EventTypes> = (
  event: T,
  fn: (payload: EventPayload[T]) => void,
) => void;

export type EventsHandler = EventHandler<EventTypes.BackgroundAnim> &
  EventHandler<EventTypes.Placeholder>;

const eventEmitter = new EventEmitter<EventTypes>();

interface IEmitter {
  emit: EventsEmit;
  off: EventsHandler;
  on: EventsHandler;
  once: EventsHandler;
}

/**
 * To add new event types and payloads:
 * 1. Add the EventType in the EventTypes enum
 * 2. Create a payload for that in EventPayload
 * 3. Add the new EventType in both EventsEmit and EventsHandler
 */
const Emitter: IEmitter = {
  emit: (event, payload) => eventEmitter.emit(event, payload),
  off: (event, fn) => eventEmitter.off(event, fn),
  on: (event, fn) => eventEmitter.on(event, fn),
  once: (event, fn) => eventEmitter.once(event, fn),
};

Object.freeze(Emitter);

export default Emitter;
