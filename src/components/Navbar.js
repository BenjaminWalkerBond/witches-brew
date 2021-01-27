import React, {Component} from "react";
import Searchbar from './Searchbar';
import logo from '../style/to-scale-logo.png';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state ={
      navOpen: false
    }
    this.handleDropdown = this.handleDropdown.bind(this);

    
  }

  handleDropdown(){
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  }

  render(){
    
    return (
      <div>
        <nav className="relative flex flex-nowrap items-center px-2 py-3 navbar-expand-lg bg-blue-400 mb-3">
          <div className="flex justify-between flex-nowrap w-full">

            <div className="flex items-center px-1 lg:w-1/2 w-full">
              <img className="transform scale-1 custom px-2" alt="amaretto" src={logo}/>
              <div className="relative flex">
                <a
                  className="text-md tracking-widest font-bold leading-relaxed inline-block mr-4 px-2 uppercase text-white"
                  href="#pablo"
                >
                  Witches Brew
                </a>
            </div>
            
              <button
                className="text-white cursor-pointer text-3xl flex leading-none ml-auto px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={this.handleDropdown}
                
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>
            <div
              className={
                this.state.navOpen ? 'container flex-column': 'lg:flex flex-grow justify-items-stretch hidden'}
              
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item hidden sm:flex">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fa fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
                  </a>
                </li>
                <li className="nav-item hidden sm:flex">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fa fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2 spin">Tweet</span>
                  </a>
                </li>
              </ul>
  
              <Searchbar />
            </div>
          </div>
        </nav>
      </div>
    )
  }
};
export default Navbar;
  
  
 
