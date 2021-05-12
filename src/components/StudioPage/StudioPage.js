import React from 'react';
import Canvas from '../Canvas/Canvas';
import styles from './StudioPage.module.css';
import { SketchPicker } from 'react-color';
import { addColor, resetCanvas, createPaintingStart, resetStatus } from '../../actions/studioActions';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading';
import SuccessModal from '../SuccessModal/SuccessModal';

class StudioPage extends React.Component {

  state = {
    activeColor: "#267E92",
    presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505',
    '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000',
    '#4A4A4A', '#9B9B9B', '#FFFFFF']
  }

  componentDidMount() {
    this.props.newPainting(this.props.canvas.polygons)
  }

  componentWillUnmount() {
    this.props.resetStatus()
  }

  handleChangeComplete = (color) => {
    this.setState({activeColor: color.hex.toUpperCase()})
  }

  handleClick = (id, activeColor) => {
    this.props.addColor(id, activeColor)
    if (!this.state.presetColors.includes(activeColor)) {
        this.setState(state => {
          const colors = state.presetColors.slice(0)
          colors.unshift(activeColor)
          colors.pop()
          return {
            presetColors: colors
          }
        })
      }
  } 

  minPolysPainted = () => {
    const painted = this.props.studioCanvas.filter(p => p.color !== "#fff" && p.color !== "#ffffff")
    return painted.length >= 20 ? true : false
  }

  render() {
    const { studioCanvas, addColor, resetCanvas, createPaintingStart, canvas, status } = this.props
    return ( 
      <div className={styles.container}>
        {status === "pending" && <Loading message="Posting" />}
        {status === "resolved" && <SuccessModal />}
        
        <Canvas 
          polygons={studioCanvas}
          cardStyles={styles.item1}
          onClick={this.handleClick}
          activeColor={this.state.activeColor}
        />
        
        <div className={styles.item2}>
          <SketchPicker
            color={this.state.activeColor}
            onChange={this.handleChangeComplete}
            className={styles.colorPicker}
            width="60%"
            disableAlpha={true}
            presetColors={this.state.presetColors}
          />
        </div>

        <div className={styles.item3}>
          {this.minPolysPainted() ? 
            <button className="button-primary" onClick={() => createPaintingStart(canvas.id, studioCanvas)}>
              Post to gallery
            </button> 
            :
            <p>Paint 20+ to unlock posting</p>
          }
          <button className="button-danger" onClick={resetCanvas}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    studioCanvas: state.studioCanvas.studioCanvas,
    status: state.studioCanvas.status
  }
}

export default connect(mapStateToProps, {addColor, resetCanvas, createPaintingStart, resetStatus})(StudioPage)