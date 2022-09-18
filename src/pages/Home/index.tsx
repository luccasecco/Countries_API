import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { api } from "../../services/api"
import { Container } from "./styles"



export function Home() {



  return (
    <Container>
      {/* {countries.map((country) => {
        return (
          
        )
      })} */}
      <Card />
    </Container>
  )
}