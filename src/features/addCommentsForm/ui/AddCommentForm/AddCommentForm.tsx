import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/libs/classNames/classNames';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import style from './AddCommentForm.module.scss';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(style.AddCommentForm, {}, [className])}>
        <Input
          className={style.input}
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
