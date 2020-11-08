import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  {
    rose {
      listCharacters {
        items {
          id
          name
          description
          avatar
        }
      }
    }
  }
`

export default ({ data }) => (
  <div>
    {data.rose.listCharacters.items.map(character => (
      <div key={character.id}>
        <img src={character.avatar} alt={character.name} />
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </div>
    ))}
  </div>
)