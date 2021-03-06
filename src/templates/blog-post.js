import React from "react"
import AWS from "aws-sdk"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Button from "@material-ui/core/Button"
import FavoriteIcon from '@material-ui/icons/Favorite';

import Layout from "../layouts/layout";

AWS.config.update({region: 'us-east-2'});

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const [likes, setLikes] = React.useState(0)
  const [liked, setLiked] = React.useState(typeof window !== "undefined" && window.localStorage.getItem(post.frontmatter.title) && window.localStorage.getItem(post.frontmatter.title).includes("liked"))
  const [views, setViews] = React.useState(0)

  const ddb = new AWS.DynamoDB({
    accessKeyId: process.env.GATSBY_DDB_ACCESS_KEY_ID,
    secretAccessKey: process.env.GATSBY_DDB_SECRET_KEY
  })
  AWS.config.update({region: "us-east-2"})

  const updateLikes = () => {
    // console.log(process.env.GATSBY_DDB_ACCESS_KEY_ID)
    // console.log(process.env.GATSBY_DDB_SECRET_KEY)

    // get num of likes
    const params = {
      TableName: 'rmtransit-blog-likes',
      Key: {
        "title": {
          S: post.frontmatter.title
        }
      }
    }
  
    ddb.getItem(params, function(err, data) {
      if (err)
        console.log(err)
      else if ("Item" in data) {
        console.log(data)
        setLikes(data.Item.likes["N"])
      } else {
        setLikes(0)
      }
    })
  }

  const handleLike = (event) => {
    console.log("like button clicked")

    if (!liked) {
      // add to ddb
      console.log(likes)
      var params = {
        TableName: 'rmtransit-blog-likes',
        Item: {
          "title": {
            S: post.frontmatter.title
          },
          "likes": {
            N: (parseInt(likes) + 1).toString()
          }
        }
      }
    
      ddb.putItem(params, function (err, data) {
        if (err) { 
          console.log("Error", err)
        } else {
          console.log("Success", data)
        }
      })
    } 

    // add to localstorage
    if (typeof window !== "undefined")
      window.localStorage.setItem(post.frontmatter.title, window.localStorage.getItem(post.frontmatter.title) + "liked")

    // set state
    setLiked(true)

    // update num likes
    updateLikes()
  }

  // get num of views
  const getViewsParams = {
    TableName: 'rmtransit-blog-views',
    Key: {
      "title": {
        S: post.frontmatter.title
      }
    }
  }

  let curViews = 0
  ddb.getItem(getViewsParams, function(err, data) {
    if (err)
      console.log(err)
    else if ("Item" in data) {
      console.log(data)
      curViews = parseInt(data.Item.views["N"])
      setViews(curViews)
    } 
    
    // update views
    if (!window.localStorage.getItem(post.frontmatter.title) || !window.localStorage.getItem(post.frontmatter.title).includes("viewed")) {
      const setViewsParams = {
        TableName: 'rmtransit-blog-views',
        Item: {
          "title": {
            S: post.frontmatter.title
          },
          "views": {
            N: (curViews + 1).toString()
          }
        }
      }

      ddb.putItem(setViewsParams, function (err, data) {
        if (err) { 
          console.log("Error", err)
        } else {
          console.log("Success", data)
        }
      })
      window.localStorage.setItem(post.frontmatter.title, window.localStorage.getItem(post.frontmatter.title) + "viewed")
    }
  })

  updateLikes()

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.excerpt}
    >
      <p
        css={css`
          margin-left: 20px;
          margin-bottom: 0;
          margin-top: 15px;
        `}
      >
        <Link
          to="/posts"
          css={css`
            color: black;
            text-decoration: none;
            :hover {
              text-decoration: underline;
            }
          `}  
        >
        &#60; Back
        </Link>
      </p>
      <div
        css={css`
            padding: 20px 10%;
            ${mq[2]} {
              padding: 20px 20%;
            }
          `
        }
      >
        <h1
          css={css`
            text-align: center; 
            font-size: 300%;
            ${mq[2]} {
              font-size: 400%;
            }
          `}
        >{post.frontmatter.title}</h1>
        <h4
          css={css`
          text-align: center;
          color: gray;
        `}
        >
          Posted on: {post.frontmatter.date} ⋅ {views} Views
        </h4>
        <div
          css={css`
            text-align:center;
          `}
        >
          <p css={css`
            position: relative;
          `}>
          <span css={css`
            font-size: 1.3em;
          `}>{likes}</span> <FavoriteIcon css={css`
            display: inline-block;
            position: relative;
            top: 5px;
            margin-right: 20px;
          `}/>
          
          {
            liked ? (
              <Button variant="outlined" disabled={true}>Already Liked</Button>
            ): (
              <Button onClick={handleLike} variant="outlined">Leave a Like</Button>
            )
          }
          </p>
        </div>
        <div
        >
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <h1 
          css={css`
            text-align:center;
          `}
        >
          .
        </h1>
      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
    }
  }
`
