import React, { PropTypes, Component } from 'react';
import {Pagination, Panel, Well, Button, PageHeader} from "react-bootstrap";

  var tableHeaders = ["实验名称", "实验说明", "操作"];

  var tableContents = [
    {'name' : '控制原理1', 'description' : '下载', 'operation' : '预约' },
    {'name' : '控制原理2', 'description' : '下载', 'operation' : '预约' },
    {'name' : '控制原理3', 'description' : '下载', 'operation' : '预约' },
    {'name' : '控制原理4', 'description' : '下载', 'operation' : '预约' },
    {'name' : '控制原理5', 'description' : '下载', 'operation' : '预约' },
  ];

var Tables = React.createClass({


  render: function() {
    return (

      <div>
        <div className="col-lg-12"> 
          <PageHeader>实验台</PageHeader> 
        </div>

        <div className="col-lg-12"> 
        	<Panel header={<span>实验台列表</span>} >
       			<div> 
       				<div className="dataTable_wrapper">
                <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
                        <thead>
                          <tr role="row">
                            {
                              tableHeaders.map(function(object, i){
                                return <th className="sorting_asc" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending">{object}</th>;
                              })
                            }
                            {/*
                            <th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending" style={ {width: 321} }>Browser</th>
                            <th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending" style={ {width: 299} }>Platform(s)</th>
                            <th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending" style={ {width: 231} }>Engine version</th>
                            <th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending" style={ {width: 180} }>CSS grade</th>
                            */}
                          </tr>
                        </thead>
                        <tbody>
                          {
                              tableContents.map(function(object, i){
                                return 
                                <tr className="odd" role="row">
                                  <td className="sorting_1">object.name</td>
                                  <td className="center">object.description</td>
                                  <td className="center">object.operation</td>
                                </tr>;
                              });
                          }               
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-7">
                    </div>
                    <div className="col-sm-5 pull-right">
                      <Pagination className="pull-right" activePage={1}
                        items={6} perPage={10} 
                        first={true} last={true}
                        prev={true} next={true}
                        onSelect={ (pageNumber) => {} }/>  
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