import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'

const RootIndex = (props) => {
  const { data } = props

  return (
    <>
      <Layout />
    </>
  )
}

export default RootIndex

