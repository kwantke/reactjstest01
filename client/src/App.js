import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import Table from '@mui/material/Table';
import Paper from "@mui/material/Paper";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';




/*const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit*3,
        overflowX:"auto"
    },
    table:{
        minWidth: 1080
    }

})*/

/*const customer = [
    {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '고광규',
    'birthday': '911122',
    'gender': '남자',
    'job': '대학생'
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '홀길동',
        'birthday': '911122',
        'gender': '남자',
        'job': '사무원'
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '유재석',
        'birthday': '911122',
        'gender': '개발자',
        'job': '대학생'
    }

]*/

class App extends Component{

    state ={
        cusomers:""
    }

    componentDidMount(){
        this.callApi()
            .then(res => this.setState({
                customers: res
            }))
            .catch(err => console.log(err));
    }
    callApi = async() =>{
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
    }
    render() {

        return (
            <div >
                <Table>
                    <TableHead>
                        <TableCell>번호</TableCell>
                        <TableCell>이미지</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>생일</TableCell>
                        <TableCell>성별</TableCell>
                        <TableCell>직업</TableCell>
                    </TableHead>
                    <TableBody>
                        {this.state.customers? this.state.customers.map(c =>{ return ( <Customer  key={c.id}  id={c.id}  image={c.image} name={c.name} birthday={c.birthday} gender={c.gender}  job={c.job} />  );   }) : ""}
                    </TableBody>
                </Table>
                {/*{
                    customer.map( c=> {
                        return (
                            <Customer
                                key={c.id}
                                id={c.id}
                                image={c.image}
                                name={c.name}
                                birthday={c.birthday}
                                gender={c.gender}
                                job={c.job}
                            />
                        )
                    })
                }*/}
            </div>
        );
    }
}
export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>Let's develop management system!</h2>
    </div>
  );
}

export default App;*/
