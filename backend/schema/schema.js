const graphql = require('graphql')
const fetch = require('node-fetch')
const {
    GraphQLObjectType, 
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat,
} = graphql

fetch('https://api.scryfall.com/cards/search?order=set&q=e%3Agrn&unique=prints')
.then(response => response.json())


const setType = new GraphQLObjectType({
    name: 'Set',
    description: '...',
    
    fields: () =>({
        object: {
            type: GraphQLString
        },
        total_cards: {
            type: GraphQLInt
        },
        has_more: {
            type: GraphQLBoolean
        },
        next_page: {
            type: nextPageType
        },
        data: {
            type: new GraphQLList(cardType),
        }
    })
})

const nextPageType = new GraphQLObjectType({
    name: 'next_page',
    description: '...',

    fields: () =>({
        data:{
            type: setType ,
            resolve: (root) => fetch(root)
            .then(response => response.json())
        }
    })
})

const cardImageType = new GraphQLObjectType({
    name: 'image',
    description: '...',

    fields: () => ({
        small: {
            type: GraphQLString
        },
        normal: {
            type: GraphQLString
        },
        png: {
            type: GraphQLString
        },
        large: {
            type: GraphQLString
        }
    })
})

const cardType = new GraphQLObjectType({
    name: 'card',
    description: '...',
    
    fields: () =>({
        object: {
            type: GraphQLString
        },
        id: {
            type: GraphQLString
        },
        oracle_id: {
            type: GraphQLString
        },
        mtgo_id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        image_uris: {
            type: cardImageType
        },
        mana_cost:{
            type: GraphQLString
        },
        cmc: {
            type: GraphQLInt
        },
        type_line: {
            type: GraphQLString
        },
        oracle_text: {
            type: GraphQLString
        },
        power: {
            type: GraphQLString
        },
        toughness: {
            type: GraphQLString
        },
        eur: {
            type: GraphQLFloat
        },
        set_name: {
            type: GraphQLString
        }
    })
})


    const RootQuery = new GraphQLObjectType({
        name: 'Query',
        description: '...',

        fields: () =>({
           set: {
               type: setType,
               args: {
                 set: { type: GraphQLString}
               },
               resolve: (root, args) => fetch(
                   `https://api.scryfall.com/cards/search?order=set&q=e%3A${args.set}&unique=prints`
               )
               .then(response => response.json())
           },
        })
    })

    const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields:  {
            addCard: {
                type: cardType
            },
        }
    })

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})