import React, { useState } from 'react'
import addressContainerCss from './address-container.module.css'

export default function AddressContainer(props) {
    const[showEdit,setShowEdit]=useState(false)

    //handle edit
    const handleEdit = ()=>{
        setShowEdit(true)
    }

    //handle cancel
    const handleCancel = (e)=>{
        e.preventDefault()
        setShowEdit(false)
    }

    //handle save
    const handleSave = (e)=>{
        e.preventDefault()
        setShowEdit(false)
    }
  return (
    <div className={addressContainerCss.container}>

    <h5 className='mb-5'>My Account</h5>

        {/* default address */}
        {
            !showEdit &&
            <div className={addressContainerCss.default}>
               
            <ul>
                <li>Name : {props.name || 'Avatar'}</li>
                <li>Email : {props.email || 'email@'}</li>
                <li>phone : {props.phone || 78645435} </li>
                <li>Address : {props.address || `address,<br/>place,<br/>,pincode`}</li>
            </ul>
            <div className={addressContainerCss.btns + ' flex items-center justify-end gap-3' }>
                <button className='btn-bluegreen' onClick={handleEdit}>Edit</button>
            </div>
        </div>
        }

        {/* to edit address */}
        {
            showEdit && 
            <div className={addressContainerCss.edit}>
            <form className='flex flex-col gap-2'>
                <div className={addressContainerCss.edit_li}>
                    <label htmlFor="name">Name :</label>
                    <input type="text" name="name"/>
                </div>

                <div className={addressContainerCss.edit_li}>
                    <label htmlFor="email">Email :</label>
                    <input type="text" name="email"/>
                </div>

                <div className={addressContainerCss.edit_li}>
                    <label htmlFor="phone">Phone :</label>
                    <input type="text" name="phone"/>
                </div>

                <div className={addressContainerCss.edit_li}>
                    <label htmlFor="address">Address :</label>
                    <input type="text" name='address'/>
                </div>
                <div className={addressContainerCss.btns + ' flex items-center justify-end gap-3' }>
                    <button className='btn-light-bluegreen' onClick={handleCancel}>Cancel</button>
                    <button className='btn-bluegreen'onClick={handleSave}>Save</button>
                </div>
            </form>
            
        </div>
        }
       
    </div>
  )
}
