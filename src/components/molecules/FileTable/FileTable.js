import React from 'react'
import { Icon, Table } from 'semantic-ui-react';
import { connectWithStore } from '../../../store';

const FileTable = (props) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Files</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      {props.currentFiles.map((file, index)=> (
        <Table.Row key={index}>
          <Table.Cell collapsing>
            <Icon name='file outline' /> 
          </Table.Cell>

          <Table.Cell>{file}</Table.Cell>
        </Table.Row>

      )

      )}

    </Table.Body>
  </Table>
)

export default connectWithStore(FileTable); 