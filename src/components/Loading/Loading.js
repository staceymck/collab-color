import React from 'react';
import styles from "./Loading.module.css"

export default class Loading extends React.Component {

  state = {
    dark: 1,
    dots: 3
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      if (this.state.dark === this.state.dots) {
        this.setState({dark: 1})
      } else if (this.state.dark >= 1 && this.state.dark < this.state.dots) {
        this.setState(state => {
          return (
            {dark: state.dark + 1}
          )
        })
      }
    }, 200) 
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  displayDots = () => {
    const dots = [...Array(this.state.dots).keys()].map(x => x += 1)
    return dots.map((dot, i) => {
      return (
        <svg height="100" width="100" key={i}>
          <circle cx="50" cy="50" r="20" fill={this.state.dark === dot ? "#267E92" : "#43BEC6" } />
        </svg>
      )
    })
  }

  render() {
    return (
      <div className={styles.modal}>
        <h1>{this.props.message}</h1>
        {this.displayDots()}
      </div> 
    )
  }
}

