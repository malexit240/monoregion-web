import styles from './ToastPopup.module.scss'

export type Props = {
  title: string,
  content: string,
  type: string,
};

export function Popup(props: Props) {
  return <article className={`${styles['popup']} ${styles[`popup-${props.type}`]}`}>

    <h2>{props.title}</h2>
    <p>{props.content}</p>

  </article>;
}
