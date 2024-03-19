import * as React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CircularProgress from '@mui/material/CircularProgress';
import appQrSvg from '../img/qrbg.png';
import icPin from '../img/ic_pin.svg';

function QrLogin() {
  return (		
    <Box className='main login' component="main">
			<Box className='main-header'>
				<IconButton size="large" edge="start" href="/Home">
					<ArrowBackIosIcon />
				</IconButton>
				<Typography variant="h3" className='tit'>
					QR 코드 로그인
				</Typography>
			</Box>
			<Box className='main-body'>
				<Typography variant="body1" className='desc'>
					모바일 기기에서 설치된 LG ThinQ 앱을 열고, 앱 설정 &#62; “ThinQ 계정 공유” 메뉴를 선택해 주세요.<br/><br/> 
					화면에 표시된 QR코드를 인식해 주세요.
				</Typography>
				<Box className='view'>
					<Box className='view-qr'>
						<img src={appQrSvg} alt="LG ThinQ App QR Code Sample"/>
						{/* <CircularProgress color="info" /> */}
          </Box>
					<Typography variant="caption" className='view-time'>
						남은 시간 <strong className='blue'>39</strong> 초
					</Typography>
				</Box>
			</Box>
			<Box className='main-footer'>
				<Link href="/PinLogin" className='shortcut'>
					<img src={icPin} alt="Pin Login Shortcut Icon"/>
					<span>일회용 번호로 전환하기</span>				
				</Link>
			</Box>			
		</Box>
  );
}
export default QrLogin;