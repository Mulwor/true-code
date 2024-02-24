import { StateShema } from 'app/provider/StoreProvider';

export const getAddCommentFormText = (state: StateShema) => state.addCommentForm?.text ?? '';
export const getAddCommentFormError = (state: StateShema) => state.addCommentForm?.error;
