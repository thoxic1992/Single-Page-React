import React from 'react'

class LCComponent extends React.Component{
    timer = null
    state = { name: 'value' }

    customMethod = () => {
        //this.state
    }

    //static getDerivedStateFormProps(props, state){
    //}

    render(){
        return 'string'
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log('tick')
        },1000)
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
}

export default LCComponent