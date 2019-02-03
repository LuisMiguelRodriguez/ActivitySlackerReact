import React from 'react'
import { Icon, Table, Menu } from 'semantic-ui-react';
import { connectWithStore } from '../../../store';

const FileTable = (props) => (
  <Menu fluid vertical tabular='right' style={{ textAlign: 'left' }}>

    <Menu.Item name='files'>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>Files</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {props.currentFiles.map((file, index) => (
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
    </Menu.Item>
  </Menu>
)

export default connectWithStore(FileTable); 