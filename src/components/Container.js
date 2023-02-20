import * as React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Box } from '@mui/material';
// import Content from './Content';
// import SettingsIcon from '@mui/icons-material/Settings';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function IntellyticsContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box component="main" className="common-container">
      {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className="common-tabs" value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
          <Tab label="Authorized" {...a11yProps(0)} />
          <Tab label="Unauthorized" {...a11yProps(1)} />
          <Tab label="Declined" {...a11yProps(2)} />
          <Tab label="Long-term non-user" {...a11yProps(3)} />
          <Tab label="Admin" className='tab-admin' icon={<SettingsIcon />} iconPosition='start' {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel className="common-tab-panel" value={value} index={0}>
        <Content type="authorized" />
      </TabPanel>
      <TabPanel className="common-tab-panel" value={value} index={1}>
        <Content type="unauthorized" />
      </TabPanel>
      <TabPanel className="common-tab-panel" value={value} index={2}>
        <Content type="declined" />
      </TabPanel>
      <TabPanel className="common-tab-panel" value={value} index={3}>
        <Content type="longterm" />
      </TabPanel>
      <TabPanel className="common-tab-panel" value={value} index={4}>
        <Content type="admin" />
      </TabPanel> */}
    </Box>
  );
}
