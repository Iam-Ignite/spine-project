import MyJobsCards from './myJobCards'
import AppliedJob from './AppliedJob'
import JobsPostedCards from './JobsPostedCards'


export const JobsPostedCardsTab = () => {

    return (
        <div className="grid md:grid-cols-2 mx-5 gap-4 md:mx-16">
            <JobsPostedCards />
            <JobsPostedCards />

        </div>
    )
}

export const  AppliedJobTabs = () => {

    return (
        <div className="grid md:grid-cols-2 mx-5 gap-4 md:mx-16">

            <AppliedJob />
            <AppliedJob />
        </div>
    )
}

export const MyjobsTab = ({ link }) => {
    return (
        <div className="grid md:grid-cols-3 mx-5 md:mx-16 gap-4">
            <MyJobsCards link={link}
                imge='/Mask Group 10.svg' />
            <MyJobsCards link={link}
                imge='/Mask Group 9.svg' />
            <MyJobsCards link={link}
                imge='/Mask Group 7.svg' />
            <MyJobsCards link={link}
                imge='/Mask Group 8.svg' />
            <MyJobsCards link={link}
                imge='/Mask Group 5.svg' />
            <MyJobsCards link={link}
                imge='/Mask Group 3.svg' />
            <MyJobsCards link={link}
                imge='/Mask Group 6.svg' />
            <MyJobsCards link={link}
                imge='/Mask Group 5.svg' />
            <MyJobsCards link={link}
                imge='/Mask Group 3.svg' />
            <MyJobsCards link={link}
                imge='/Mask Group 6.svg' />
        </div>
    )
}