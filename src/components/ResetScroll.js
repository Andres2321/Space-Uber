import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const ResetScroll = (props) => {

  const { pathname } = useLocation() //React router hook that gives us access to the location prop

  useEffect(() => {
    /*  
    useEffect is componentDidMount, componentDidUpdate, shouldComponentUpdate in one.
    Stuff in Array brackets is what we look for changes in
    */
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{props.children}</>
}

export default ResetScroll


// import React, { Component } from 'react'
// class ResetScroll extends Component {
//   constructor(props) {
//     super(props)
//   }

//   componentDidUpdate(prevProps, prevState) {
//     return this.props.location.pathname !== prevProps.location.pathname ? window.scrollTo(0, 0) : null
//   }


//   render() {
//     return <>{this.props.children}</>
//   }
// }

// export default withRouter(ResetScroll)