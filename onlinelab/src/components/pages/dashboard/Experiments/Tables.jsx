import React, { PropTypes, Component } from 'react';
import {Pagination, Panel, Well, Button, PageHeader} from "react-bootstrap";



var TableHeader = React.createClass({
  render: function() {
    var headerdata = this.props.headerdata;
    var items = [];
    for (var i = 0; i < headerdata.length; i++) {
      items.push(<th key={i}>{headerdata[i]}</th>);
    }
    return (
      <tr>{items}</tr>
    );
  }
});

var TableBody = React.createClass({
  render: function() {
    var items = [];
    var bodydata = this.props.bodydata;
    for (var i = 0; i < bodydata.length; i++) {
      items.push(
              <tr role="row">
              {
                  bodydata[i].map(function (col) {
                    return <td>{col}</td>
                  })
              }
              </tr>
      );
    }

    return (
      <tbody>{items}</tbody>
    );

  }
});

var Tables = React.createClass({
  render: function() {
    var para = this.props.params.para;

    var headerdata = ['实验名称', '实验说明', '操作'];
    var bodydata = [
      ['控制原理', '下载', '预约'],
      ['控制原理1', '下载', '预约'],
      ['控制原理2', '下载', '预约'],
      ['控制原理3', '下载', '预约'],
      ['控制原理4', '下载', '预约'],
    ];
    var title = '实验台';

    return (

      <div>
        <div className="col-lg-12"> 
          <PageHeader>{title}</PageHeader> 
        </div>

        <div className="col-lg-12"> 
          <Panel header={<span>{title}列表</span>} >
            <div> 
              <div className="dataTable_wrapper">
                <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                  
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
                        <thead>
                          <TableHeader headerdata={headerdata}></TableHeader>
                        </thead>
                        <TableBody bodydata={bodydata}></TableBody>            
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12" >
                      <Pagination activePage={1}
                        items={6} perPage={10} 
                        first={true} last={true}
                        prev={true} next={true}
                        onSelect={ (pageNumber) => {} } className="pull-right" />  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </div>

      </div> 
    );
  }

});

export default Tables;