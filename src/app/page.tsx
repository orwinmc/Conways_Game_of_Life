import styled from 'styled-components'

const $Heading = styled.h1`
  color: red;
`

export default function Home() {
  return (
    <div>
      <main>
        <$Heading>{"Conway's Game of Life"}</$Heading>
      </main>
    </div>
  )
}
