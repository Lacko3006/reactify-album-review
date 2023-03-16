import { gql } from "@apollo/client";

export const LOGIN = gql`
query Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
  }
}
`

export const GET_ALBUMS = gql`
query GetAlbums {
  getAlbums {
    _id
    genre
    name
    songs
    year
  }
}
`