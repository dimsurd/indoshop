import { Avatar, Button, Card, Flex } from "@chakra-ui/react" 

// List Products
const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    price: 100,
    description: "Description of Product 1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category 1",
    price: 100,
    description: "Description of Product 2",
    image: "https://picsum.photos/200/300",
  },
]


function ProductPage() { 
  return (
    <>
      <h1>Product Page</h1>
      <p>This is the product page.</p>
      <p>List of Products</p> 
      <Flex> 
      {products.map((product) => (
        <>
          <Card.Root key={product.id} width="320px" >
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src={product.image} />
                <Avatar.Fallback name={product.name} />
              </Avatar.Root>
              <Card.Title mb="2">{product.name }</Card.Title>
              <Card.Description>
                <strong>Category: {product.category}</strong>
                <br />
                <strong>Price: Rp. {product.price}</strong>
                <br />
                <strong>Description: {product.description}</strong>
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">Add to Cart</Button>
            </Card.Footer>
          </Card.Root>
        </> 
      ))}
      </Flex>
    </>
  )
}
export default ProductPage
