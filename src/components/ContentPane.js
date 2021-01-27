// Stateful component
import {React, Component} from 'react';

class ContentPane extends Component {
    constructor(props){
        super(props);
        this.state = {
            drinks: [],
            searchClicked
        }
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }
    handleLoadMore(evt){

    }
    handleSearch(evt){

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
            <div className="container mx-auto bg-blue-100 w-full flex">
                {this.state.searchClicked}
            </div>
        );
    }
}
export default ContentPane;