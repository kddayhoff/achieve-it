import React, { Component, createContext} from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
    state = {  
        isUser: false
    }

    toggleUser= () =>{
    this.setState({isUser:!this.state.isUser });
    };

    render() { 
        return ( 
            <UserContext.Provider value={{...this.state, toggleUser: this.toggleUser}}>
                {this.props.children}
            </UserContext.Provider>
         );
    }
}
 
export default UserContextProvider


