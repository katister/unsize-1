import React from 'react';
import { H1, H3 as _H3, H4, H6 as _H6, P as _P, Image, Button } from 'style';
import { Col, Row } from 'react-flexbox-grid-plus';
import styled from 'styled-components';
import ContentContainer from './ContentContainer';

const H3 = _H3.extend`
  margin-bottom: 0;
`;

const H6 = _H6.extend`
  margin: 15px auto;
`;

const P = _P.extend`
  margin: 15px auto;
`;

const StepWrapper = styled.div`
  height: 400px;
  @media (max-width: 768px) {
    min-height: 600px;
  }
`;

const LastStepWrapper = styled.div`
  height: 400px;
  @media (max-width: 768px) {
    min-height: 500px;
  }
`;

export default class Start extends React.Component {
  constructor() {
    super();
    this.state = { stepOneClicked: true, stepTwoClicked: true };
  }
  render() {
    return (
      <div id="start">
        <Row style={{ maxHeight: '75px' }}>
          <Col lgWidth={10} lgXOffset={1} xsXOffset={1}>
            <H1 align="left">Get Started</H1>
          </Col>
        </Row>
        <StepWrapper>
          <Row style={{ height: 'inherit' }}>
            <Col
              lgWidth={4}
              mdWidth={4}
              smWidth={5}
              xsWidth={10}
              lgXOffset={1}
              mdXOffset={1}
              smXOffset={0}
              xsXOffset={1}
              xsYOffset={11}
            >
              {this.state.stepOneClicked ? (
                <div>
                  <H3>Step 1</H3>
                  <H6>
                    Figure out your measurements with the help of Tailor, our
                    bluetooth measuring device.
                  </H6>
                </div>
              ) : (
                <div>
                  <H3>Meet Tailor</H3>
                  <P>
                    Meet our hardware! Ain't she a beaut? Aptly and
                    affectionately called Tailor, our smart device can take your
                    measurements accurately (up to an 1/8th of an centimeter)!
                    The device then sends your measurements to our chrome
                    extension via bluetooth so you can get to shopping sooner!
                  </P>
                </div>
              )}
              <Button
                style={{ marginRight: '5px' }}
                onClick={() =>
                  this.setState({ stepOneClicked: !this.state.stepOneClicked })
                }
              >
                {this.state.stepOneClicked ? 'Learn more' : 'Close'}
              </Button>

              <Button primary disabled>
                Pre-order
              </Button>
            </Col>
            <ContentContainer
              width={[5, 5, 6, 12]}
              height={[7, 6, 7, 10]}
              x={[6, 6, 6, 0]}
              y={[0, 0, 0, 0]}
              z={[0, 0, 0, 0]}
              img="https://media.giphy.com/media/xT1R9yrDcsDL5t65DW/giphy.gif"
            />
          </Row>
        </StepWrapper>
        <StepWrapper>
          <Row style={{ height: 'inherit' }}>
            <Col
              lgWidth={4}
              mdWidth={4}
              smWidth={5}
              xsWidth={10}
              lgXOffset={1}
              mdXOffset={1}
              smXOffset={0}
              xsXOffset={1}
              xsYOffset={11}
            >
              {this.state.stepTwoClicked ? (
                <div>
                  <H3>Step 2</H3>
                  <H6>
                    Download our Chrome Extension and automatically sync your
                    measurements with Tailor.
                  </H6>
                </div>
              ) : (
                <div>
                  <H3>Chrome Extension</H3>
                  <P>
                    Our chrome extension (the brains of the operation) tackles
                    inconsistent and confusing sizing. With your measurements
                    are entered, it works with select sites to automatically
                    choose the best size for you. It’s with you for every step
                    of the process to ensure you’re confident in your purchase.
                  </P>
                </div>
              )}

              <Button
                style={{ marginRight: '5px' }}
                onClick={() =>
                  this.setState({ stepTwoClicked: !this.state.stepTwoClicked })
                }
              >
                {this.state.stepTwoClicked ? 'Learn more' : 'Close'}
              </Button>
              <Button primary disabled>
                Download
              </Button>
            </Col>
            <ContentContainer
              width={[5, 5, 6, 12]}
              height={[7, 6, 7, 10]}
              x={[6, 6, 6, 0]}
              y={[0, 0, 0, 0]}
              z={[0, 0, 0, 0]}
              img="/static/images/step_2.png"
            />
          </Row>
        </StepWrapper>
        <LastStepWrapper>
          <Row style={{ height: 'inherit' }}>
            <Col
              lgWidth={4}
              mdWidth={4}
              smWidth={5}
              xsWidth={10}
              lgXOffset={1}
              mdXOffset={1}
              smXOffset={0}
              xsXOffset={1}
              xsYOffset={11}
            >
              <H3>Step 3</H3>
              <H6>
                Get shopping! Our extension works with a number of sites to
                choose the best size for you based on your measurements.
              </H6>
            </Col>
            <ContentContainer
              width={[5, 5, 6, 12]}
              height={[7, 6, 7, 10]}
              x={[6, 6, 6, 0]}
              y={[0, 0, 0, 0]}
              z={[0, 0, 0, 0]}
              img="/static/images/step_1.png"
            />
          </Row>
        </LastStepWrapper>
      </div>
    );
  }
}