import React from "react"
import ContentLoader from "react-content-loader"

const MyLoaderInfo = (props) => (
  <ContentLoader 
    speed={0.5}
    width={1200}
    height={800}
    viewBox="0 0 800 800"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="35" rx="0" ry="0" width="300" height="392" /> 
    <rect x="380" y="125" rx="0" ry="0" width="455" height="35" /> 
    <rect x="380" y="175" rx="0" ry="0" width="500" height="20" /> 
    <rect x="380" y="209" rx="0" ry="0" width="455" height="20" /> 
    <rect x="380" y="257" rx="0" ry="0" width="455" height="20" /> 
    <rect x="380" y="314" rx="0" ry="0" width="455" height="20" />
  </ContentLoader>
)

export default MyLoaderInfo