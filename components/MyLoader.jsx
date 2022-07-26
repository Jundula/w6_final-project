import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={0.5}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="41" y="414" rx="15" ry="15" width="191" height="17" /> 
    <rect x="35" y="35" rx="15" ry="15" width="240" height="320" />
  </ContentLoader>
)

export default MyLoader