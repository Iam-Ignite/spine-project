import React from 'react'
import ActivityLogCards from './ActivityLogCards '
import AvailablePaymentLog from './AvailablePaymentLog'


export const WorkinProgress = () => {

    return (
        <div className="grid md:grid-cols-3 mx-5 md:mx-16 gap-4">
            <ActivityLogCards imge='/Mask Group 10.svg' btnText="Message Client" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 7.svg' btnText="Message Client" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 8.svg' btnText="Message Client" percent="100" link="/activitylog/jobview" />
        </div>
    )
}
export const WorkinReview = () => {

    return (
        <div className="grid md:grid-cols-3 mx-5 md:mx-16 gap-4">
            <ActivityLogCards imge='/Mask Group 9.svg' btnText="Message Client" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 5.svg' btnText="Message Client" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 10.svg' btnText="Message Client" percent="100" link="/activitylog/jobview" />
        </div>
      )
}
export const PendingPayment = () => {

    return (
        <div className="grid md:grid-cols-3 mx-5 md:mx-16 gap-4">
            <ActivityLogCards imge='/Mask Group 8.svg' btnText="Request Payment" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 10.svg' btnText="Request Payment" percent="100" link="/activitylog/jobview" />
            <ActivityLogCards imge='/Mask Group 6.svg' btnText="Request Payment" percent="100" link="/activitylog/jobview" />
        </div>
      )
}
export const AvailablePayment = () => {

    return (
        <AvailablePaymentLog />
      )
}
