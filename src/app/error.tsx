"use client"
import Image from 'next/image'
import styles from 'app/sass/global-error.module.sass'


export default function GlobalError({reset}: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1  className={styles.Error__title}>Ha Ocurrido un error</h1>
      <Image
        src="/images/error.png"
        alt="Error"
        width={500}
        height={500}
      />
      <p  className={styles.Error__message}>Ha ocurrido un error intentelo mas tarde</p>
      <button  className={styles.Error__button} onClick={reset}>Volver a Intentar</button>
    </main>
  )
}
