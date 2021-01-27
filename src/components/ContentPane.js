// Stateful component
import {React, Component} from 'react';

class ContentPane extends Component {
    constructor(props){
        super(props);
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }
    handleLoadMore(evt){

    }
    render(){
        return(
            <div className="container mx-auto bg-blue-100 w-full flex">
                
            </div>
        );
    }
}
export default ContentPane;