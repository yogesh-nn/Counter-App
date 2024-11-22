import { Component } from "react";

export class FetchUserData extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.userId,
            email : '',
            name : '',
            image: '',
        };
    }

    async fetchData(userId){
        try{
            const tempdata = await fetch(`https://reqres.in/api/users/${userId}`);
            const dataResult = await tempdata.json();
            // console.log(dataResult);
            this.setState({
                email: dataResult.data.email,
                name: dataResult.data.first_name + " " + dataResult.data.last_name,
                image: dataResult.data.avatar,
            });
        }

        catch(error){
            console.error("Error fetching data:", error);
        }
    }

    componentDidMount(){
        this.fetchData(this.state.id);
    }

    fetchIdUpdate(userId){
        this.setState({
            id: userId,
        }, () => {
            this.fetchData(userId);
        });
    }

    render(){
        return (
            <div>
                <button className="button" onClick={() => this.fetchIdUpdate(1)}><h3>Button 1</h3></button>
                <button className="button" onClick={() => this.fetchIdUpdate(2)}><h3>Button 2</h3></button>
                <button className="button" onClick={() => this.fetchIdUpdate(3)}><h3>Button 3</h3></button>
                <button className="button" onClick={() => this.fetchIdUpdate(100)}><h3>Button 100</h3></button>
                <ul>
                    <li><strong>Email: </strong><i>{this.state.email}</i></li>
                    <li><strong>Name: </strong><i>{this.state.name}</i></li>
                </ul>
                <img src={this.state.image} alt="" id="avatar"/>
            </div>
        );
    }
}