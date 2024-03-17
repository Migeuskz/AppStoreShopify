//todos los props en ts agregalos por interfaz
interface CategoryProps {
  params: {
    category: string[],
    searchParams: string,
  }
}

export default function Category(props: CategoryProps) {
  const { category } = props.params
  return (
    <h1>
      Categoria dinamica: {category}
    </h1>
  )
}
