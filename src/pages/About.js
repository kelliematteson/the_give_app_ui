import '../scss/App.scss';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';





export default function About() {




    return(
        <div className="About">
            

            <Jumbotron fluid>
                <Container>
                    <h1>The Buy Nothing FaceBook Group</h1>
                        <p>We offer people a way to give and receive, share, lend, and express gratitude through a worldwide network of local gift economies in which the true wealth is the web of connections formed between people who are real-life neighbors.</p>  
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col md="auto">
            <h3>Principles:</h3>
        <ol className="principle-list">
            <li>We believe our hyper-local groups strengthen the social fabric of their communities, and ensure the health and vitality of each member.</li>
            <li>We come from a place of abundance ~ not scarcity.</li>
            <li>We believe in abundance, we give, we ask, we share, we lend and we express gratitude.</li>
            <li>We are a gift economy, not a charity. We see no difference between want and need, waste and treasure.</li>
            <li>We do not buy, sell, trade, barter, or otherwise exchange money for items or services.</li>
            <li>We measure wealth by the personal connections made and trust between people.</li>
            <li>We value people and their stories and narratives above the ‘stuff.’</li>
            <li>We are inclusive at our core.</li>
            <li>We value honesty and integrity in all our interactions.</li>
            <li>We view all gifts as equal; the human connection is the value.</li>
            <li>We believe every community has the same wealth of generosity and abundance.</li>
        </ol> 
                    </Col>
                </Row>
            </Container>
        </div>
    )




}



