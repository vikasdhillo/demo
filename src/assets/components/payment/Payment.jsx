import React from 'react'
import './payment.css'
import payment from './payment.jpg'
import { TiTick } from "react-icons/ti";
const Payment = () => {
    return (
        <div className='container payment'>
            <div className='d-flex justify-content-center'>
                <h3 className='mb-3'>Payment Mode</h3>
            </div>
            <div className="row main-payment">
                <div className="col-md-6 mt-3">
                    <div className="row mt-3 payment-options">
                        <div className="col-md-6 d-flex flex-column gap-2">
                            <div className="payment-type d-flex gap-1 align-items-center"> 
                            <h4 className='mb-0'>Deposit to Account</h4>
                            <span className='tick'><TiTick /></span>
                            </div>
                            <div className="payment-type d-flex gap-1 align-items-center"> 
                            <h4 className='mb-0'>Credit card/ Debit card</h4>
                            <span className='tick'><TiTick /></span>
                            </div>
                            <div className="payment-type d-flex gap-1 align-items-center"> 
                            <h4 className='mb-0'>Wallet</h4>
                            <span className='tick'><TiTick /></span>
                            </div>
                            <div className="payment-type d-flex gap-1 align-items-center"> 
                            <h4 className='mb-0'>Paytm/Phonepe/AmazonPay</h4>
                            <span className='tick'><TiTick /></span>
                            </div>
                            <div className="payment-type d-flex gap-1 align-items-center"> 
                            <h4 className='mb-0'>NEFT</h4>
                            <span className='tick'><TiTick /></span>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column gap-1">
                        <div className="payment-type d-flex gap-1 align-items-center"> 
                            <h4 className='mb-0'>Net Banking</h4>
                            <span className='tick'><TiTick /></span>
                            </div>
                            <div className="payment-type d-flex gap-1 align-items-center"> 
                            <h4 className='mb-0'>UPI</h4>
                            <span className='tick'><TiTick /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="payment-img w-100">
                        <img src={payment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment