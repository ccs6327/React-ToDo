import React from 'react';
import Paper from 'material-ui/Paper';

const badgeStyle = {
  backgroundColor: 'rgba(0,0,0,0)',
  padding: 10,
  color: '#d9b310',
  width: 80,
  textAlign: 'center'
}

const countStyle = {
  fontSize: 20
}

const labelStyle = {
  fontSize: 11,
  fontWeight: 'bold'
}

const ProjectCountBadge = (props) => (
  <Paper style={badgeStyle}>
    <div style={countStyle}>{props.count}</div>
    <div style={labelStyle}>PROJECTS</div>
  </Paper>
)

export default ProjectCountBadge;
