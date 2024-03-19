import * as React from 'react';
import { Box, Typography, Link, IconButton, Stack } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import icQr from '../img/ic_qr.svg';

function PinLogin() {
  return (		
    <Box className='main login' component="main">
			<Box className='main-header'>
				<IconButton size="large" edge="start" href="/Home">
					<ArrowBackIosIcon />
				</IconButton>
				<Typography variant="h3" className='tit'>
					일회용 번호 로그인
				</Typography>
			</Box>
			<Box className='main-body'>
				<Typography variant="body1" className='desc'>
					모바일 기기에서 설치된 LG ThinQ 앱을 열고, 앱 설정 &#62; “ThinQ 계정 공유” 메뉴를 선택하여 일회용 로그인 번호를 입력해 주세요.
				</Typography>
				<Box className='view'>
					<Stack className='view-num' direction="row" spacing={2}>
						<span>5</span>
						<span>5</span>
						<span>8</span>
						<span>7</span>
						<span>3</span>
						<span>2</span>
					</Stack>
					<Typography variant="caption" className='view-time'>
						남은 시간 <strong className='blue'>39</strong> 초
					</Typography>
				</Box>
			</Box>
			<Box className='main-footer'>
				<Link href="/QrLogin" className='shortcut'>
					<img src={icQr} alt="QR Login Shortcut Icon"/>
					<span>QR 코드로 전환하기</span>				
				</Link>
			</Box>			
		</Box>
  );
}
export default PinLogin;

