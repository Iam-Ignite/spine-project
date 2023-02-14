import React, { useState } from 'react'
import PaymentModal from '../payment/PaymentModal'
import ActivityLogCards from './ActivityLogCards '


export const WorkinProgress = () => {

    return (
        <div className="grid md:grid-cols-3 mx-5 md:mx-16 gap-4">
            <ActivityLogCards imge='/Mask Group 10.svg' btnText="Message Professional" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 7.svg' btnText="Message Professional" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 8.svg' btnText="Message Professional" percent="100" link="/activitylog/jobview" />
        </div>
    )
}
export const WorkinReview = () => {

    return (
        <div className="grid md:grid-cols-3 mx-5 md:mx-16 gap-4">
            <ActivityLogCards imge='/Mask Group 9.svg' btnText="Message Professional" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 5.svg' btnText="Message Professional" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 10.svg' btnText="Message Professional" percent="100" link="/activitylog/jobview" />
        </div>
    )
}
export const PendingPayment = () => {
        	const [modal, setModal] = useState(false);


    return (
        <>
            <div className="grid md:grid-cols-3 mx-5 md:mx-16 gap-4">
                <ActivityLogCards imge='/Mask Group 8.svg' setModal={setModal} btnText="Make Payment" percent="100" />
                <ActivityLogCards imge='/Mask Group 10.svg' setModal={setModal} btnText="Make Payment" percent="100" />
                <ActivityLogCards imge='/Mask Group 6.svg' setModal={setModal} btnText="Make Payment" percent="100" />
            </div>
            <PaymentModal modal={modal} setModal={setModal} />
        </>

    )
}
