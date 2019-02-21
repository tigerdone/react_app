import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';

@inject('Store')
@observer
class DropDown extends Component{
    render(){
        const {Store} = this.props;

        return (
            <label>
                choose type：
                <select
                    value={Store.InputBox.type}
                    onChange={(e)=>Store.handleInputBoxInput('type',e.target.value)}
                >
                    <option value="paper">
                        paper
                    </option>
                    <option value="patent">
                        patent
                    </option>
                    <option value="software_copyright">
                        software_copyright
                    </option>
                    <option value="awards">
                        awards
                    </option>
                </select>
            </label>
        )
    }
}

export default DropDown

