import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: 'none',
    };
    render() {
        const {isSpecial, color, name} = this.props;
        return (
            <div style={color}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}
// function Hello({name, color, isSpecial}) {
//     return (
//         <div style={{color}}>
//             {isSpecial && <b>*</b>}
//             안녕하세요! {name}
//         </div>
//     );
// }


// Hello.defaultProps = {
//     name: 'none'
// };

export default Hello;