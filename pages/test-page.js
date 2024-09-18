import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { getEntityByAttribute } from '@teleporthq/cms-mappers/caisy'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Senior Accountability Orchestrator</title>
          <meta
            property="og:title"
            content="test-page - Senior Accountability Orchestrator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_b2vajj) => (
            <Fragment>
              <h1>Heading</h1>
              <h1>{context_b2vajj?.id}</h1>
            </Fragment>
          )}
          params={{
            projectId: '3bd8eb33-2aaa-4620-87bf-d7ccd04d0245',
            query:
              'query MyQuery{TypeWithRichText{_meta{createdAt updatedAt id}title content{json connections{__typename  }}}}',
            attribute: 'id',
            id: '2',
          }}
          initialData={props.contextB2vajjProp}
          persistDataDuringLoading={true}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextB2vajjProp = await getEntityByAttribute({
      ...context?.params,
      projectId: '3bd8eb33-2aaa-4620-87bf-d7ccd04d0245',
      query:
        'query MyQuery{TypeWithRichText{_meta{createdAt updatedAt id}title content{json connections{__typename  }}}}',
      attribute: 'id',
      id: '2',
    })
    return {
      props: {
        contextB2vajjProp: contextB2vajjProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      props: {},
      revalidate: 60,
    }
  }
}
