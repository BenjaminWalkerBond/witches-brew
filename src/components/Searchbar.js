import {React, Component} from 'react';

class Searchbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            queryString : "",
            isLoaded: false,
            error: null,
            pageNumber: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt){

        
        this.setState({
            [evt.target.name] : [evt.target.value]
        });

    }
    handleSubmit(evt){

        var targetUrl = 'https://us-central1-rvrslkupdb.cloudfunctions.net/getByName?findthis=' + this.state.queryString + "&page=" + this.state.pageNumber;
        fetch(targetUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                }); 
            },

        // Handle error from fetch with an error instead of catch block.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            
        )
        

    }
    render(){
        return(
            
            <div className="bg-white shadow p-4 flex w-1/2 lg:w-auto">
                <span className="flex justify-end items-center text-gray-500 p-2">
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