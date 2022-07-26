import React from "react"
import ContentLoader from "react-content-loader"

const MyLoaderInfoMd = (props) => (
  <ContentLoader 
    speed={0.5}
    width={360}
    height={400}
    viewBox="0 0 800 800"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="160" y="35" rx="0" ry="0" width="500" height="600" /> 
    <rect x="160" y="675" rx="0" ry="0" width="500" height="50" /> 
    <rect x="160" y="750" rx="0" ry="0" width="500" height="40" /> 
    <rect x="160" y="775" rx="0" ry="0" width="500" height="40" /> 
    
  </ContentLoader>
)

export default MyLoaderInfoMd