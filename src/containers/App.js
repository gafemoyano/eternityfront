import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Slider from '../components/slider/Slider'
import SmallSlider from '../components/slider/SmallSlider'
import SliderX from '../components/SliderX/SliderX'

var popularChannels = [{
    detail: "Elevation",
    href: "http://www.eternityready.com/embed.php?vid=6f49862ef",
    img: "http://eternityready.com/images/channels/elevation.jpg",
    title: "Elevation",
    info: "Elevation Church in Charlotte, North Carolina, is a Southern Baptist multi-site church pastored by Steven Furtick.",
    rate: "4.5",
    age: "18+",
    star: 5
}, {
    detail: "Top Gear",
    href: "http://www.eternityready.com/embed.php?vid=c65891bf2",
    img: "http://eternityready.com/images/slider/smileofachild.jpg",
    title: "Smile of a Child",
    info: "TBN Network for Children. Featuring programming from the 90's such as Gospel Bill, Becky's Barn, Super Book and Flying House!",
    rate: "4.5",
    age: "5+",
    star: 5
}, {
    detail: "Top Gear",
    href: "http://www.eternityready.com/embed.php?vid=b3d45ef74",
    img: "http://www.eternityready.com/uploads/thumbs/b3d45ef74-1.jpg",
    title: "TCT Kids",
    info: "TCT Kids is a Children's Network featuring Shows for ages 5-11. Shows are Adventures In Odyssey, Quigley's Village, Swamp Critters, Gospel Bill, Faithville and Creation's Creatures.",
    rate: "4.5",
    age: "5+",
    star: 4
}, {
    detail: "Top Gear",
    href: "http://www.eternityready.com/embed.php?vid=997a405ad",
    img: "http://www.eternityready.com/uploads/thumbs/spirittelevision.jpg",
    title: "Spirit TV",
    info: "Spirit TV is a Music Channel featuring Christian Music from some of the Top Christian Artists in Pop, Rock and Worship. This Channel is popular for Teenagers and Young Adults!",
    rate: "4.5",
    age: "13+",
    star: 5
}, {
    detail: "Top Gear",
    href: "http://www.eternityready.com/embed.php?vid=992bd67dc",
    img: "http://eternityready.com/images/channels/newsmax.jpeg",
    title: "Newsmax TV",
    info: "Newsmax is a Independent News Network featuring American &amp; World News. Considered the most Popular Independent non main stream news media",
    rate: "4.5",
    age: "25+",
    star: 4
}, {
    detail: "Top Gear",
    href: "http://www.eternityready.com/embed.php?vid=a22194f90",
    img: "http://www.eternityready.com/uploads/thumbs/a22194f90-1.jpg",
    title: "The Relax Channel",
    info: "This Channel is very Popular on Eternity Ready. It's a Personal Favorite among our Members. You will get the best Experience at Night Time.",
    rate: "4.5",
    age: "18+",
    star: 5
}];

class App extends Component {
  render() {
    return (
        <div className="App" style={{backgroundColor: 'red'}}>
          <NavBar />
          <Slider items={popularChannels} sliderTitle='Popular Channels'/>
          <SmallSlider />
          <SliderX title="Popular Channels" items={popularChannels} />
        </div>
    );
  }
}

export default App
