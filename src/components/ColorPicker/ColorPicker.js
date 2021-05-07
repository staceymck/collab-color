import React from 'react';
import { CustomPicker } from 'react-color';
import styles from './ColorPicker.module.css';
import Swatch from '../Swatch/Swatch';

var { EditableInput, Hue, Saturation } = require('react-color/lib/components/common');

const ColorPicker = (props) => {
  return (
    <div className={styles.colorPicker}>
      <div className={styles.sat}>
        <Saturation
          {...props}
          onChange={props.handleChange }
        />
      </div>
      <div className={styles.slider}>
        <Hue
          {...props}
          onChange={ props.handleChange }
          direction={ 'horizontal' || 'vertical' }
        />
      </div>
      <div className={styles.hex}>
        <EditableInput
          label="Hex"
          value={ props.hex }
          onChange={ props.handleChange }
        />
      </div>
      <div className={styles.swatchContainer}>
        <div className={styles.swatchBlock}>
          <Swatch />
        </div>
      </div>
      

      
    </div>
  )
}

export default CustomPicker(ColorPicker)

// export const ColorPicker = ({ hex, hsl, rgb, onChange }) => {
//   const styles = {
//     hue: {
//       height: 10,
//       position: 'relative',
//       marginBottom: 10,
//     },
//     input: {
//       height: 34,
//       border: `1px solid ${ hex }`,
//       paddingLeft: 10,
//     },
//     swatch: {
//       width: 54,
//       height: 38,
//       background: hex,
//     },
//     sat: {
//       width: 54,
//       position: 'relative',
//     }
//   }
//   return (
//     <div>
//       <div>
//         <Saturation
//           hex={ hex }
//           hsl={ hsl }
//           rgb={ rgb }
//           onChange={ onChange } />
//       </div>
//       <div style={ styles.hue }>
//         <Hue hsl={ hsl } onChange={ onChange } />
//       </div>

//       <div style={{ display: 'flex' }}>
//         <EditableInput
//           style={{ input: styles.input }}
//           value={ hex }
//           onChange={ onChange }
//         />
//         <div style={ styles.swatch } />
//       </div>
//     </div>
//   )
// }

// // class ColorPicker extends React.Component {
// //   render() {
// //     return (
// //     <div className={styles.colorPicker}>
        
      
     

// //     <div className={styles.slider}>
// //       <Hue
// //         {...this.props}
// //         onChange={ this.handleChange }
// //         direction={ 'horizontal' || 'vertical' } />
// //     </div>

// //     <div className={styles.sat}>
// //       <Saturation
// //       {...this.props}
// //       onChange={ this.handleChange }  />
// //    </div>
// //       <EditableInput
// //       label="hex"
// //       value={ this.props.hex }
// //       onChange={ this.handleChange } />
 
// //     </div>
// //     )
// //   }
// // }

// export default CustomPicker(ColorPicker);