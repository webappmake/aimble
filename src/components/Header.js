import * as React from 'react';
// import { Link, Tooltip, Popover, TextField, Button, Stack } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function IntellyticsHeader() {
  // const {
  //   type,
  //   title,
  //   description,
  //   alt,
  //   userInfo = false,
  //   links,
  //   logo,
  //   portalClassName,
  // } = context;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <header className="common-header">
      
      {/* <h1>
        <Link href="#" color="inherit" underline="none">
          <img className={portalClassName + '-logo'} src={logo} alt={alt} />
        </Link>
      </h1>
      <div className="introduction">
        <h2 className="tit">{title}</h2>
        <p className="desc">{description}</p>
      </div>
      <nav className="nav">
        {userInfo && (
          <>
            <Link 
              className="user-info" 
              href="#" 
              color="inherit" 
              underline="none"
              aria-describedby={id} 
              variant="contained" 
              onClick={handlePopoverClick}
            >
              <span>hyunjung.ryu</span>
              <span>플랫폼사업센터/클라우드플랫폼연구소/클라우드플랫폼(연) 클라우드플랫폼개발팀</span>              
            </Link>
            <Popover
              className='user-info-wrap'
              id={id}
              open={openPopover}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <h3 className='tit'>User Information</h3>
              <TextField 
                disabled                       
                fullWidth
                id="id"
                label="ID"
                defaultValue="hyunjung.ryu"
                variant="standard"
                margin="dense"
                size="small"
              />
              <TextField                        
                fullWidth
                id="name"
                label="이름"
                defaultValue="유현정"
                variant="standard"
                margin="dense"
                size="small"
              />
              <TextField
                  fullWidth
                  id="division"
                  label="소속"
                  defaultValue="(주)와이드티엔에스"
                  variant="standard"
                  margin="dense"
                  size="small"
              />
              <p className='text-helper'>&#8251;목적은 각 대시보드 카드에서 수정 가능 합니다.</p>
              <Stack direction="row" spacing={1}>
                <Button 
                  onClick={handlePopoverClose} 
                  color="secondary" 
                  variant="contained" 
                  size="small" 
                  fullWidth
                >
                  Save
                </Button>
                <Button 
                  color="gray" 
                  variant="contained" 
                  size="small"
                >
                  Refresh
                </Button>
              </Stack>              
          </Popover>
        </>
        )}
        <ul className={type === 'admin' ? 'link-list only' : 'link-list'}>
          {type === 'intellytics'
            ? links.map(({ href, title }, index) => {
                return (
                  <li key={index}>
                    {(title === 'Newsletter' && (
                      <Tooltip
                        title="The newsletter is only visible on the company's internal network (CloudPC, etc.)"
                        placement="left-start"
                        arrow
                      >
                        <Link href={href} color="inherit" underline="none">
                          {title}
                        </Link>
                      </Tooltip>
                    )) || (
                      <Link
                        href={href}
                        color="inherit"
                        underline="none"
                        onClick={handleClickOpen}
                      >
                        {title}
                      </Link>
                    )}
                  </li>
                );
              })
            : links.map(({ href, title }, index) => {
                return (
                  <li key={index}>
                    <Link href={href} color="inherit" underline="none">
                      {title}
                    </Link>
                  </li>
                );
              })}
        </ul>
      </nav> */}
    </header>
  );
}