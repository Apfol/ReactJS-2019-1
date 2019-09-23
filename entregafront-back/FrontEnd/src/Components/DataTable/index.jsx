import React, {Component} from "react"
import ReactDOM from "react-dom"
import "./DataTable.css"

class DataTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            headers: this.props.headers,
            data: this.props.data,
            sortby: null,
            decending: null,
            //data:[]
        };

        this.keyField = this.props.keyField || "id";
        this.noData = this.props.noData || "No records found !";
        this.width = this.props.width || "100%";

    }

    componentDidMount() {
        this.setState({
            decending:false,
        })
    }

    renderTableHeader = () => {
        let {headers} = this.state;
        headers.sort((a, b) => {
            if (a.index > b.index) return 1;
            return -1
        });

        let headerView = headers.map((header, index)=>{
            let title = header.title;
            let cleanTitle = header.accessor;
            let width = header.width;
            let className = header.accessor;
            return(
                <th key={cleanTitle}
                    ref={(th)=>this.th = th}
                    style={{width: width}}
                    data-col={cleanTitle}
                    className={className}
                >
                    <span className="header-cell" data-col={cleanTitle}>
                        {title}
                    </span>

                </th>
            )
        });

        return headerView
    };

    renderContent = ()=>{
        let {headers, data} = this.state;
        let contentView = data.map((row,rowIndex) =>{
            let tds = headers.map((headers, index)=>{
                let content = row[headers.accessor];
                let className = headers.accessor;
                return(
                    <td key={index} data-row={rowIndex} className={className}>
                        {content}
                    </td>
                )
            });
            return(
                <tr key={rowIndex} className={rowIndex % 2 === 0?"even":"uneven"}>
                    {tds}
                </tr>
            )
        });
        return(
            contentView
        )
    };

    renderNoData = ()=>{
        return(
            <tr>
                <td colSpan={this.state.headers.length}>
                    {this.noData}
                </td>
            </tr>
        )

    };

    onSort = (e) =>{
        let data = this.state.data.slice();
        let colIndex = ReactDOM.findDOMNode(e.target).parentNode.cellIndex;
        let colTitle = e.target.dataset.col;
        let descen = this.state.decending;

        data.sort((a,b) => {
            let sortValue = 0;

            if (parseInt(a[colTitle]) < parseInt(b[colTitle])) {
                sortValue = -1
            }else if(parseInt(a[colTitle]) > parseInt(b[colTitle])){
                sortValue = 1
            }

            if(descen) {
                sortValue = sortValue * -1;
                descen = !descen
            }
            return sortValue
        });
        this.setState({
            descending: descen,
            data:data,
            sortby: colIndex,
        });
    };

    componentDidUpdate(prevProps) {
        //Typical usage, don't forget to compare the props
        if (this.props.data !== prevProps.data) {
            this.setState({data:this.props.data})
        }
    }

    renderTable = () => {
        let title = this.props.title || "Data Table";
        let headerView = this.renderTableHeader();
        let contentView = this.state.data.length > 0?
                            this.renderContent(): this.renderNoData();

        return(
            <table className="data-inner-table">
                <caption className="data-table-caption">
                    <h3>{title}</h3>
                </caption>
                <thead onClick={this.onSort}>
                    <tr className="headersRow">
                        {headerView}
                    </tr>
                </thead>
                <tbody>
                    {contentView}
                </tbody>
            </table>
        )

    };

    render() {

        return (
            <div className="table">
                {this.renderTable()}
            </div>
        )
    }
}

export default DataTable
