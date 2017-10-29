class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: {},
      file: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    window.fetch('/api/record.json', {
      method: 'GET',
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log('', response);
      this.setState({ record: response });
    }.bind(this));
  }

  handleChange(event) {
    this.setState({ file: event.target.files[0] });
  }

  handleSubmit(event) {
    var file = this.state.file;
    var a = { "record" : "harry" }
    var reader = new FileReader();
    window.fetch('/api/record.csv', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'text/csv, charset=utf-8',
        'Content-Type': 'text/csv, charset-utf-8'
      },
      body: {
        record: file,
      }
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log('', response);
    }.bind(this));
  }

  render() {
    const { message, record } = this.state;
    console.log('.//////', record);
    return (
      <div className="file-upload-form">
        <form className="user-details-form">
          <input className="file-upload-input" type="file" onChange={this.handleChange}/>
          <input className="submit-button" type="button" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}
