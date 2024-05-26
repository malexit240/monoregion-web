import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { popupActions } from '../../features/popup';
import { Popup } from './Popup';

import styles from './ToastPopup.module.scss'

export function ModalContainer() {
  const list = useAppSelector(s => s.popup.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      const lastId = list[list.length - 1]?.id;
      if (lastId > 0) {
        dispatch(popupActions.removeItem(lastId));
      }
    }, 3000);
  }, [list]);

  return <div className={styles['modal-container']}>
    {list.map(i => <Popup
      key={i.id}
      title={i.title}
      content={i.content}
      type={i.type}
    />)}
  </div>;
}
