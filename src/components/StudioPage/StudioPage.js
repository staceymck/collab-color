import React from 'react';
import Canvas from '../Canvas/Canvas';
import styles from './StudioPage.module.css';
import { SketchPicker } from 'react-color';
import buttonStyles from '../Button/Button.module.css';
import { addColor, resetCanvas, createPaintingStart } from '../../actions/studioActions';
import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker/ColorPicker'

import Loading from '../Loading/Loading';
import SuccessModal from '../SuccessModal/SuccessModal';

class StudioPage extends React.Component {

  state = {
    activeColor: "#267E92"
  }

  componentDidMount = () => {
    this.props.newPainting(this.props.canvas.polygons)
  }

  componentWillUnmount = () => {
    //BE SURE TO CALL A DISPATCH THAT RESETS THE STATUS AS IDLE
  }

  handleChangeComplete = (color) => {
    this.setState({activeColor: color.hex})
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
        {console.log(status)}
        {status === "resolved" && <SuccessModal />}
        {/* <ColorPicker /> */}
        <Canvas 
          polygons={studioCanvas}
          cardStyles={styles.item1}
          onClick={addColor}
          activeColor={this.state.activeColor}
        />

        <div className={styles.item2}>
          <SketchPicker
            color={this.state.activeColor}
            onChangeComplete={this.handleChangeComplete}
            className={styles.colorPicker}
          />
        </div>

        <div className={styles.item3}>
          {this.minPolysPainted() ? 
            <button className={buttonStyles.primary} onClick={() => createPaintingStart(canvas.id, studioCanvas)}>
              Post to gallery
            </button> 
            :
            <p>Paint 20+ to unlock posting</p>
          }
          <button className={buttonStyles.danger} onClick={resetCanvas}>
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

export default connect(mapStateToProps, {addColor, resetCanvas, createPaintingStart})(StudioPage)