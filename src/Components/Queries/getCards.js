import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import loadingLogo from '../../Images/colors.png'
import { Button } from "antd";

const GET_CARDS_FROM_SET = gql`
  query Set($set: String!) {
    set(set: $set) {
      total_cards
      has_more
      next_page{data{
        data{
          id
          eur
          set_name
          name
          image_uris{
            normal
          }
        }
      }}
      data{
        id
        eur
        set_name
        name
        image_uris{
          normal
        }
      }
    }
  }
`;


export const setCards = (set) => (
  <Query query={GET_CARDS_FROM_SET} variables={{ set }}>
    {({ loading, error, data }) => {
      console.log(data)
      if (loading) return <img alt="" id="loading" src={loadingLogo}/>;
      if (error) return `Error!: ${error}`;
      const Liste = data.set.data.map(({ image_uris,eur,name, id }) => (
        <div key={id}>
        {image_uris == null ? null: <div className="Card"><img alt="" height={450} src={image_uris.normal}/><Button value={[id, name, eur,image_uris.normal]} onClick={(e) => console.log(e.target.value)}>Add to Collection</Button></div>}
        </div>
      ))
      const NextPage = data.set.next_page.data.data.map(({ image_uris, data, id }) => (
        <div key={id}>
          {image_uris == null ? null: <div className="Card"><img alt="" height={450} src={image_uris.normal}/><Button value={data} onClick={(e) => console.log(e.target.value)}>Add to Collection</Button></div>}
        </div>
      ))
      return(
        <div>
        <div>
        <h1>{data.set.data[0].set_name}</h1>
          <p>{data.set.total_cards} cards</p>
        </div>
          <div className="CardContainer">
          {Liste}
          {NextPage}
          </div>
        </div>
      )
    }}
  </Query>
)

