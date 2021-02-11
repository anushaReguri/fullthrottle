import React,{useEffect,useState} from 'react'
import './UserStyles.css';
import UserDetailModal from './UserDetailModal';
import { confirmDialog } from 'primereact/confirmdialog'; 
import { OrderList } from 'primereact/orderlist';
 import {getDate} from './Commons.jsx'

function UsersList() {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
        fetch('https://d6079605-bf37-4d59-ae76-1b2a7802db73.mock.pstmn.io/users')
          .then(res => res.json())
          .then(
            (result) => {
                 result.members.forEach(user=>{
                     user.activity_periods.forEach(period=>{
                        period.start_time=getDate(period.start_time)
                        period.end_time=getDate(period.end_time)
                     })
                 })
                setState({users:result.members})
                setLoading(false);
            },
            (err) => {
                setLoading(false);
              setError(err);
            }
          )
      }, [])

  if (error) return `Error! ${error}`;

const confirm = (e) => {    
    confirmDialog({
        message: <UserDetailModal activity_periods={e.activity_periods}/>,
        header: 'User Activity Periods',
        accept: () => {},
        reject: () => {},
        footer:<span></span>
    });
}

const itemTemplate = (item) => {
    return (
            <div className="">
                <h5 onClick={()=>confirm(item)}>{item.real_name}</h5>
            </div>
              );
}

  return (
    <div className='Users'>
           <div className='table-div'> {loading?
                         <div className='spinner-border text-danger'/>:
                         <OrderList value={state.users} itemTemplate={itemTemplate} header="Users"></OrderList>}  
        </div>  
      
    </div>
  )
}

export default UsersList
