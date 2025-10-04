import { EventEmitter } from 'events';
import { AuthError, FirestorePermissionError } from './errors';

type Events = {
  'permission-error': (error: FirestorePermissionError) => void;
  'auth-error': (error: AuthError) => void;
};

class ErrorEventEmitter extends EventEmitter {
  emit<T extends keyof Events>(event: T, ...args: Parameters<Events[T]>) {
    return super.emit(event, ...args);
  }

  on<T extends keyof Events>(event: T, listener: Events[T]) {
    return super.on(event, listener);
  }
}

export const errorEmitter = new ErrorEventEmitter();
