import { useEffect, useRef } from 'react'
import styles from './ModalPageContainer.module.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export function ModalPageContainer() {
    const isOpen = useAppSelector(s => s.modalPage.isOpen);
    const children = useAppSelector(s => s.modalPage.children);
    const dispatch = useAppDispatch();

    let dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        }
        else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    return <dialog ref={dialogRef} className={styles['modal-page-container']}>

        {children}

    </dialog>
}