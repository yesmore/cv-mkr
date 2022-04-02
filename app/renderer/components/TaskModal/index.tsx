/**
 * @description 所有弹窗组件集合
 *
 * import TaskModal from '@components/TaskModal';
 * <TaskModal.Confirm />
 *
 * or
 * import { Confirm } from '@components/TaskModal';
 * <Confirm />
 */
import TaskDialog from './TaskDialog';
import TaskConfirm from './TaskConfirm';

export const Dialog = TaskDialog;
export const Confirm = TaskConfirm;

export default {
  Dialog: TaskDialog,
  Confirm: TaskConfirm,
};
