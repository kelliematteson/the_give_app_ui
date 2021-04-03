import '../scss/App.scss';
import { Alert } from 'react-bootstrap';



export default function About() {




    return(

        <Alert variant="success">
            <Alert.Heading>Buy Nothing Info Page</Alert.Heading>
            <p>We offer people a way to <span className="about-bold">give and receive, share, lend, and express gratitude</span> through a worldwide network of local gift economies in which the true wealth is the web of connections formed between people who are real-life neighbors.</p>
            <hr />
            <p className="mb-0">To learn more about us, see our Mission statement and guiding Principles:
            Mission and Principles 
            http://buynothingproject.org/about/mission-and-principles/
            By joining and participating in this group, you are agreeing to abide by our Rules and practice our suggestions: 
            Rules and Standards 
            http://buynothingproject.org/the-fine-print-2/
            We have a collection of some of the frequently asked questions with answers from our co-founders, to help explain how our rules work in practice: 
            Frequently Asked Questions 
            http://buynothingproject.org/about/faqs/
            </p>
            <hr />
            <p className="mb-0">The Buy Nothing Project’s original goal was to seed small hyper-local groups that served neighborhoods, where members could get to know their closest neighbors. Over the years, the founding team has come to understand the ways in which hyper-local groups can unintentionally but impactfully replicate systemically racist neighborhood design, particularly in the US. We still believe that each and every neighborhood around the world will be stronger and more resilient with a local gift economy that’s accessible to all neighbors, but we want to see that happen in ways that break down systemic racism and build more inclusive and equitable communities. To empower people to bring this to life, we’ve changed our internal structure and Global Standard documents to allow the leaders of each local Buy Nothing group to create a Local Variation based on our Global Standard documents, making changes and creating new best practices that serve local communities.  The founding team welcomes experimentation and innovation using our public copyright Global Standard documents, to create Local Variation Buy Nothing gift economies for all sorts of communities, not just for hyper-local geographic neighborhoods.</p>   
            
        </Alert>
    )




}



