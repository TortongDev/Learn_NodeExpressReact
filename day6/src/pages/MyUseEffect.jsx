import React , { useEffect } from "react";
import Swal from 'sweetalert2';
function MyUseEffect() {
    useEffect(()=>{
        console.log('Starting UseEffect');
       
    });
    const useAlertSuccess = () => {
        Swal.fire({
            title: 'Header Alert',
            text: 'My Success',
            icon: 'success',
            timer: 2000

        })
    };
    const showConfirm = () => {
        Swal.fire({
            title: 'Header Alert',
            text: 'are You Sure ?',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonColor: 'red',
            confirmButtonColor: 'green'

        }).then((res)=>{
            if(res.isConfirmed) {
                console.log('show confirm.');
            } else {

                console.log('show cancel.');
            }
        })
    };
    return (
        <>
        <h2>UseEffect</h2>
        <button onClick={useAlertSuccess}>Success</button>
        <button onClick={showConfirm}>Confirm</button>
        </>
    );
}

export default MyUseEffect