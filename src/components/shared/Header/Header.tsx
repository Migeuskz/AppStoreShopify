import Link from "next/link";

export const Header = () =>{
    console.log('hola mundo desde header');
    return(
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/store">Store</Link>
              </li>
            </ul>
          </nav>
        </header>
    );
}