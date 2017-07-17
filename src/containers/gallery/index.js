import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';


export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    };
  }

  componentDidMount() { 
    axios.get(`http://res.cloudinary.com/dtvbyqknt/image/list/${this.props.tag}.json`)
      .then(res => {
        console.log(res.data.resources)
        this.setState({gallery: res.data.resources});
      })
  }

  render() {
    return (
      <div className="gallery">
        <CloudinaryContext cloudName="dtvbyqknt">
          {
            this.state.gallery.map(data => {
              return (
                <div className="responsive" key={data.public_id}>
                    <div className="img">
                        <a target="_blank" href={`http://res.cloudinary.com/dtvbyqknt/image/upload/${data.public_id}.jpg`}>
                            <Image publicId={data.public_id}>
                                <Transformation
                                    crop="scale"
                                    width="100"
                                    height="100"
                                    dpr="auto"
                                    responsive_placeholder="blank"
                                />
                            </Image>
                        </a>
                        <div className="desc">Created at {data.created_at}</div>
                    </div>
                </div>
              )
            })
          }
        </CloudinaryContext>
      </div>
    )
  }
}
