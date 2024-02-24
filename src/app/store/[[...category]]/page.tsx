//todos los props en ts agregalos por interfaz
interface CategoryProps {
  params: {
    category: string[],
    searchParams: string,
  }
}

export default function Category(props: CategoryProps) {
  const { category } = props.params
  console.log(props);
  console.log(category)
  return (
    <h1>
      Categoria dinamica: {category}
    </h1>
  )
}
