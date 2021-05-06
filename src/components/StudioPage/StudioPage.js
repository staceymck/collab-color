import React from 'react';
import StudioCanvas from '../StudioCanvas/StudioCanvas';
import styles from './StudioPage.module.css';
import { SketchPicker } from 'react-color';
import buttonStyles from '../Button/Button.module.css';
import { addColor, resetCanvas, createPaintingStart } from '../../actions/studioActions';
import { connect } from 'react-redux';
// import ColorPicker from '../ColorPicker/ColorPicker'
import Loading from '../Loading/Loading';

class StudioPage extends React.Component {

  state = {
    activeColor: "#267E92"
  }

  componentDidMount = () => {
    this.props.newPainting(this.props.canvas.polygons)
  }

  handleChangeComplete = (color) => {
    this.setState({activeColor: color.hex})
  }

  render() {
    const { studioCanvas, addColor, resetCanvas, createPaintingStart, canvas, status } = this.props
    return ( 
      <div className={styles.container}>
        {status === "pending" && <Loading message="Saving" />}
        <StudioCanvas 
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
          <button className={buttonStyles.primary} onClick={() => createPaintingStart(canvas.id, studioCanvas)}>
            Save to gallery
          </button>
          <button onClick={resetCanvas}>
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