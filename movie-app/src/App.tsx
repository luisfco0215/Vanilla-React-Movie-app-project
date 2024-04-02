
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './assets/components/NavBar'


function App() {

  return (
    <>
      <Grid
        templateAreas={
          {
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
          }
        }>
        <GridItem bg='coral' area={'nav'}>
          <NavBar></NavBar>
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem bg='dodgerblue' area={'main'}>
          Main
        </GridItem>
      </Grid>
    </>
  )
}

export default App
