import { Dispatch } from 'dva'
import { History } from "history";

export interface UmiComponentProps {
  history: History;
  dispatch: Dispatch;
}
