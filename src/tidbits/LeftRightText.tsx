import {Component} from "react";

/**
 * For when you want text on the left AND the right
 */
export class LeftRightText extends Component<{ left: any, right: any }> {
    render() {
        return <>
            <table width={'100%'}>
                <tr>
                    <td>
                        {this.props.left}
                    </td>
                    <td style={{textAlign: 'right'}}>
                        {this.props.right}
                    </td>
                </tr>
            </table>
        </>
    }
}