import Image from "next/image"
import Link from 'next/link'
import styles from 'app/sass/not-found.module.sass'

export default function NotFound() {
  return (
    <main className={styles.NotFound}>
      <h1 className={styles.NotFound__title}>404</h1>
      <Image
        src="/images/404.png"
        alt="Page not found"
        width={500}
        height={500}
      />
      <h2 className={styles.NotFound__subtitle}>
        Uy... Algo anda mal!
      </h2>
      <p className={styles.NotFound__description}>Explora la tienda para encontrar lo que buscas!</p>
      <Link className={styles.NotFound__link} href="/store">
        Intentalo de nuevo
      </Link>
    </main>
  )
}
