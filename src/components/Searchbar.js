import {React, Component} from 'react';

class Searchbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            queryString : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt){

        
        this.setState({
            [evt.target.name] : [evt.target.value]
        });

    }
    handleSubmit(evt){
        

    }
    render(){
        return(
            
            <div className="bg-white shadow p-4 flex w-full lg:w-auto">
                <span className="w-auto flex justify-end items-center text-gray-500 p-2">
                    <i className="material-icons text-3xl hidden sm:flex">search</i>
                </span>
                <input className="w-full rounded p-2" type="text" name="queryString" value={this.state.queryString} placeholder="Try 'Los Angeles'" onChange={this.handleChange}/>
                <button className="bg-blue-400 hover:bg-blue-300 rounded text-white p-2 pl-4 pr-4" onClick={this.handleSubmit}>
                        <p className="font-semibold text-xs">Search</p>
                </button>
            </div>
            
        )
    }

}
export default Searchbar;