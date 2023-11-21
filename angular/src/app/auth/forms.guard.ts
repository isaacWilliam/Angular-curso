import { CanDeactivateFn } from '@angular/router';
import {AlteracaoForm} from "../interfaces/alteracao-form";

export const formsGuard: CanDeactivateFn<AlteracaoForm> = (component, currentRoute, currentState, nextState) => {
  return component.possuiAlteracao();
};
