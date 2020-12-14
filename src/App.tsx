import React, { Component, ReactComponentElement } from "react";
import Tweet from "./tweet";
import Tweet2 from "./tweet";
import App2 from "./tweet";
import "./tweet.css"

type CardProps = {
  title?: string,
  paragraph?: string
}

export const Card = ({ paragraph, title }: CardProps) =>
  <aside>
    <h2>{title}</h2>
    <p>
      {paragraph}
    </p>
    <Clock />
  </aside>

const card = <Card title="Welcome!" paragraph="To this example" />
//                                datentyp               returnType of function
export const Card2 = (paragraph?: string, title?: string): JSX.Element =>
  <aside>
    <h2>{title}</h2>
    <p>
      {paragraph}
    </p>
    <Clock />
  </aside>

type ClockState = {
  time: Date
}

export class Clock extends Component<{}, ClockState>{

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentWillMount() {
    this.tick();
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>
  }

}

const clock = <Clock />

type SampleProps = {

}

export class Sample extends Component<SampleProps> {
  constructor(props: SampleProps) {
    super(props)
  }
}

type NoticeProps = {
  msg: string
}

export class Notice extends Component<NoticeProps> {
  static defaultProps = {
    msg: 'Hello Everyone!'
  }

  render() {
    return <p>{this.props.msg}</p>
  }

}

const notice = <Notice />

type InitialCounter = {
  initialCount: number
}

const Count = ({ initialCount }: InitialCounter) =>
  <p>
    The Count is: {initialCount}
  </p>

class Counter extends Component {

  counts: number = 0;

  countit() {
      this.counts++;
  }

  componentWillMount(){
    this.countit();
  }


  render() {
    return <Count initialCount={this.counts} />
  }
}

const sayHello = () => {
  console.log('Hello');
}

const hello = 'Hello';

let counter = 0;

const count = () => {
  counter++;
  console.log(counter);
}

/* 
      <Tweet name="Peter" text="This is a random tweet by Peter" likes={10}/>
      <Tweet name="Jake" text="This is a random tweet by Jake" likes={0}/>
      <Tweet2 name="Norwall" text="This is a random tweet by Norwall" likes={550}/>
      <Tweet2 name="Mack" text="This is a random tweet by Mack" likes={17}/>
*/

function App() {
  return (
    <div className="app">
      <App2/>
    </div>   
  )
}

export default App;