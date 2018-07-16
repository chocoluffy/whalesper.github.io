import React, { Component } from 'react';

import './whalesper.css';
import Banner from '../../../components/banner/banner';
import Background from '../../../components/background/background';

class WhalesperPage extends Component {

  render() {
    return <div>
      <Background
        src={require('../../../assets/background.jpg')}
      />
      <div className='Image-overlay'>
        <h1 className='Title-primary Text-white Text-center'>
          When innovation meets technology
        </h1>
      </div>
      <div className='App-content'>
        <article className="Paragraph-container">
          <h2 className="Title-secondary Text-left">Whalesper</h2>
          <p className='Text-left Body'>
            We have previously worked together and launched the product, Whalesper, at March 2017. It is originally an AI-powered local news aggregation iOS app. So far, we harvested nearly 31K users around Toronto area and ranked fourth in App Store Toronto search result.
          </p>
          <p className='Text-left Body'>
            The Whalesper app now uses NLP(natural language processing) to auto-classify around 200 feeds every day into target topics and make summarization for user.
          </p>

          <Banner></Banner>
        </article>
      </div>
    </div>;
  }

}

export default WhalesperPage;