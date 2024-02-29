import styles from './Description.module.sass'
import Image from 'next/image';

export const Description = () => {
    return (
        <section className={styles.Description}>
            <Image 
                src="/images/description.jpg" 
                alt="products marketplace" 
                width={800} 
                height={550}
                priority = {false}
                quality={100}
            />
            <div>
                <h2>Descripcion</h2>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci enim quibusdam quae accusamus fugiat error quos neque libero ea sed accusantium nostrum esse, quis odit beatae voluptatum quam magni.
                    Veniam architecto voluptatem
                </p>
            </div>

        </section>
    );
}