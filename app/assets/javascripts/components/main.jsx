class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: {},
      orderOption: 'ASC'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOrderOption = this.handleOrderOption.bind(this);
  }

  componentDidMount() {
    window.fetch('/api/record.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      this.setState({ records: response });
    }.bind(this));
  }

  handleOrderOption() {
    let orderOption = this.state.orderOption;
    switch (orderOption) {
      case 'ASC':
        orderOption = 'DESC'
        this.setState({ orderOption: 'DESC' });
        break;
      case 'DESC':
        orderOption = 'ASC'
        this.setState({ orderOption: 'ASC' });
        break;
    }

    return orderOption;
  }

  handleChange() {
    let input, filter, table, tr, td, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  handleClick(event) {
    const { orderOption } = this.state;
    const currentOption = this.handleOrderOption(orderOption);
    const columnName = event.target.innerText;
    const orderBy = columnName +  ' ' + currentOption;

    window.fetch(`/api/record/order?column=${orderBy}`, {
      method: 'Get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      this.setState({ records: response });
    }.bind(this));
  }

  render() {
    const { records } = this.state;
    let renderTableBody

    if (records.length > 0) {
      renderTableBody = records.map((record) => {
        return (
          <tr key={record.id}>
            <td>{record.name}</td>
            <td>{record.date}</td>
            <td>{record.number}</td>
            <td>{record.description}</td>
          </tr>
        )
      });
    }

    return (
      <div>
        {records.length > 0 &&
          <div>
            <input id="input" className="filter" onChange={this.handleChange} type="text" />
            <table id="table">
              <thead>
                <tr>
                  <th onClick={this.handleClick}>name</th>
                  <th onClick={this.handleClick}>date</th>
                  <th onClick={this.handleClick}>number</th>
                  <th onClick={this.handleClick}>description</th>
                </tr>
              </thead>
              <tbody>
                {renderTableBody}
              </tbody>
            </table>
          </div>
        }
      </div>
    )
  }
}
