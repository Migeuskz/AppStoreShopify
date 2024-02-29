import styles from './Description.module.sass'
import Image from 'next/image';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABHAGsDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAQBAgMFBv/EACAQAQACAgEFAQEAAAAAAAAAAAABAgMRBBITIUFhMRT/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARECAxL/2gAMAwEAAhEDEQA/AOFWDWH0XrDfH4GPR0/ik1SSOOxiuRSFtMWnwVzytbIXy32FDSHL9uFzo/Xc5M725PKpvbn9Jozp5fm456pc+cU7ej5HH6t+Cv8AF5/Hk+nl1z1sdHPrHOwY53Dr8WkxEJw8TXp0MHH16N4+Vl2t16atir4a9LbHi+NO18dsJp+Kr18L9KJjTqlc30tW2l+4XmdKTc8oXo1OVlfJsvORHVs2kvQyTstkx7M/qYx7JZpftzrcffpEcX461cO/TSuD4j1waduVTi/DFOPr06NcHxeMKV5xWdEa4fi3aPRiT2wPqs1Z2qamrO9VdRJXhjc5ejC9BnRbC0prDTo8r1xnnRLEUqZx0Rjoax0N9FxFMbauNelW1altNIxjGntt+kaR6qsYdA6G2kaT1RjNVLVb6RNTa2FLUZ2xHZoicbaXCPa+JriOdsRQZQ+WFKNqVWiq0Qb6D5WrDSFITEhehnLTYV2Np2nkSgDZNHFEgKCnQ6QGBGhoBgRoaAYUAAKKYTABKyQAVn//2Q==';

export const Description = () => {
    return (
        <section className={styles.Description}>
            <div className={styles.Description__imageContainer}>
                <Image
                    src="/images/description.jpg"
                    alt="products marketplace"
                    fill
                    placeholder='blur'
                    blurDataURL={PLACEHOLDER_IMAGE}
                />
            </div>

            <div>
                <h2>Descripcion</h2>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci enim quibusdam quae accusamus fugiat error quos neque libero ea sed accusantium nostrum esse, quis odit
                </p>
            </div>

        </section>
    );
}