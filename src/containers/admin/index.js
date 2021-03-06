import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// import './Admin.css';

const CLOUDINARY_UPLOAD_PRESET = 'kz1tdjw5';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dtvbyqknt/upload';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    const tagString = document.getElementById('tagName').checked ? 'portfolio' : 'forsale'
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file)
                     .field('tags', tagString);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <form>
        <div className="FileUpload">
          <label>
            Check to upload to 'Portfolio' (Leave unchecked to upload to 'For Sale')
            <input id='tagName' type="checkbox" />
          </label>
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*">
            <div>Drop an image or click to select a file to upload.</div>
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>
          }
        </div>
      </form>
    )
  }
}

export default Admin;
