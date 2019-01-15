import React from 'react'
import { Icon, Table } from 'semantic-ui-react';

const FileTable = (props) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Files</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      {props.currentFiles.map(file => (
        <Table.Row>
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

export default FileTable; 